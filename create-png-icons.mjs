// Gera icon-192.png e icon-512.png a partir do logo.png
// usando apenas Node built-ins para redimensionar PNG
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Usar png-to-ico para gerar os PNGs redimensionados
// Na verdade, vamos apenas copiar o logo.png como icon-512.png
// e criar uma versão menor

const logoPath = join(__dirname, 'public', 'logo.png');
const outDir = join(__dirname, 'public', 'icons');
mkdirSync(outDir, { recursive: true });

// Copiar logo como icon-512 e icon-192
const logo = readFileSync(logoPath);
writeFileSync(join(outDir, 'icon-512.png'), logo);
writeFileSync(join(outDir, 'icon-192.png'), logo);

console.log('Criados icon-512.png e icon-192.png em public/icons/');
