import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getMachineId, validateLicense, getLicenseFromDisk, saveLicenseToDisk } from './license.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

process.env.DIST = path.join(__dirname, '../dist');
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, '../public');

let win: BrowserWindow | null;

const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC!, 'icons/icon-512.png'),
    show: false,
    title: 'mbai sistemas',
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.maximize();
  win.show();
  win.setMenuBarVisibility(false);

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(process.env.DIST!, 'index.html'));
  }
}

app.on('window-all-closed', () => {
  app.quit();
  win = null;
});

// Handlers IPC de licença
ipcMain.handle('license:getMachineId', () => getMachineId());

ipcMain.handle('license:status', () => {
  const key = getLicenseFromDisk();
  if (!key) return { ok: false, error: 'Sem licença' };
  return validateLicense(key);
});

ipcMain.handle('license:activate', (_event, key: string) => {
  const result = validateLicense(key);
  if (result.ok) saveLicenseToDisk(key);
  return result;
});

app.whenReady().then(createWindow);
