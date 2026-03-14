// Gera um arquivo .ico simples (32x32 + 16x16) com fundo emerald e cruz branca
// Sem dependencias externas - gera BMP raw dentro do formato ICO
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function createBMP(size) {
  // BGRA pixel data
  const pixels = Buffer.alloc(size * size * 4);
  const radius = Math.floor(size * 14 / 64); // rounded corners radius
  const accent = { b: 0x81, g: 0xb9, r: 0x10, a: 255 }; // #10b981
  const white = { b: 255, g: 255, r: 255, a: 255 };
  const transparent = { b: 0, g: 0, r: 0, a: 0 };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;

      // Rounded rect check
      const inRect = isInRoundedRect(x, y, size, size, radius);

      if (!inRect) {
        pixels[idx] = transparent.b;
        pixels[idx + 1] = transparent.g;
        pixels[idx + 2] = transparent.r;
        pixels[idx + 3] = transparent.a;
        continue;
      }

      // Cruz branca no centro
      const cx = size / 2;
      const cy = size / 2;
      const armW = Math.max(2, Math.floor(size * 6 / 64)); // largura do braco
      const armL = Math.floor(size * 20 / 64); // comprimento do braco

      const inVertical = Math.abs(x - cx) < armW / 2 && Math.abs(y - cy) < armL;
      const inHorizontal = Math.abs(y - cy) < armW / 2 && Math.abs(x - cx) < armL;

      const color = (inVertical || inHorizontal) ? white : accent;
      pixels[idx] = color.b;
      pixels[idx + 1] = color.g;
      pixels[idx + 2] = color.r;
      pixels[idx + 3] = color.a;
    }
  }

  // BMP BITMAPINFOHEADER (40 bytes)
  const header = Buffer.alloc(40);
  header.writeUInt32LE(40, 0);           // header size
  header.writeInt32LE(size, 4);          // width
  header.writeInt32LE(size * 2, 8);      // height (doubled for ICO)
  header.writeUInt16LE(1, 12);           // planes
  header.writeUInt16LE(32, 14);          // bpp
  header.writeUInt32LE(0, 16);           // compression
  header.writeUInt32LE(pixels.length, 20); // image size

  // ICO BMP precisa dos pixels de baixo para cima
  const flipped = Buffer.alloc(pixels.length);
  for (let y = 0; y < size; y++) {
    const srcRow = y * size * 4;
    const dstRow = (size - 1 - y) * size * 4;
    pixels.copy(flipped, dstRow, srcRow, srcRow + size * 4);
  }

  // AND mask (1bpp, rows padded to 4 bytes)
  const andRowBytes = Math.ceil(size / 8);
  const andRowPadded = Math.ceil(andRowBytes / 4) * 4;
  const andMask = Buffer.alloc(andRowPadded * size, 0);

  return { header, pixels: flipped, andMask };
}

function isInRoundedRect(x, y, w, h, r) {
  if (x < 0 || x >= w || y < 0 || y >= h) return false;

  // Cantos
  const corners = [
    { cx: r, cy: r },           // top-left
    { cx: w - r - 1, cy: r },       // top-right
    { cx: r, cy: h - r - 1 },       // bottom-left
    { cx: w - r - 1, cy: h - r - 1 }, // bottom-right
  ];

  for (const c of corners) {
    const inCornerZone = (
      (x < r && y < r) ||
      (x >= w - r && y < r) ||
      (x < r && y >= h - r) ||
      (x >= w - r && y >= h - r)
    );
    if (inCornerZone) {
      const dx = x - c.cx;
      const dy = y - c.cy;
      if (dx * dx + dy * dy > r * r) return false;
    }
  }
  return true;
}

// Gerar ICO com 2 tamanhos: 32x32 e 16x16
const sizes = [32, 16];
const entries = sizes.map(s => createBMP(s));

// ICO header: 6 bytes
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);    // reserved
icoHeader.writeUInt16LE(1, 2);    // type: ICO
icoHeader.writeUInt16LE(sizes.length, 4); // count

// Directory entries: 16 bytes each
let offset = 6 + sizes.length * 16;
const dirEntries = [];

for (let i = 0; i < sizes.length; i++) {
  const s = sizes[i];
  const e = entries[i];
  const dataSize = e.header.length + e.pixels.length + e.andMask.length;

  const dir = Buffer.alloc(16);
  dir.writeUInt8(s === 256 ? 0 : s, 0);  // width
  dir.writeUInt8(s === 256 ? 0 : s, 1);  // height
  dir.writeUInt8(0, 2);   // color palette
  dir.writeUInt8(0, 3);   // reserved
  dir.writeUInt16LE(1, 4);  // planes
  dir.writeUInt16LE(32, 6); // bpp
  dir.writeUInt32LE(dataSize, 8);  // size
  dir.writeUInt32LE(offset, 12);   // offset

  dirEntries.push(dir);
  offset += dataSize;
}

// Montar arquivo
const parts = [icoHeader, ...dirEntries];
for (const e of entries) {
  parts.push(e.header, e.pixels, e.andMask);
}

const ico = Buffer.concat(parts);
const outPath = join(__dirname, 'public', 'icons', 'clinica.ico');

// Garantir que a pasta existe
import { mkdirSync } from 'fs';
mkdirSync(join(__dirname, 'public', 'icons'), { recursive: true });

writeFileSync(outPath, ico);
console.log(`ICO gerado: ${outPath} (${ico.length} bytes)`);
