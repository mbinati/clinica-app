import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ContaPagarReceber, Caixa, MovimentoCaixa, TipoConta, StatusConta, CategoriaConta, TipoMovimentoCaixa, MetodoPagamento } from '../types';
import { todayISO } from '../utils/formatters';

interface FinanceiroState {
  contas: ContaPagarReceber[];
  caixas: Caixa[];
  movimentos: MovimentoCaixa[];

  // Contas
  addConta: (conta: Omit<ContaPagarReceber, 'id' | 'criadoEm' | 'atualizadoEm'>) => void;
  updateConta: (id: string, dados: Partial<ContaPagarReceber>) => void;
  removeConta: (id: string) => void;

  // Caixa
  abrirCaixa: (saldoInicial: number, responsavelId: string) => void;
  fecharCaixa: (caixaId: string, saldoFinal: number) => void;

  // Movimentos
  addMovimento: (mov: Omit<MovimentoCaixa, 'id' | 'criadoEm'>) => void;
}

export const useFinanceiroStore = create<FinanceiroState>()(
  persist(
    (set) => ({
      contas: [],
      caixas: [],
      movimentos: [],

      addConta: (conta) => set(state => ({
        contas: [...state.contas, {
          ...conta,
          id: crypto.randomUUID(),
          criadoEm: new Date().toISOString(),
          atualizadoEm: new Date().toISOString(),
        }],
      })),

      updateConta: (id, dados) => set(state => ({
        contas: state.contas.map(c =>
          c.id === id ? { ...c, ...dados, atualizadoEm: new Date().toISOString() } : c
        ),
      })),

      removeConta: (id) => set(state => ({
        contas: state.contas.filter(c => c.id !== id),
      })),

      abrirCaixa: (saldoInicial, responsavelId) => set(state => ({
        caixas: [...state.caixas, {
          id: crypto.randomUUID(),
          dataAbertura: todayISO(),
          dataFechamento: null,
          saldoInicial,
          saldoFinal: null,
          status: 'aberto' as const,
          responsavelId,
          observacoes: '',
          criadoEm: new Date().toISOString(),
        }],
      })),

      fecharCaixa: (caixaId, saldoFinal) => set(state => ({
        caixas: state.caixas.map(c =>
          c.id === caixaId
            ? { ...c, status: 'fechado' as const, saldoFinal, dataFechamento: todayISO() }
            : c
        ),
      })),

      addMovimento: (mov) => set(state => ({
        movimentos: [...state.movimentos, {
          ...mov,
          id: crypto.randomUUID(),
          criadoEm: new Date().toISOString(),
        }],
      })),
    }),
    { name: 'clinica-financeiro' }
  )
);
