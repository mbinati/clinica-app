import { useState, useEffect } from 'react';
import Modal from '../shared/Modal';
import FormField, { textareaClass } from '../shared/FormField';
import { useProntuarioStore } from '../../stores/useProntuarioStore';

interface Props {
  pacienteId: string;
  readOnly?: boolean;
  onClose?: () => void;
}

export default function AnamneseForm({ pacienteId, readOnly, onClose }: Props) {
  const anamnese = useProntuarioStore(s => s.getAnamnese(pacienteId));
  const addAnamnese = useProntuarioStore(s => s.addAnamnese);
  const updateAnamnese = useProntuarioStore(s => s.updateAnamnese);

  const [queixaPrincipal, setQueixa] = useState('');
  const [historiaDoencaAtual, setHDA] = useState('');
  const [historiaMedica, setHM] = useState('');
  const [historiaFamiliar, setHF] = useState('');
  const [alergias, setAlergias] = useState('');
  const [medicamentosEmUso, setMed] = useState('');
  const [habitos, setHabitos] = useState('');
  const [observacoes, setObs] = useState('');

  useEffect(() => {
    if (anamnese) {
      setQueixa(anamnese.queixaPrincipal);
      setHDA(anamnese.historiaDoencaAtual);
      setHM(anamnese.historiaMedica);
      setHF(anamnese.historiaFamiliar);
      setAlergias(anamnese.alergias);
      setMed(anamnese.medicamentosEmUso);
      setHabitos(anamnese.habitos);
      setObs(anamnese.observacoes);
    }
  }, [anamnese]);

  // Read-only inline view
  if (readOnly) {
    if (!anamnese) {
      return <p className="text-sm text-gray-400 dark:text-gray-500 py-8 text-center">Nenhuma anamnese registrada</p>;
    }
    const fields = [
      { label: 'Queixa Principal', value: anamnese.queixaPrincipal },
      { label: 'Historia da Doenca Atual', value: anamnese.historiaDoencaAtual },
      { label: 'Historia Medica', value: anamnese.historiaMedica },
      { label: 'Historia Familiar', value: anamnese.historiaFamiliar },
      { label: 'Alergias', value: anamnese.alergias },
      { label: 'Medicamentos em Uso', value: anamnese.medicamentosEmUso },
      { label: 'Habitos', value: anamnese.habitos },
      { label: 'Observacoes', value: anamnese.observacoes },
    ];
    return (
      <div className="space-y-3">
        {fields.filter(f => f.value).map(f => (
          <div key={f.label} className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-4">
            <p className="text-xs font-semibold text-gray-500 dark:text-text-secondary mb-1">{f.label}</p>
            <p className="text-sm text-gray-700 dark:text-text-primary whitespace-pre-wrap">{f.value}</p>
          </div>
        ))}
      </div>
    );
  }

  // Edit modal
  const handleSave = () => {
    const data = { pacienteId, queixaPrincipal, historiaDoencaAtual, historiaMedica, historiaFamiliar, alergias, medicamentosEmUso, habitos, observacoes };
    if (anamnese) {
      updateAnamnese(anamnese.id, data);
    } else {
      addAnamnese(data);
    }
    onClose?.();
  };

  return (
    <Modal open onClose={onClose!} title="Anamnese" wide>
      <div className="space-y-3">
        <FormField label="Queixa Principal">
          <textarea value={queixaPrincipal} onChange={e => setQueixa(e.target.value)} className={textareaClass} rows={2} />
        </FormField>
        <FormField label="Historia da Doenca Atual">
          <textarea value={historiaDoencaAtual} onChange={e => setHDA(e.target.value)} className={textareaClass} rows={3} />
        </FormField>
        <FormField label="Historia Medica Pregressa">
          <textarea value={historiaMedica} onChange={e => setHM(e.target.value)} className={textareaClass} rows={2} />
        </FormField>
        <FormField label="Historia Familiar">
          <textarea value={historiaFamiliar} onChange={e => setHF(e.target.value)} className={textareaClass} rows={2} />
        </FormField>
        <FormField label="Alergias">
          <textarea value={alergias} onChange={e => setAlergias(e.target.value)} className={textareaClass} rows={2} placeholder="Alergias conhecidas..." />
        </FormField>
        <FormField label="Medicamentos em Uso">
          <textarea value={medicamentosEmUso} onChange={e => setMed(e.target.value)} className={textareaClass} rows={2} />
        </FormField>
        <FormField label="Habitos (tabagismo, etilismo, atividade fisica)">
          <textarea value={habitos} onChange={e => setHabitos(e.target.value)} className={textareaClass} rows={2} />
        </FormField>
        <FormField label="Observacoes">
          <textarea value={observacoes} onChange={e => setObs(e.target.value)} className={textareaClass} rows={2} />
        </FormField>

        <div className="flex gap-3 justify-end pt-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary text-gray-600 dark:text-text-secondary transition-colors">Cancelar</button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm bg-accent hover:bg-accent-hover text-white transition-colors">Salvar</button>
        </div>
      </div>
    </Modal>
  );
}
