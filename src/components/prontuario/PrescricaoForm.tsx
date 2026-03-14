import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import Modal from '../shared/Modal';
import FormField, { inputClass, selectClass } from '../shared/FormField';
import { useProntuarioStore } from '../../stores/useProntuarioStore';
import { useProfissionalStore } from '../../stores/useProfissionalStore';
import { todayISO } from '../../utils/formatters';
import { generateId } from '../../utils/generateId';
import type { PrescricaoItem } from '../../types';

interface Props {
  pacienteId: string;
  onClose: () => void;
}

const emptyItem = (): PrescricaoItem => ({
  id: generateId(),
  medicamento: '',
  dosagem: '',
  posologia: '',
  quantidade: '',
  viaAdministracao: 'oral',
});

export default function PrescricaoForm({ pacienteId, onClose }: Props) {
  const addPrescricao = useProntuarioStore(s => s.addPrescricao);
  const profissionais = useProfissionalStore(s => s.profissionais).filter(p => p.ativo);

  const [profissionalId, setProfissionalId] = useState(profissionais[0]?.id || '');
  const [data, setData] = useState(todayISO());
  const [itens, setItens] = useState<PrescricaoItem[]>([emptyItem()]);
  const [observacoes, setObservacoes] = useState('');

  const updateItem = (idx: number, field: keyof PrescricaoItem, value: string) => {
    setItens(prev => prev.map((it, i) => i === idx ? { ...it, [field]: value } : it));
  };

  const addItem = () => setItens(prev => [...prev, emptyItem()]);
  const removeItem = (idx: number) => setItens(prev => prev.filter((_, i) => i !== idx));

  const handleSave = () => {
    if (!profissionalId || itens.every(it => !it.medicamento.trim())) return;
    addPrescricao({
      pacienteId,
      profissionalId,
      evolucaoId: null,
      data,
      itens: itens.filter(it => it.medicamento.trim()),
      observacoes,
    });
    onClose();
  };

  return (
    <Modal open onClose={onClose} title="Nova Prescricao" wide>
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

        {/* Itens */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700 dark:text-text-secondary">Medicamentos</p>
            <button onClick={addItem} className="flex items-center gap-1 text-xs text-accent hover:underline">
              <Plus size={12} /> Adicionar
            </button>
          </div>
          {itens.map((item, idx) => (
            <div key={item.id} className="grid grid-cols-[1fr_auto] gap-2 bg-gray-50 dark:bg-bg-primary/50 rounded-lg p-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input value={item.medicamento} onChange={e => updateItem(idx, 'medicamento', e.target.value)} className={inputClass} placeholder="Medicamento" />
                <input value={item.dosagem} onChange={e => updateItem(idx, 'dosagem', e.target.value)} className={inputClass} placeholder="Dosagem (ex: 500mg)" />
                <input value={item.posologia} onChange={e => updateItem(idx, 'posologia', e.target.value)} className={inputClass} placeholder="Posologia (ex: 1comp 8/8h 7 dias)" />
                <div className="flex gap-2">
                  <input value={item.quantidade} onChange={e => updateItem(idx, 'quantidade', e.target.value)} className={`${inputClass} w-20`} placeholder="Qtd" />
                  <select value={item.viaAdministracao} onChange={e => updateItem(idx, 'viaAdministracao', e.target.value)} className={selectClass}>
                    <option value="oral">Oral</option>
                    <option value="intravenosa">IV</option>
                    <option value="intramuscular">IM</option>
                    <option value="topica">Topica</option>
                    <option value="inalatoria">Inalatoria</option>
                    <option value="sublingual">Sublingual</option>
                  </select>
                </div>
              </div>
              {itens.length > 1 && (
                <button onClick={() => removeItem(idx)} className="p-2 text-red-400 hover:text-red-500 self-start">
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          ))}
        </div>

        <FormField label="Observacoes">
          <textarea value={observacoes} onChange={e => setObservacoes(e.target.value)} className={`${inputClass} resize-none`} rows={2} />
        </FormField>

        <div className="flex gap-3 justify-end pt-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary hover:bg-gray-200 dark:hover:bg-bg-hover text-gray-600 dark:text-text-secondary transition-colors">Cancelar</button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm bg-accent hover:bg-accent-hover text-white transition-colors">Salvar</button>
        </div>
      </div>
    </Modal>
  );
}
