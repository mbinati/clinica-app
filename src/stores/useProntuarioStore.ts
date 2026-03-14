import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Anamnese, Evolucao, Prescricao, SolicitacaoExame, Anexo, SecaoProntuario, SecaoProntuarioTipo } from '../types';
import { generateId } from '../utils/generateId';
import { nowISO } from '../utils/formatters';

interface ProntuarioState {
  anamneses: Anamnese[];
  evolucoes: Evolucao[];
  prescricoes: Prescricao[];
  exames: SolicitacaoExame[];
  anexos: Anexo[];
  secoes: SecaoProntuario[];

  // Anamnese
  addAnamnese: (a: Omit<Anamnese, 'id' | 'criadoEm' | 'atualizadoEm'>) => string;
  updateAnamnese: (id: string, data: Partial<Anamnese>) => void;
  getAnamnese: (pacienteId: string) => Anamnese | undefined;

  // Evolucao
  addEvolucao: (e: Omit<Evolucao, 'id' | 'criadoEm'>) => string;
  updateEvolucao: (id: string, data: Partial<Evolucao>) => void;
  removeEvolucao: (id: string) => void;
  getEvolucoesByPaciente: (pacienteId: string) => Evolucao[];

  // Prescricao
  addPrescricao: (p: Omit<Prescricao, 'id' | 'criadoEm'>) => string;
  getPrescricoesByPaciente: (pacienteId: string) => Prescricao[];

  // Exames
  addExame: (e: Omit<SolicitacaoExame, 'id' | 'criadoEm'>) => string;
  getExamesByPaciente: (pacienteId: string) => SolicitacaoExame[];

  // Anexos
  addAnexo: (a: Omit<Anexo, 'id' | 'criadoEm'>) => string;
  removeAnexo: (id: string) => void;
  getAnexosByPaciente: (pacienteId: string) => Anexo[];

  // Seções modulares
  addSecao: (s: Omit<SecaoProntuario, 'id' | 'criadoEm' | 'atualizadoEm'>) => string;
  updateSecao: (id: string, data: Partial<SecaoProntuario>) => void;
  removeSecao: (id: string) => void;
  getSecoesByAtendimento: (atendimentoId: string) => SecaoProntuario[];
  getSecoesByPaciente: (pacienteId: string) => SecaoProntuario[];
}

export const useProntuarioStore = create<ProntuarioState>()(
  persist(
    (set, get) => ({
      anamneses: [],
      evolucoes: [],
      prescricoes: [],
      exames: [],
      anexos: [],
      secoes: [],

      // Anamnese
      addAnamnese: (a) => {
        const id = generateId();
        const now = nowISO();
        set((s) => ({ anamneses: [...s.anamneses, { ...a, id, criadoEm: now, atualizadoEm: now }] }));
        return id;
      },
      updateAnamnese: (id, data) =>
        set((s) => ({
          anamneses: s.anamneses.map((a) => (a.id === id ? { ...a, ...data, atualizadoEm: nowISO() } : a)),
        })),
      getAnamnese: (pid) => get().anamneses.find((a) => a.pacienteId === pid),

      // Evolucao
      addEvolucao: (e) => {
        const id = generateId();
        set((s) => ({ evolucoes: [...s.evolucoes, { ...e, id, criadoEm: nowISO() }] }));
        return id;
      },
      updateEvolucao: (id, data) =>
        set((s) => ({ evolucoes: s.evolucoes.map((e) => (e.id === id ? { ...e, ...data } : e)) })),
      removeEvolucao: (id) => set((s) => ({ evolucoes: s.evolucoes.filter((e) => e.id !== id) })),
      getEvolucoesByPaciente: (pid) =>
        get().evolucoes.filter((e) => e.pacienteId === pid).sort((a, b) => b.data.localeCompare(a.data)),

      // Prescricao
      addPrescricao: (p) => {
        const id = generateId();
        set((s) => ({ prescricoes: [...s.prescricoes, { ...p, id, criadoEm: nowISO() }] }));
        return id;
      },
      getPrescricoesByPaciente: (pid) =>
        get().prescricoes.filter((p) => p.pacienteId === pid).sort((a, b) => b.data.localeCompare(a.data)),

      // Exames
      addExame: (e) => {
        const id = generateId();
        set((s) => ({ exames: [...s.exames, { ...e, id, criadoEm: nowISO() }] }));
        return id;
      },
      getExamesByPaciente: (pid) =>
        get().exames.filter((e) => e.pacienteId === pid).sort((a, b) => b.data.localeCompare(a.data)),

      // Anexos
      addAnexo: (a) => {
        const id = generateId();
        set((s) => ({ anexos: [...s.anexos, { ...a, id, criadoEm: nowISO() }] }));
        return id;
      },
      removeAnexo: (id) => set((s) => ({ anexos: s.anexos.filter((a) => a.id !== id) })),
      getAnexosByPaciente: (pid) => get().anexos.filter((a) => a.pacienteId === pid),

      // Seções modulares
      addSecao: (s) => {
        const id = generateId();
        const now = nowISO();
        set((state) => ({ secoes: [...state.secoes, { ...s, id, criadoEm: now, atualizadoEm: now }] }));
        return id;
      },
      updateSecao: (id, data) =>
        set((s) => ({
          secoes: s.secoes.map((sec) => (sec.id === id ? { ...sec, ...data, atualizadoEm: nowISO() } : sec)),
        })),
      removeSecao: (id) => set((s) => ({ secoes: s.secoes.filter((sec) => sec.id !== id) })),
      getSecoesByAtendimento: (atendimentoId) =>
        get().secoes.filter((s) => s.atendimentoId === atendimentoId).sort((a, b) => a.criadoEm.localeCompare(b.criadoEm)),
      getSecoesByPaciente: (pid) =>
        get().secoes.filter((s) => s.pacienteId === pid).sort((a, b) => b.criadoEm.localeCompare(a.criadoEm)),
    }),
    { name: 'clinica-prontuario' }
  )
);
