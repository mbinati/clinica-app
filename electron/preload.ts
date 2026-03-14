import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getMachineId: (): Promise<string> =>
    ipcRenderer.invoke('license:getMachineId'),
  getLicenseStatus: (): Promise<{ ok: boolean; client?: string; expiresAt?: string; error?: string }> =>
    ipcRenderer.invoke('license:status'),
  activateLicense: (key: string): Promise<{ ok: boolean; client?: string; expiresAt?: string; error?: string }> =>
    ipcRenderer.invoke('license:activate', key),
});
