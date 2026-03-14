import { createHash, createHmac } from 'crypto';
import { cpus, hostname, platform } from 'os';
import { app } from 'electron';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

// Chave secreta do desenvolvedor — nunca expor ao cliente
const SECRET = 'mbai-sistemas-lic-2026-k9x3mw';

export interface LicenseInfo {
  ok: boolean;
  client?: string;
  expiresAt?: string;
  error?: string;
}

/** Gera um ID único baseado no hardware da máquina */
export function getMachineId(): string {
  const raw = [
    hostname(),
    cpus()[0]?.model ?? '',
    platform(),
  ].join('|');
  return createHash('sha256').update(raw).digest('hex').slice(0, 16).toUpperCase();
}

/** Valida uma chave de licença contra o hardware atual */
export function validateLicense(key: string): LicenseInfo {
  try {
    const parts = key.trim().split('.');
    if (parts.length !== 2) return { ok: false, error: 'Formato inválido' };
    const [payloadB64, sig] = parts;

    const payload = Buffer.from(payloadB64, 'base64').toString('utf-8');
    const expectedSig = createHmac('sha256', SECRET)
      .update(payload)
      .digest('hex')
      .slice(0, 16);

    if (sig !== expectedSig) return { ok: false, error: 'Chave inválida' };

    const { machineId, expiresAt, client } = JSON.parse(payload);

    if (machineId !== getMachineId()) {
      return { ok: false, error: 'Licença não pertence a este computador' };
    }
    if (new Date(expiresAt) < new Date()) {
      return { ok: false, error: 'Licença expirada em ' + new Date(expiresAt).toLocaleDateString('pt-BR') };
    }

    return { ok: true, client, expiresAt };
  } catch {
    return { ok: false, error: 'Chave corrompida' };
  }
}

const licFile = () => join(app.getPath('userData'), 'mbai-lic.key');

export function getLicenseFromDisk(): string | null {
  const p = licFile();
  if (!existsSync(p)) return null;
  return readFileSync(p, 'utf-8').trim();
}

export function saveLicenseToDisk(key: string): void {
  writeFileSync(licFile(), key.trim(), 'utf-8');
}

export function deleteLicenseFromDisk(): void {
  const p = licFile();
  if (existsSync(p)) {
    writeFileSync(p, '', 'utf-8'); // apaga conteúdo sem remover arquivo
  }
}
