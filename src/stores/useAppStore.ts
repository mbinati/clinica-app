import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme, PageId } from '../types';

interface AppState {
  theme: Theme;
  activePage: PageId;
  sidebarCollapsed: boolean;
  selectedPacienteId: string | null;
  selectedProfissionalId: string | null;

  setActivePage: (page: PageId) => void;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  setSelectedPaciente: (id: string | null) => void;
  setSelectedProfissional: (id: string | null) => void;
  navigateToPaciente: (pacienteId: string, page: PageId) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      activePage: 'dashboard',
      sidebarCollapsed: false,
      selectedPacienteId: null,
      selectedProfissionalId: null,

      setActivePage: (page) => set({ activePage: page }),
      toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
      toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
      setSelectedPaciente: (id) => set({ selectedPacienteId: id }),
      setSelectedProfissional: (id) => set({ selectedProfissionalId: id }),
      navigateToPaciente: (pacienteId, page) => set({ selectedPacienteId: pacienteId, activePage: page }),
    }),
    {
      name: 'clinica-app',
      partialize: (s) => ({ theme: s.theme, sidebarCollapsed: s.sidebarCollapsed }),
    }
  )
);
