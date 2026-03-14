import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Agendamento } from '../types';
import { generateId } from '../utils/generateId';
import { nowISO } from '../utils/formatters';

interface AgendaState {
  agendamentos: Agendamento[];
  addAgendamento: (a: Omit<Agendamento, 'id' | 'criadoEm' | 'atualizadoEm'>) => string;
  updateAgendamento: (id: string, data: Partial<Agendamento>) => void;
  removeAgendamento: (id: string) => void;
  getAgendamento: (id: string) => Agendamento | undefined;
  getAgendamentosByDate: (data: string) => Agendamento[];
  getAgendamentosByPaciente: (pacienteId: string) => Agendamento[];
}

export const useAgendaStore = create<AgendaState>()(
  persist(
    (set, get) => ({
      agendamentos: [],
      addAgendamento: (a) => {
        const id = generateId();
        const now = nowISO();
        set((s) => ({
          agendamentos: [...s.agendamentos, { ...a, id, criadoEm: now, atualizadoEm: now }],
        }));
        return id;
      },
      updateAgendamento: (id, data) =>
        set((s) => ({
          agendamentos: s.agendamentos.map((a) =>
            a.id === id ? { ...a, ...data, atualizadoEm: nowISO() } : a
          ),
        })),
      removeAgendamento: (id) =>
        set((s) => ({ agendamentos: s.agendamentos.filter((a) => a.id !== id) })),
      getAgendamento: (id) => get().agendamentos.find((a) => a.id === id),
      getAgendamentosByDate: (data) => get().agendamentos.filter((a) => a.data === data),
      getAgendamentosByPaciente: (pid) => get().agendamentos.filter((a) => a.pacienteId === pid),
    }),
    { name: 'clinica-agenda' }
  )
);
