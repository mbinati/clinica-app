import pngToIco from 'png-to-ico';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pngPath = join(__dirname, 'public', 'logo.png');
const outDir = join(__dirname, 'public', 'icons');
mkdirSync(outDir, { recursive: true });

const buf = await pngToIco(pngPath);
const outPath = join(outDir, 'clinica.ico');
writeFileSync(outPath, buf);
console.log(`ICO gerado: ${outPath} (${buf.length} bytes)`);
