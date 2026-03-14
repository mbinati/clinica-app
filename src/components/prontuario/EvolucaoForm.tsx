import { useState } from 'react';
import Modal from '../shared/Modal';
import FormField, { inputClass, textareaClass, selectClass } from '../shared/FormField';
import { useProntuarioStore } from '../../stores/useProntuarioStore';
import { useProfissionalStore } from '../../stores/useProfissionalStore';
import { todayISO } from '../../utils/formatters';

interface Props {
  pacienteId: string;
  onClose: () => void;
}

export default function EvolucaoForm({ pacienteId, onClose }: Props) {
  const addEvolucao = useProntuarioStore(s => s.addEvolucao);
  const profissionais = useProfissionalStore(s => s.profissionais).filter(p => p.ativo);

  const [profissionalId, setProfissionalId] = useState(profissionais[0]?.id || '');
  const [data, setData] = useState(todayISO());
  const [subjetivo, setSubjetivo] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [plano, setPlano] = useState('');
  const [cidInput, setCidInput] = useState('');
  const [cidCodigos, setCidCodigos] = useState<string[]>([]);
  const [cidDescricoes, setCidDescricoes] = useState<string[]>([]);

  const addCid = () => {
    if (cidInput.trim()) {
      setCidCodigos(prev => [...prev, cidInput.trim().toUpperCase()]);
      setCidDescricoes(prev => [...prev, '']);
      setCidInput('');
    }
  };

  const removeCid = (idx: number) => {
    setCidCodigos(prev => prev.filter((_, i) => i !== idx));
    setCidDescricoes(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSave = () => {
    if (!profissionalId) return;
    addEvolucao({
      pacienteId,
      profissionalId,
      agendamentoId: null,
      data,
      subjetivo,
      objetivo,
      avaliacao,
      plano,
      cidCodigos,
      cidDescricoes,
    });
    onClose();
  };

  return (
    <Modal open onClose={onClose} title="Nova Evolucao (SOAP)" wide>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FormField label="Profissional" required>
            <select value={profissionalId} onChange={e => setProfissionalId(e.target.value)} className={selectClass}>
              {profissionais.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
            </select>
          </FormField>
          <FormField label="Data">
            <input type="date" value={data} onChange={e => setData(e.target.value)} className={inputClass} />
          </FormField>
        </div>

        <FormField label="Subjetivo (queixa do paciente)">
          <textarea value={subjetivo} onChange={e => setSubjetivo(e.target.value)} className={textareaClass} rows={3} placeholder="Relato do paciente..." />
        </FormField>
        <FormField label="Objetivo (exame fisico)">
          <textarea value={objetivo} onChange={e => setObjetivo(e.target.value)} className={textareaClass} rows={3} placeholder="Achados do exame..." />
        </FormField>
        <FormField label="Avaliacao (diagnostico)">
          <textarea value={avaliacao} onChange={e => setAvaliacao(e.target.value)} className={textareaClass} rows={2} placeholder="Hipotese diagnostica..." />
        </FormField>
        <FormField label="Plano (conduta)">
          <textarea value={plano} onChange={e => setPlano(e.target.value)} className={textareaClass} rows={2} placeholder="Conduta, retorno..." />
        </FormField>

        {/* CID */}
        <FormField label="CID-10">
          <div className="flex gap-2 mb-2">
            <input value={cidInput} onChange={e => setCidInput(e.target.value)} className={inputClass} placeholder="Ex: J06.9" onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addCid())} />
            <button onClick={addCid} className="px-3 py-2 rounded-lg bg-accent text-white text-sm shrink-0">+</button>
          </div>
          {cidCodigos.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {cidCodigos.map((c, i) => (
                <span key={i} className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded-full">
                  {c}
                  <button onClick={() => removeCid(i)} className="hover:text-red-500">&times;</button>
                </span>
              ))}
            </div>
          )}
        </FormField>

        <div className="flex gap-3 justify-end pt-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary hover:bg-gray-200 dark:hover:bg-bg-hover text-gray-600 dark:text-text-secondary transition-colors">Cancelar</button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm bg-accent hover:bg-accent-hover text-white transition-colors">Salvar</button>
        </div>
      </div>
    </Modal>
  );
}
