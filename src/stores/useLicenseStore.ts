import { create } from 'zustand';
import type { LicenseResult } from '../types/electron';

interface LicenseState {
  checked: boolean;
  licensed: boolean;
  machineId: string;
  client?: string;
  expiresAt?: string;
  check: () => Promise<void>;
  activate: (key: string) => Promise<LicenseResult>;
}

export const useLicenseStore = create<LicenseState>((set) => ({
  checked: false,
  licensed: false,
  machineId: '',

  check: async () => {
    // Se não está no Electron, pula verificação (modo dev/web)
    if (!window.electronAPI) {
      set({ checked: true, licensed: true });
      return;
    }
    const [status, machineId] = await Promise.all([
      window.electronAPI.getLicenseStatus(),
      window.electronAPI.getMachineId(),
    ]);
    set({
      checked: true,
      licensed: status.ok,
      machineId,
      client: status.client,
      expiresAt: status.expiresAt,
    });
  },

  activate: async (key: string): Promise<LicenseResult> => {
    if (!window.electronAPI) return { ok: false, error: 'Fora do Electron' };
    const result = await window.electronAPI.activateLicense(key);
    if (result.ok) {
      set({
        licensed: true,
        client: result.client,
        expiresAt: result.expiresAt,
      });
    }
    return result;
  },
}));
