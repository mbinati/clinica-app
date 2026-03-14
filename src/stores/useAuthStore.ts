import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Usuario, SessaoUsuario, PerfilUsuario } from '../types/auth';
import { generateId } from '../utils/generateId';
import { nowISO } from '../utils/formatters';
import { hashPassword, verifyPassword } from '../utils/crypto';

const SESSION_DURATION_MS = 12 * 60 * 60 * 1000; // 12h

interface AuthState {
  usuarios: Usuario[];
  currentSession: SessaoUsuario | null;

  // Computed
  get currentUser(): SessaoUsuario | null;
  isSessionExpired: () => boolean;

  // Auth
  login: (username: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;

  // User management
  addUsuario: (data: { username: string; password: string; nomeCompleto: string; perfil: PerfilUsuario }) => Promise<{ ok: boolean; error?: string }>;
  updateUsuario: (id: string, data: Partial<Pick<Usuario, 'nomeCompleto' | 'perfil' | 'ativo'>>) => void;
  resetPassword: (id: string, newPassword: string) => Promise<void>;

  // Internal
  _ensureAdmin: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      usuarios: [],
      currentSession: null,

      get currentUser() {
        return get().currentSession;
      },

      isSessionExpired: () => {
        const session = get().currentSession;
        if (!session) return true;
        return new Date(session.expiraEm).getTime() < Date.now();
      },

      login: async (username, password) => {
        await get()._ensureAdmin();
        const user = get().usuarios.find(
          (u) => u.username.toLowerCase() === username.toLowerCase() && u.ativo
        );
        if (!user) return { ok: false, error: 'Usuário ou senha inválidos' };

        const valid = await verifyPassword(password, user.passwordHash);
        if (!valid) return { ok: false, error: 'Usuário ou senha inválidos' };

        const now = nowISO();
        const session: SessaoUsuario = {
          userId: user.id,
          username: user.username,
          nomeCompleto: user.nomeCompleto,
          perfil: user.perfil,
          loginEm: now,
          expiraEm: new Date(Date.now() + SESSION_DURATION_MS).toISOString(),
        };

        set({
          currentSession: session,
          usuarios: get().usuarios.map((u) =>
            u.id === user.id ? { ...u, ultimoLogin: now } : u
          ),
        });
        return { ok: true };
      },

      logout: () => set({ currentSession: null }),

      addUsuario: async ({ username, password, nomeCompleto, perfil }) => {
        const exists = get().usuarios.some(
          (u) => u.username.toLowerCase() === username.toLowerCase()
        );
        if (exists) return { ok: false, error: 'Nome de usuário já existe' };
        if (password.length < 4) return { ok: false, error: 'Senha deve ter no mínimo 4 caracteres' };

        const passwordHash = await hashPassword(password);
        const now = nowISO();
        const usuario: Usuario = {
          id: generateId(),
          username,
          passwordHash,
          nomeCompleto,
          perfil,
          ativo: true,
          criadoEm: now,
          atualizadoEm: now,
          ultimoLogin: null,
        };
        set((s) => ({ usuarios: [...s.usuarios, usuario] }));
        return { ok: true };
      },

      updateUsuario: (id, data) =>
        set((s) => ({
          usuarios: s.usuarios.map((u) =>
            u.id === id ? { ...u, ...data, atualizadoEm: nowISO() } : u
          ),
        })),

      resetPassword: async (id, newPassword) => {
        const hash = await hashPassword(newPassword);
        set((s) => ({
          usuarios: s.usuarios.map((u) =>
            u.id === id ? { ...u, passwordHash: hash, atualizadoEm: nowISO() } : u
          ),
        }));
      },

      _ensureAdmin: async () => {
        if (get().usuarios.length === 0) {
          const hash = await hashPassword('admin123');
          const now = nowISO();
          set({
            usuarios: [
              {
                id: generateId(),
                username: 'admin',
                passwordHash: hash,
                nomeCompleto: 'Administrador',
                perfil: 'admin',
                ativo: true,
                criadoEm: now,
                atualizadoEm: now,
                ultimoLogin: null,
              },
            ],
          });
        }
      },
    }),
    {
      name: 'clinica-auth',
      partialize: (s) => ({
        usuarios: s.usuarios,
        currentSession: s.currentSession,
      }),
    }
  )
);
