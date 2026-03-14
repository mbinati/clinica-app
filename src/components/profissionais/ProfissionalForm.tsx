import { useState, useEffect } from 'react';
import Modal from '../shared/Modal';
import FormField, { inputClass, selectClass } from '../shared/FormField';
import { useProfissionalStore } from '../../stores/useProfissionalStore';
import type { Profissional, HorarioAtendimento } from '../../types';
import { dayName } from '../../utils/dateUtils';

const CORES = ['#10b981', '#06b6d4', '#3b82f6', '#ef4444', '#eab308', '#a855f7', '#ec4899', '#f97316'];

const defaultHorarios = (): HorarioAtendimento[] =>
  [1, 2, 3, 4, 5].map(d => ({ diaSemana: d, horaInicio: '08:00', horaFim: '18:00', intervaloMinutos: 30 }));

interface Props {
  editId: string | null;
  onClose: () => void;
}

export default function ProfissionalForm({ editId, onClose }: Props) {
  const profissionais = useProfissionalStore(s => s.profissionais);
  const addProfissional = useProfissionalStore(s => s.addProfissional);
  const updateProfissional = useProfissionalStore(s => s.updateProfissional);

  const existing = editId ? profissionais.find(p => p.id === editId) : null;

  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [registro, setRegistro] = useState('');
  const [tipoRegistro, setTipoRegistro] = useState('CRM');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cor, setCor] = useState('#10b981');
  const [horarios, setHorarios] = useState<HorarioAtendimento[]>(defaultHorarios);

  useEffect(() => {
    if (existing) {
      setNome(existing.nome);
      setEspecialidade(existing.especialidade);
      setRegistro(existing.registro);
      setTipoRegistro(existing.tipoRegistro);
      setTelefone(existing.telefone);
      setEmail(existing.email);
      setCor(existing.cor);
      setHorarios(existing.horarios.length ? existing.horarios : defaultHorarios());
    }
  }, [existing]);

  const updateHorario = (idx: number, field: keyof HorarioAtendimento, value: any) => {
    setHorarios(prev => prev.map((h, i) => i === idx ? { ...h, [field]: value } : h));
  };

  const toggleDay = (dia: number) => {
    setHorarios(prev => {
      const exists = prev.find(h => h.diaSemana === dia);
      if (exists) return prev.filter(h => h.diaSemana !== dia);
      return [...prev, { diaSemana: dia, horaInicio: '08:00', horaFim: '18:00', intervaloMinutos: 30 }].sort((a, b) => a.diaSemana - b.diaSemana);
    });
  };

  const handleSave = () => {
    if (!nome.trim()) return;
    const data = { nome, especialidade, registro, tipoRegistro, telefone, email, cor, horarios };
    if (editId) {
      updateProfissional(editId, data);
    } else {
      addProfissional(data);
    }
    onClose();
  };

  return (
    <Modal open onClose={onClose} title={editId ? 'Editar Profissional' : 'Novo Profissional'} wide>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FormField label="Nome completo" required className="sm:col-span-2">
            <input value={nome} onChange={e => setNome(e.target.value)} className={inputClass} autoFocus />
          </FormField>
          <FormField label="Especialidade">
            <input value={especialidade} onChange={e => setEspecialidade(e.target.value)} className={inputClass} placeholder="Ex: Clinico Geral" />
          </FormField>
          <div className="grid grid-cols-[100px_1fr] gap-2">
            <FormField label="Tipo">
              <select value={tipoRegistro} onChange={e => setTipoRegistro(e.target.value)} className={selectClass}>
                <option>CRM</option><option>CRO</option><option>CRP</option><option>CREFITO</option><option>Outro</option>
              </select>
            </FormField>
            <FormField label="Registro">
              <input value={registro} onChange={e => setRegistro(e.target.value)} className={inputClass} placeholder="12345/SP" />
            </FormField>
          </div>
          <FormField label="Telefone">
            <input value={telefone} onChange={e => setTelefone(e.target.value)} className={inputClass} />
          </FormField>
          <FormField label="Email">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} />
          </FormField>
        </div>

        {/* Cor */}
        <FormField label="Cor no calendario">
          <div className="flex gap-2">
            {CORES.map(c => (
              <button
                key={c}
                onClick={() => setCor(c)}
                className={`w-8 h-8 rounded-full border-2 transition-transform ${cor === c ? 'border-gray-800 dark:border-white scale-110' : 'border-transparent'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </FormField>

        {/* Horarios */}
        <div>
          <p className="text-sm font-medium text-gray-700 dark:text-text-secondary mb-2">Horarios de Atendimento</p>
          <div className="flex gap-2 mb-3">
            {[0, 1, 2, 3, 4, 5, 6].map(d => {
              const active = horarios.some(h => h.diaSemana === d);
              return (
                <button
                  key={d}
                  onClick={() => toggleDay(d)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors
                    ${active ? 'bg-accent text-white' : 'bg-gray-100 dark:bg-bg-primary text-gray-500 dark:text-text-secondary'}`}
                >
                  {dayName(d, true)}
                </button>
              );
            })}
          </div>
          <div className="space-y-2">
            {horarios.sort((a, b) => a.diaSemana - b.diaSemana).map((h, idx) => (
              <div key={h.diaSemana} className="flex items-center gap-2 text-sm">
                <span className="w-10 text-gray-500 dark:text-text-secondary text-xs">{dayName(h.diaSemana, true)}</span>
                <input type="time" value={h.horaInicio} onChange={e => updateHorario(idx, 'horaInicio', e.target.value)} className={`${inputClass} w-28`} />
                <span className="text-gray-400">-</span>
                <input type="time" value={h.horaFim} onChange={e => updateHorario(idx, 'horaFim', e.target.value)} className={`${inputClass} w-28`} />
                <select value={h.intervaloMinutos} onChange={e => updateHorario(idx, 'intervaloMinutos', Number(e.target.value))} className={`${selectClass} w-20`}>
                  <option value={15}>15m</option><option value={20}>20m</option><option value={30}>30m</option><option value={60}>60m</option>
                </select>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 justify-end pt-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary hover:bg-gray-200 dark:hover:bg-bg-hover text-gray-600 dark:text-text-secondary transition-colors">Cancelar</button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm bg-accent hover:bg-accent-hover text-white transition-colors">{editId ? 'Salvar' : 'Cadastrar'}</button>
        </div>
      </div>
    </Modal>
  );
}
