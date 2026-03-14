export interface LicenseResult {
  ok: boolean;
  client?: string;
  expiresAt?: string;
  error?: string;
}

declare global {
  interface Window {
    electronAPI?: {
      getMachineId: () => Promise<string>;
      getLicenseStatus: () => Promise<LicenseResult>;
      activateLicense: (key: string) => Promise<LicenseResult>;
    };
  }
}
