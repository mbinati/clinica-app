import { useState, useEffect, useMemo } from 'react';
import Modal from '../shared/Modal';
import FormField, { inputClass, selectClass } from '../shared/FormField';
import StatusBadge from '../shared/StatusBadge';
import { useAgendaStore } from '../../stores/useAgendaStore';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { useProfissionalStore } from '../../stores/useProfissionalStore';
import { useCatalogoStore } from '../../stores/useCatalogoStore';
import { matchSearch } from '../../utils/searchUtils';
import { todayISO } from '../../utils/formatters';
import type { StatusAgendamento } from '../../types';

const statusOptions: StatusAgendamento[] = ['agendado', 'confirmado', 'em_atendimento', 'atendido', 'cancelado', 'faltou'];

interface Props {
  editId: string | null;
  prefill: { data: string; hora: string; profissionalId: string } | null;
  onClose: () => void;
}

export default function AgendamentoForm({ editId, prefill, onClose }: Props) {
  const agendamentos = useAgendaStore(s => s.agendamentos);
  const addAgendamento = useAgendaStore(s => s.addAgendamento);
  const updateAgendamento = useAgendaStore(s => s.updateAgendamento);
  const removeAgendamento = useAgendaStore(s => s.removeAgendamento);
  const pacientes = usePacienteStore(s => s.pacientes).filter(p => p.ativo);
  const profissionais = useProfissionalStore(s => s.profissionais).filter(p => p.ativo);
  const procedimentos = useCatalogoStore(s => s.procedimentos).filter(p => p.ativo);

  const existing = editId ? agendamentos.find(a => a.id === editId) : null;

  const [pacienteId, setPacienteId] = useState('');
  const [profissionalId, setProfissionalId] = useState('');
  const [data, setData] = useState(todayISO());
  const [horaInicio, setHoraInicio] = useState('08:00');
  const [horaFim, setHoraFim] = useState('08:30');
  const [status, setStatus] = useState<StatusAgendamento>('agendado');
  const [procedimentoId, setProcedimentoId] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [pacSearch, setPacSearch] = useState('');
  const [showPacList, setShowPacList] = useState(false);

  useEffect(() => {
    if (existing) {
      setPacienteId(existing.pacienteId);
      setProfissionalId(existing.profissionalId);
      setData(existing.data);
      setHoraInicio(existing.horaInicio);
      setHoraFim(existing.horaFim);
      setStatus(existing.status);
      setProcedimentoId(existing.procedimentoId || '');
      setObservacoes(existing.observacoes);
      const pac = pacientes.find(p => p.id === existing.pacienteId);
      if (pac) setPacSearch(pac.nome);
    } else if (prefill) {
      setData(prefill.data);
      setHoraInicio(prefill.hora);
      // auto set end time +30min
      const [h, m] = prefill.hora.split(':').map(Number);
      const endMin = h * 60 + m + 30;
      setHoraFim(`${String(Math.floor(endMin / 60)).padStart(2, '0')}:${String(endMin % 60).padStart(2, '0')}`);
      if (prefill.profissionalId) setProfissionalId(prefill.profissionalId);
    }
  }, [existing, prefill]);

  const filteredPacs = useMemo(() =>
    pacSearch.length >= 2
      ? pacientes.filter(p => matchSearch(p.nome, pacSearch) || matchSearch(p.cpf, pacSearch)).slice(0, 10)
      : [],
    [pacientes, pacSearch]
  );

  const selectPaciente = (id: string) => {
    setPacienteId(id);
    const pac = pacientes.find(p => p.id === id);
    if (pac) setPacSearch(pac.nome);
    setShowPacList(false);
  };

  const handleSave = () => {
    if (!pacienteId || !profissionalId || !data || !horaInicio) return;
    const agData = {
      pacienteId,
      profissionalId,
      data,
      horaInicio,
      horaFim,
      status,
      procedimentoId: procedimentoId || null,
      observacoes,
    };
    if (editId) {
      updateAgendamento(editId, agData);
    } else {
      addAgendamento(agData);
    }
    onClose();
  };

  const handleDelete = () => {
    if (editId && confirm('Excluir este agendamento?')) {
      removeAgendamento(editId);
      onClose();
    }
  };

  return (
    <Modal open onClose={onClose} title={editId ? 'Editar Agendamento' : 'Novo Agendamento'}>
      <div className="space-y-4">
        {/* Paciente search */}
        <FormField label="Paciente" required>
          <div className="relative">
            <input
              value={pacSearch}
              onChange={e => { setPacSearch(e.target.value); setShowPacList(true); setPacienteId(''); }}
              onFocus={() => setShowPacList(true)}
              className={inputClass}
              placeholder="Buscar paciente..."
            />
            {showPacList && filteredPacs.length > 0 && (
              <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-white dark:bg-bg-secondary border border-gray-200 dark:border-border rounded-lg shadow-lg max-h-40 overflow-y-auto">
                {filteredPacs.map(p => (
                  <button
                    key={p.id}
                    onClick={() => selectPaciente(p.id)}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-bg-hover text-gray-700 dark:text-text-primary"
                  >
                    {p.nome}
                  </button>
                ))}
              </div>
            )}
          </div>
        </FormField>

        {/* Profissional */}
        <FormField label="Profissional" required>
          <select value={profissionalId} onChange={e => setProfissionalId(e.target.value)} className={selectClass}>
            <option value="">Selecione...</option>
            {profissionais.map(p => <option key={p.id} value={p.id}>{p.nome} - {p.especialidade}</option>)}
          </select>
        </FormField>

        {/* Data e Hora */}
        <div className="grid grid-cols-3 gap-3">
          <FormField label="Data" required>
            <input type="date" value={data} onChange={e => setData(e.target.value)} className={inputClass} />
          </FormField>
          <FormField label="Inicio" required>
            <input type="time" value={horaInicio} onChange={e => setHoraInicio(e.target.value)} className={inputClass} />
          </FormField>
          <FormField label="Fim">
            <input type="time" value={horaFim} onChange={e => setHoraFim(e.target.value)} className={inputClass} />
          </FormField>
        </div>

        {/* Procedimento */}
        <FormField label="Procedimento">
          <select value={procedimentoId} onChange={e => setProcedimentoId(e.target.value)} className={selectClass}>
            <option value="">Nenhum</option>
            {procedimentos.map(p => <option key={p.id} value={p.id}>{p.nome} - R$ {p.valorParticular.toFixed(2)}</option>)}
          </select>
        </FormField>

        {/* Status */}
        {editId && (
          <FormField label="Status">
            <div className="flex flex-wrap gap-2">
              {statusOptions.map(s => (
                <button key={s} onClick={() => setStatus(s)} className={`transition-opacity ${status === s ? '' : 'opacity-40'}`}>
                  <StatusBadge status={s} />
                </button>
              ))}
            </div>
          </FormField>
        )}

        {/* Obs */}
        <FormField label="Observacoes">
          <textarea value={observacoes} onChange={e => setObservacoes(e.target.value)} className={`${inputClass} resize-none`} rows={2} />
        </FormField>

        {/* Botoes */}
        <div className="flex gap-3 justify-between pt-2">
          <div>
            {editId && (
              <button onClick={handleDelete} className="px-4 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                Excluir
              </button>
            )}
          </div>
          <div className="flex gap-3">
            <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary hover:bg-gray-200 dark:hover:bg-bg-hover text-gray-600 dark:text-text-secondary transition-colors">
              Cancelar
            </button>
            <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm bg-accent hover:bg-accent-hover text-white transition-colors">
              {editId ? 'Salvar' : 'Agendar'}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
