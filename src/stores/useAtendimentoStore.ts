import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Atendimento } from '../types';
import { generateId } from '../utils/generateId';
import { nowISO, horaAtual } from '../utils/formatters';

interface AtendimentoState {
  atendimentos: Atendimento[];
  addAtendimento: (a: Omit<Atendimento, 'id' | 'criadoEm' | 'atualizadoEm'>) => string;
  updateAtendimento: (id: string, data: Partial<Atendimento>) => void;
  getAtendimentosDoDia: (data: string) => Atendimento[];
  getAtendimentoByAgendamento: (agendamentoId: string) => Atendimento | undefined;
  registrarChegada: (id: string) => void;
  iniciarAtendimento: (id: string) => void;
  finalizarAtendimento: (id: string) => void;
}

export const useAtendimentoStore = create<AtendimentoState>()(
  persist(
    (set, get) => ({
      atendimentos: [],

      addAtendimento: (a) => {
        const id = generateId();
        const now = nowISO();
        set((s) => ({
          atendimentos: [...s.atendimentos, { ...a, id, criadoEm: now, atualizadoEm: now }],
        }));
        return id;
      },

      updateAtendimento: (id, data) =>
        set((s) => ({
          atendimentos: s.atendimentos.map((a) =>
            a.id === id ? { ...a, ...data, atualizadoEm: nowISO() } : a
          ),
        })),

      getAtendimentosDoDia: (data) =>
        get().atendimentos.filter((a) => a.data === data),

      getAtendimentoByAgendamento: (agendamentoId) =>
        get().atendimentos.find((a) => a.agendamentoId === agendamentoId),

      registrarChegada: (id) =>
        set((s) => ({
          atendimentos: s.atendimentos.map((a) =>
            a.id === id ? { ...a, status: 'presente' as const, horaChegada: horaAtual(), atualizadoEm: nowISO() } : a
          ),
        })),

      iniciarAtendimento: (id) =>
        set((s) => ({
          atendimentos: s.atendimentos.map((a) =>
            a.id === id ? { ...a, status: 'em_atendimento' as const, horaInicioAtendimento: horaAtual(), atualizadoEm: nowISO() } : a
          ),
        })),

      finalizarAtendimento: (id) =>
        set((s) => ({
          atendimentos: s.atendimentos.map((a) =>
            a.id === id ? { ...a, status: 'finalizado' as const, horaFimAtendimento: horaAtual(), atualizadoEm: nowISO() } : a
          ),
        })),
    }),
    { name: 'clinica-atendimentos' }
  )
);
