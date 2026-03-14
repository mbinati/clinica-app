// Script launcher para rodar vite a partir do diretório correto
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
process.chdir(__dirname);

const server = await createServer({
  root: __dirname,
  server: {
    host: true,
    port: 5175,
  },
});

await server.listen();
server.printUrls();
