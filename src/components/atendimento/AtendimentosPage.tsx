import { useState, useMemo, useEffect } from 'react';
import { useAgendaStore } from '../../stores/useAgendaStore';
import { useAtendimentoStore } from '../../stores/useAtendimentoStore';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { useProfissionalStore } from '../../stores/useProfissionalStore';
import { useAppStore } from '../../stores/useAppStore';
import { todayISO, formatDate, statusLabel, statusColor, tempoEspera } from '../../utils/formatters';
import StatusBadge from '../shared/StatusBadge';
import EmptyState from '../shared/EmptyState';
import { UserCheck, Clock, Play, CheckCircle, XCircle, ClipboardList, Plus, ChevronLeft, ChevronRight, DollarSign } from 'lucide-react';
import type { StatusAtendimento } from '../../types';

type Ordenacao = 'agendamento' | 'espera' | 'situacao';

export default function AtendimentosPage() {
  const [data, setData] = useState(todayISO());
  const [busca, setBusca] = useState('');
  const [ordenacao, setOrdenacao] = useState<Ordenacao>('agendamento');

  const agendamentos = useAgendaStore(s => s.agendamentos);
  const updateAgendamento = useAgendaStore(s => s.updateAgendamento);
  const atendimentos = useAtendimentoStore(s => s.atendimentos);
  const addAtendimento = useAtendimentoStore(s => s.addAtendimento);
  const registrarChegada = useAtendimentoStore(s => s.registrarChegada);
  const iniciarAtendimento = useAtendimentoStore(s => s.iniciarAtendimento);
  const finalizarAtendimento = useAtendimentoStore(s => s.finalizarAtendimento);
  const updateAtendimento = useAtendimentoStore(s => s.updateAtendimento);
  const pacientes = usePacienteStore(s => s.pacientes);
  const profissionais = useProfissionalStore(s => s.profissionais);
  const setActivePage = useAppStore(s => s.setActivePage);
  const setSelectedPaciente = useAppStore(s => s.setSelectedPaciente);

  // Sincronizar agendamentos do dia com atendimentos
  useEffect(() => {
    const agendDoDia = agendamentos.filter(a => a.data === data && a.status !== 'cancelado');
    agendDoDia.forEach(ag => {
      const existe = atendimentos.find(at => at.agendamentoId === ag.id);
      if (!existe) {
        addAtendimento({
          agendamentoId: ag.id,
          pacienteId: ag.pacienteId,
          profissionalId: ag.profissionalId,
          data: ag.data,
          horaChegada: null,
          horaInicioAtendimento: null,
          horaFimAtendimento: null,
          status: ag.status === 'confirmado' ? 'confirmado' : 'agendado',
          observacoes: '',
        });
      }
    });
  }, [data, agendamentos.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const getPaciente = (id: string) => pacientes.find(p => p.id === id);
  const getProfissional = (id: string) => profissionais.find(p => p.id === id);

  // Lista filtrada e ordenada
  const listaAtendimentos = useMemo(() => {
    let lista = atendimentos.filter(a => a.data === data);

    if (busca) {
      const q = busca.toLowerCase();
      lista = lista.filter(a => {
        const pac = getPaciente(a.pacienteId);
        return pac && (pac.nome.toLowerCase().includes(q) || pac.cpf.includes(q));
      });
    }

    // Ordenação
    const statusOrdem: Record<string, number> = {
      em_atendimento: 0, presente: 1, confirmado: 2, agendado: 3, finalizado: 4, cancelado: 5, faltou: 6,
    };

    lista.sort((a, b) => {
      if (ordenacao === 'situacao') return (statusOrdem[a.status] ?? 9) - (statusOrdem[b.status] ?? 9);
      if (ordenacao === 'espera') {
        if (a.horaChegada && b.horaChegada) return a.horaChegada.localeCompare(b.horaChegada);
        if (a.horaChegada) return -1;
        if (b.horaChegada) return 1;
      }
      // agendamento (default): por hora do agendamento
      const agA = agendamentos.find(ag => ag.id === a.agendamentoId);
      const agB = agendamentos.find(ag => ag.id === b.agendamentoId);
      return (agA?.horaInicio ?? '').localeCompare(agB?.horaInicio ?? '');
    });

    return lista;
  }, [atendimentos, data, busca, ordenacao, agendamentos, pacientes]); // eslint-disable-line react-hooks/exhaustive-deps

  const navegarDia = (delta: number) => {
    const d = new Date(data);
    d.setDate(d.getDate() + delta);
    setData(d.toISOString().split('T')[0]);
  };

  const irParaProntuario = (pacienteId: string) => {
    setSelectedPaciente(pacienteId);
    setActivePage('prontuario');
  };

  const atenderSemAgendamento = () => {
    // Placeholder — abre prontuário direto
    setActivePage('prontuario');
  };

  // Sincroniza status do agendamento vinculado
  const syncAgendamento = (atendimentoId: string, agendStatus: string) => {
    const at = atendimentos.find(a => a.id === atendimentoId);
    if (at?.agendamentoId) {
      updateAgendamento(at.agendamentoId, { status: agendStatus as any });
    }
  };

  const handleConfirmar = (atId: string) => {
    updateAtendimento(atId, { status: 'confirmado' });
    syncAgendamento(atId, 'confirmado');
  };

  const handleFaltou = (atId: string) => {
    updateAtendimento(atId, { status: 'faltou' });
    syncAgendamento(atId, 'faltou');
  };

  const handleChegada = (atId: string) => {
    registrarChegada(atId);
  };

  const handleIniciar = (atId: string, pacienteId: string) => {
    iniciarAtendimento(atId);
    syncAgendamento(atId, 'em_atendimento');
    irParaProntuario(pacienteId);
  };

  const handleFinalizar = (atId: string) => {
    finalizarAtendimento(atId);
    syncAgendamento(atId, 'atendido');
  };

  const renderBotoes = (at: { id: string; status: StatusAtendimento; pacienteId: string }) => {
    const btnBase = 'px-3 py-1.5 text-xs font-medium rounded-lg transition-colors';
    switch (at.status) {
      case 'agendado':
        return (
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => handleConfirmar(at.id)} className={`${btnBase} bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400`}>
              <CheckCircle size={14} className="inline mr-1" />Confirmar
            </button>
            <button onClick={() => handleFaltou(at.id)} className={`${btnBase} bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400`}>
              <XCircle size={14} className="inline mr-1" />Faltou
            </button>
          </div>
        );
      case 'confirmado':
        return (
          <button onClick={() => handleChegada(at.id)} className={`${btnBase} bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400`}>
            <UserCheck size={14} className="inline mr-1" />Registrar Chegada
          </button>
        );
      case 'presente':
        return (
          <button onClick={() => handleIniciar(at.id, at.pacienteId)} className={`${btnBase} bg-accent text-white hover:bg-accent-hover`}>
            <Play size={14} className="inline mr-1" />Iniciar Atendimento
          </button>
        );
      case 'em_atendimento':
        return (
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => irParaProntuario(at.pacienteId)} className={`${btnBase} bg-accent text-white hover:bg-accent-hover`}>
              <ClipboardList size={14} className="inline mr-1" />Prontuário
            </button>
            <button onClick={() => handleFinalizar(at.id)} className={`${btnBase} bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400`}>
              <CheckCircle size={14} className="inline mr-1" />Finalizar
            </button>
          </div>
        );
      case 'finalizado':
        return (
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => irParaProntuario(at.pacienteId)} className={`${btnBase} bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400`}>
              <ClipboardList size={14} className="inline mr-1" />Ver Prontuário
            </button>
            <button onClick={() => setActivePage('faturamento')} className={`${btnBase} bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400`}>
              <DollarSign size={14} className="inline mr-1" />Faturar
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const isHoje = data === todayISO();

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-gray-800 dark:text-text-primary">Atendimentos do Dia</h2>
          <div className="flex items-center gap-1">
            <button onClick={() => navegarDia(-1)} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-bg-hover">
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setData(todayISO())}
              className={`px-3 py-1 text-sm rounded-lg font-medium transition-colors ${isHoje ? 'bg-accent text-white' : 'bg-gray-100 dark:bg-bg-hover text-gray-700 dark:text-text-secondary hover:bg-gray-200'}`}
            >
              Hoje
            </button>
            <button onClick={() => navegarDia(1)} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-bg-hover">
              <ChevronRight size={18} />
            </button>
            <span className="text-sm text-gray-500 dark:text-text-secondary ml-2">{formatDate(data)}</span>
          </div>
        </div>
        <button onClick={atenderSemAgendamento} className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors text-sm font-medium">
          <Plus size={16} />Atender sem agendamento
        </button>
      </div>

      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          value={busca}
          onChange={e => setBusca(e.target.value)}
          placeholder="Buscar paciente..."
          className="flex-1 max-w-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent"
        />
        <select
          value={ordenacao}
          onChange={e => setOrdenacao(e.target.value as Ordenacao)}
          className="px-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm"
        >
          <option value="agendamento">Ordenado pelo agendamento</option>
          <option value="espera">Ordenado pela espera</option>
          <option value="situacao">Ordenado pela situação</option>
        </select>
      </div>

      {/* Lista */}
      {listaAtendimentos.length === 0 ? (
        <EmptyState icon={UserCheck} title="Nenhum atendimento" description={isHoje ? 'Nenhum agendamento para hoje' : `Nenhum agendamento para ${formatDate(data)}`} />
      ) : (
        <div className="grid gap-3">
          {listaAtendimentos.map(at => {
            const pac = getPaciente(at.pacienteId);
            const prof = getProfissional(at.profissionalId);
            const ag = agendamentos.find(a => a.id === at.agendamentoId);

            return (
              <div key={at.id} className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4 hover:shadow-sm transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <StatusBadge status={at.status} />
                      <span className="font-semibold text-gray-800 dark:text-text-primary truncate">
                        {pac?.nome ?? 'Paciente'}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-text-secondary">
                      {prof && <span>Dr(a). {prof.nome}</span>}
                      {ag && <span className="flex items-center gap-1"><Clock size={13} />{ag.horaInicio} - {ag.horaFim}</span>}
                      {at.horaChegada && at.status !== 'finalizado' && (
                        <span className="text-orange-500 font-medium">{tempoEspera(at.horaChegada)}</span>
                      )}
                    </div>
                  </div>
                  <div className="shrink-0">
                    {renderBotoes(at)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Resumo */}
      <div className="flex flex-wrap gap-3 pt-2">
        {(['agendado', 'confirmado', 'presente', 'em_atendimento', 'finalizado', 'faltou'] as const).map(st => {
          const count = listaAtendimentos.filter(a => a.status === st).length;
          if (count === 0) return null;
          return (
            <span key={st} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusColor(st)}`}>
              {statusLabel(st)}: {count}
            </span>
          );
        })}
      </div>
    </div>
  );
}
