import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Profissional } from '../types';
import { generateId } from '../utils/generateId';

interface ProfissionalState {
  profissionais: Profissional[];
  addProfissional: (p: Omit<Profissional, 'id' | 'ativo'>) => string;
  updateProfissional: (id: string, data: Partial<Profissional>) => void;
  removeProfissional: (id: string) => void;
  getProfissional: (id: string) => Profissional | undefined;
}

export const useProfissionalStore = create<ProfissionalState>()(
  persist(
    (set, get) => ({
      profissionais: [],
      addProfissional: (p) => {
        const id = generateId();
        set((s) => ({
          profissionais: [...s.profissionais, { ...p, id, ativo: true }],
        }));
        return id;
      },
      updateProfissional: (id, data) =>
        set((s) => ({
          profissionais: s.profissionais.map((p) => (p.id === id ? { ...p, ...data } : p)),
        })),
      removeProfissional: (id) =>
        set((s) => ({
          profissionais: s.profissionais.map((p) => (p.id === id ? { ...p, ativo: false } : p)),
        })),
      getProfissional: (id) => get().profissionais.find((p) => p.id === id),
    }),
    { name: 'clinica-profissionais' }
  )
);
