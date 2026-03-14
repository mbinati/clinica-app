import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Paciente } from '../types';
import { generateId } from '../utils/generateId';
import { nowISO } from '../utils/formatters';

interface PacienteState {
  pacientes: Paciente[];
  addPaciente: (p: Omit<Paciente, 'id' | 'criadoEm' | 'atualizadoEm' | 'ativo'>) => string;
  updatePaciente: (id: string, data: Partial<Paciente>) => void;
  removePaciente: (id: string) => void;
  getPaciente: (id: string) => Paciente | undefined;
}

export const usePacienteStore = create<PacienteState>()(
  persist(
    (set, get) => ({
      pacientes: [],
      addPaciente: (p) => {
        const id = generateId();
        const now = nowISO();
        set((s) => ({
          pacientes: [...s.pacientes, { ...p, id, ativo: true, criadoEm: now, atualizadoEm: now }],
        }));
        return id;
      },
      updatePaciente: (id, data) =>
        set((s) => ({
          pacientes: s.pacientes.map((p) => (p.id === id ? { ...p, ...data, atualizadoEm: nowISO() } : p)),
        })),
      removePaciente: (id) =>
        set((s) => ({
          pacientes: s.pacientes.map((p) => (p.id === id ? { ...p, ativo: false } : p)),
        })),
      getPaciente: (id) => get().pacientes.find((p) => p.id === id),
    }),
    { name: 'clinica-pacientes' }
  )
);
