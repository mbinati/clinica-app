import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Procedimento, Convenio } from '../types';
import { generateId } from '../utils/generateId';
import { defaultProcedimentos } from '../data/procedimentos';
import { defaultConvenios } from '../data/convenios';

interface CatalogoState {
  procedimentos: Procedimento[];
  convenios: Convenio[];

  addProcedimento: (p: Omit<Procedimento, 'id' | 'ativo'>) => string;
  updateProcedimento: (id: string, data: Partial<Procedimento>) => void;
  removeProcedimento: (id: string) => void;
  getProcedimento: (id: string) => Procedimento | undefined;

  addConvenio: (c: Omit<Convenio, 'id' | 'ativo'>) => string;
  updateConvenio: (id: string, data: Partial<Convenio>) => void;
  removeConvenio: (id: string) => void;
  getConvenio: (id: string) => Convenio | undefined;
}

export const useCatalogoStore = create<CatalogoState>()(
  persist(
    (set, get) => ({
      procedimentos: defaultProcedimentos,
      convenios: defaultConvenios,

      addProcedimento: (p) => {
        const id = generateId();
        set((s) => ({ procedimentos: [...s.procedimentos, { ...p, id, ativo: true }] }));
        return id;
      },
      updateProcedimento: (id, data) =>
        set((s) => ({ procedimentos: s.procedimentos.map((p) => (p.id === id ? { ...p, ...data } : p)) })),
      removeProcedimento: (id) =>
        set((s) => ({ procedimentos: s.procedimentos.map((p) => (p.id === id ? { ...p, ativo: false } : p)) })),
      getProcedimento: (id) => get().procedimentos.find((p) => p.id === id),

      addConvenio: (c) => {
        const id = generateId();
        set((s) => ({ convenios: [...s.convenios, { ...c, id, ativo: true }] }));
        return id;
      },
      updateConvenio: (id, data) =>
        set((s) => ({ convenios: s.convenios.map((c) => (c.id === id ? { ...c, ...data } : c)) })),
      removeConvenio: (id) =>
        set((s) => ({ convenios: s.convenios.map((c) => (c.id === id ? { ...c, ativo: false } : c)) })),
      getConvenio: (id) => get().convenios.find((c) => c.id === id),
    }),
    {
      name: 'clinica-catalogo',
      merge: (persisted: any, current) => {
        const merged = { ...current, ...(persisted || {}) };
        if (!merged.procedimentos?.length) merged.procedimentos = defaultProcedimentos;
        if (!merged.convenios?.length) merged.convenios = defaultConvenios;
        return merged;
      },
    }
  )
);
