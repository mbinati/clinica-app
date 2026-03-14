// Gera ICO a partir do logo.png usando apenas Node built-ins
// Formato ICO com PNG embutido (formato moderno, suportado por Windows Vista+)
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Ler o PNG original
const pngPath = join(__dirname, 'public', 'logo.png');
const pngData = readFileSync(pngPath);

// ICO com PNG embutido (formato moderno - Windows Vista+)
// Header: 6 bytes
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);     // reserved
header.writeUInt16LE(1, 2);     // type = ICO
header.writeUInt16LE(1, 4);     // 1 imagem

// Directory entry: 16 bytes
const dir = Buffer.alloc(16);
dir.writeUInt8(0, 0);           // width (0 = 256px)
dir.writeUInt8(0, 1);           // height (0 = 256px)
dir.writeUInt8(0, 2);           // color palette
dir.writeUInt8(0, 3);           // reserved
dir.writeUInt16LE(1, 4);        // color planes
dir.writeUInt16LE(32, 6);       // bits per pixel
dir.writeUInt32LE(pngData.length, 8);  // size of PNG data
dir.writeUInt32LE(22, 12);      // offset (6 header + 16 dir = 22)

const ico = Buffer.concat([header, dir, pngData]);

const outDir = join(__dirname, 'public', 'icons');
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, 'clinica.ico');
writeFileSync(outPath, ico);
console.log(`ICO gerado: ${outPath} (${ico.length} bytes) - PNG embutido ${pngData.length} bytes`);
