import { useState, useMemo } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import Modal from '../shared/Modal';
import FormField, { inputClass, selectClass } from '../shared/FormField';
import { useFaturamentoStore } from '../../stores/useFaturamentoStore';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { useProfissionalStore } from '../../stores/useProfissionalStore';
import { useCatalogoStore } from '../../stores/useCatalogoStore';
import { matchSearch } from '../../utils/searchUtils';
import { todayISO, formatCurrency } from '../../utils/formatters';
import { generateId } from '../../utils/generateId';
import type { FaturaItem } from '../../types';

interface Props {
  onClose: () => void;
}

export default function FaturaForm({ onClose }: Props) {
  const addFatura = useFaturamentoStore(s => s.addFatura);
  const pacientes = usePacienteStore(s => s.pacientes).filter(p => p.ativo);
  const profissionais = useProfissionalStore(s => s.profissionais).filter(p => p.ativo);
  const procedimentos = useCatalogoStore(s => s.procedimentos).filter(p => p.ativo);
  const convenios = useCatalogoStore(s => s.convenios).filter(c => c.ativo);

  const [pacienteId, setPacienteId] = useState('');
  const [profissionalId, setProfissionalId] = useState(profissionais[0]?.id || '');
  const [data, setData] = useState(todayISO());
  const [itens, setItens] = useState<FaturaItem[]>([]);
  const [desconto, setDesconto] = useState(0);
  const [convenioId, setConvenioId] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [pacSearch, setPacSearch] = useState('');
  const [showPacList, setShowPacList] = useState(false);

  const filteredPacs = useMemo(() =>
    pacSearch.length >= 2
      ? pacientes.filter(p => matchSearch(p.nome, pacSearch)).slice(0, 10)
      : [],
    [pacientes, pacSearch]
  );

  const addItemFromProc = (procId: string) => {
    const proc = procedimentos.find(p => p.id === procId);
    if (!proc) return;
    setItens(prev => [...prev, {
      id: generateId(),
      procedimentoId: proc.id,
      descricao: proc.nome,
      quantidade: 1,
      valorUnitario: proc.valorParticular,
      valorTotal: proc.valorParticular,
    }]);
  };

  const updateItem = (idx: number, field: keyof FaturaItem, value: any) => {
    setItens(prev => prev.map((it, i) => {
      if (i !== idx) return it;
      const updated = { ...it, [field]: value };
      if (field === 'quantidade' || field === 'valorUnitario') {
        updated.valorTotal = Number(updated.quantidade) * Number(updated.valorUnitario);
      }
      return updated;
    }));
  };

  const removeItem = (idx: number) => setItens(prev => prev.filter((_, i) => i !== idx));

  const valorTotal = itens.reduce((s, it) => s + it.valorTotal, 0);
  const valorFinal = Math.max(0, valorTotal - desconto);

  const handleSave = () => {
    if (!pacienteId || !profissionalId || itens.length === 0) return;
    addFatura({
      pacienteId,
      profissionalId,
      agendamentoId: null,
      data,
      itens,
      valorTotal,
      desconto,
      valorFinal,
      status: 'pendente',
      convenioId: convenioId || null,
      observacoes,
    });
    onClose();
  };

  return (
    <Modal open onClose={onClose} title="Nova Fatura" wide>
      <div className="space-y-4">
        {/* Paciente */}
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
                    onClick={() => { setPacienteId(p.id); setPacSearch(p.nome); setShowPacList(false); }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-bg-hover text-gray-700 dark:text-text-primary"
                  >
                    {p.nome}
                  </button>
                ))}
              </div>
            )}
          </div>
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <FormField label="Profissional">
            <select value={profissionalId} onChange={e => setProfissionalId(e.target.value)} className={selectClass}>
              {profissionais.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
            </select>
          </FormField>
          <FormField label="Data">
            <input type="date" value={data} onChange={e => setData(e.target.value)} className={inputClass} />
          </FormField>
          <FormField label="Convenio">
            <select value={convenioId} onChange={e => setConvenioId(e.target.value)} className={selectClass}>
              <option value="">Particular</option>
              {convenios.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
            </select>
          </FormField>
        </div>

        {/* Itens */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-gray-700 dark:text-text-secondary">Itens</p>
            <select
              onChange={e => { if (e.target.value) addItemFromProc(e.target.value); e.target.value = ''; }}
              className={`${selectClass} w-auto text-xs`}
            >
              <option value="">+ Adicionar procedimento</option>
              {procedimentos.map(p => <option key={p.id} value={p.id}>{p.nome} - R$ {p.valorParticular.toFixed(2)}</option>)}
            </select>
          </div>
          {itens.length === 0 ? (
            <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-4">Adicione procedimentos acima</p>
          ) : (
            <div className="space-y-2">
              {itens.map((item, idx) => (
                <div key={item.id} className="flex items-center gap-2 bg-gray-50 dark:bg-bg-primary/50 rounded-lg p-2">
                  <span className="flex-1 text-sm text-gray-700 dark:text-text-primary truncate">{item.descricao}</span>
                  <input
                    type="number"
                    value={item.quantidade}
                    onChange={e => updateItem(idx, 'quantidade', Number(e.target.value))}
                    className={`${inputClass} w-16 text-center`}
                    min={1}
                  />
                  <span className="text-xs text-gray-400">x</span>
                  <input
                    type="number"
                    value={item.valorUnitario}
                    onChange={e => updateItem(idx, 'valorUnitario', Number(e.target.value))}
                    className={`${inputClass} w-24`}
                    step="0.01"
                  />
                  <span className="text-sm font-medium text-gray-800 dark:text-text-primary w-24 text-right">{formatCurrency(item.valorTotal)}</span>
                  <button onClick={() => removeItem(idx)} className="p-1 text-red-400 hover:text-red-500"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Totals */}
        <div className="flex items-center justify-between bg-gray-50 dark:bg-bg-primary/50 rounded-lg p-3">
          <div className="flex items-center gap-3">
            <FormField label="Desconto">
              <input type="number" value={desconto} onChange={e => setDesconto(Number(e.target.value))} className={`${inputClass} w-24`} step="0.01" min={0} />
            </FormField>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Total</p>
            <p className="text-xl font-bold text-gray-800 dark:text-text-primary">{formatCurrency(valorFinal)}</p>
          </div>
        </div>

        <FormField label="Observacoes">
          <textarea value={observacoes} onChange={e => setObservacoes(e.target.value)} className={`${inputClass} resize-none`} rows={2} />
        </FormField>

        <div className="flex gap-3 justify-end pt-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary text-gray-600 dark:text-text-secondary transition-colors">Cancelar</button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm bg-accent hover:bg-accent-hover text-white transition-colors">Criar Fatura</button>
        </div>
      </div>
    </Modal>
  );
}
