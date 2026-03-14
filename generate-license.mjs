/**
 * mbai sistemas — Gerador de Licenças
 *
 * Uso:
 *   node generate-license.mjs <machineId> <cliente> <dias>
 *
 * Exemplo:
 *   node generate-license.mjs ABCD1234EFGH5678 "Clinica Exemplo" 365
 */

import { createHash, createHmac } from 'crypto';
import { cpus, hostname, platform } from 'os';

// ⚠️ DEVE ser igual à SECRET em electron/license.ts
const SECRET = 'mbai-sistemas-lic-2026-k9x3mw';

function getMachineId() {
  const raw = [hostname(), cpus()[0]?.model ?? '', platform()].join('|');
  return createHash('sha256').update(raw).digest('hex').slice(0, 16).toUpperCase();
}

function generateLicense(machineId, client, days) {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + days);

  const payload = JSON.stringify({
    machineId,
    expiresAt: expiresAt.toISOString().split('T')[0],
    client,
  });

  const sig = createHmac('sha256', SECRET)
    .update(payload)
    .digest('hex')
    .slice(0, 16);

  const key = Buffer.from(payload).toString('base64') + '.' + sig;

  return { key, expiresAt: expiresAt.toLocaleDateString('pt-BR') };
}

// ── Execução ──────────────────────────────────────────────
const args = process.argv.slice(2);

if (args[0] === '--minha-maquina') {
  console.log('\nID desta máquina:', getMachineId(), '\n');
  process.exit(0);
}

if (args.length < 3) {
  console.log(`
╔══════════════════════════════════════════════╗
║      mbai sistemas — Gerador de Licenças     ║
╚══════════════════════════════════════════════╝

Uso:
  node generate-license.mjs <machineId> "<cliente>" <dias>

Exemplos:
  node generate-license.mjs ABCD1234EFGH5678 "Clinica XYZ" 365
  node generate-license.mjs ABCD1234EFGH5678 "Clinica XYZ" 30

Ver ID desta máquina:
  node generate-license.mjs --minha-maquina
`);
  process.exit(1);
}

const [machineId, client, daysStr] = args;
const days = parseInt(daysStr, 10);

if (isNaN(days) || days <= 0) {
  console.error('Erro: dias deve ser um número positivo.');
  process.exit(1);
}

const { key, expiresAt } = generateLicense(machineId.toUpperCase(), client, days);

console.log(`
╔══════════════════════════════════════════════╗
║      mbai sistemas — Licença Gerada          ║
╚══════════════════════════════════════════════╝

  Cliente  : ${client}
  Machine  : ${machineId.toUpperCase()}
  Expira   : ${expiresAt} (${days} dias)

  ── Chave de Licença ──────────────────────────

  ${key}

  ─────────────────────────────────────────────
  Envie a chave acima ao cliente.
`);
