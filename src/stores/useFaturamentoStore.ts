import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Fatura, Pagamento } from '../types';
import { generateId } from '../utils/generateId';
import { nowISO } from '../utils/formatters';

interface FaturamentoState {
  faturas: Fatura[];
  pagamentos: Pagamento[];

  addFatura: (f: Omit<Fatura, 'id' | 'criadoEm' | 'atualizadoEm'>) => string;
  updateFatura: (id: string, data: Partial<Fatura>) => void;
  removeFatura: (id: string) => void;
  getFatura: (id: string) => Fatura | undefined;
  getFaturasByPaciente: (pacienteId: string) => Fatura[];

  addPagamento: (p: Omit<Pagamento, 'id' | 'criadoEm'>) => string;
  getPagamentosByFatura: (faturaId: string) => Pagamento[];
}

export const useFaturamentoStore = create<FaturamentoState>()(
  persist(
    (set, get) => ({
      faturas: [],
      pagamentos: [],

      addFatura: (f) => {
        const id = generateId();
        const now = nowISO();
        set((s) => ({ faturas: [...s.faturas, { ...f, id, criadoEm: now, atualizadoEm: now }] }));
        return id;
      },
      updateFatura: (id, data) =>
        set((s) => ({
          faturas: s.faturas.map((f) => (f.id === id ? { ...f, ...data, atualizadoEm: nowISO() } : f)),
        })),
      removeFatura: (id) =>
        set((s) => ({
          faturas: s.faturas.map((f) => (f.id === id ? { ...f, status: 'cancelado' as const } : f)),
        })),
      getFatura: (id) => get().faturas.find((f) => f.id === id),
      getFaturasByPaciente: (pid) =>
        get().faturas.filter((f) => f.pacienteId === pid).sort((a, b) => b.data.localeCompare(a.data)),

      addPagamento: (p) => {
        const id = generateId();
        set((s) => ({ pagamentos: [...s.pagamentos, { ...p, id, criadoEm: nowISO() }] }));
        // Update fatura status
        const fatura = get().faturas.find((f) => f.id === p.faturaId);
        if (fatura) {
          const totalPago = get().pagamentos
            .filter((pg) => pg.faturaId === p.faturaId)
            .reduce((sum, pg) => sum + pg.valor, 0) + p.valor;
          const newStatus = totalPago >= fatura.valorFinal ? 'pago' : 'parcial';
          set((s) => ({
            faturas: s.faturas.map((f) =>
              f.id === p.faturaId ? { ...f, status: newStatus, atualizadoEm: nowISO() } : f
            ),
          }));
        }
        return id;
      },
      getPagamentosByFatura: (fid) =>
        get().pagamentos.filter((p) => p.faturaId === fid).sort((a, b) => b.data.localeCompare(a.data)),
    }),
    { name: 'clinica-faturamento' }
  )
);
