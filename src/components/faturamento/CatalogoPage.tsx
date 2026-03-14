import { useState } from 'react';
import { Plus, Pencil, Package } from 'lucide-react';
import { useCatalogoStore } from '../../stores/useCatalogoStore';
import { formatCurrency } from '../../utils/formatters';
import EmptyState from '../shared/EmptyState';
import Modal from '../shared/Modal';
import FormField, { inputClass, selectClass } from '../shared/FormField';
import { useIsMobile } from '../../hooks/useMediaQuery';

export default function CatalogoPage() {
  const procedimentos = useCatalogoStore(s => s.procedimentos);
  const addProcedimento = useCatalogoStore(s => s.addProcedimento);
  const updateProcedimento = useCatalogoStore(s => s.updateProcedimento);
  const isMobile = useIsMobile();

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('Consulta');
  const [valor, setValor] = useState(0);

  const ativos = procedimentos.filter(p => p.ativo);

  const openForm = (id?: string) => {
    if (id) {
      const p = procedimentos.find(x => x.id === id);
      if (p) {
        setEditId(id);
        setCodigo(p.codigo);
        setNome(p.nome);
        setCategoria(p.categoria);
        setValor(p.valorParticular);
      }
    } else {
      setEditId(null);
      setCodigo('');
      setNome('');
      setCategoria('Consulta');
      setValor(0);
    }
    setShowForm(true);
  };

  const handleSave = () => {
    if (!nome.trim()) return;
    if (editId) {
      updateProcedimento(editId, { codigo, nome, categoria, valorParticular: valor });
    } else {
      addProcedimento({ codigo, nome, categoria, valorParticular: valor });
    }
    setShowForm(false);
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-gray-500 dark:text-text-secondary">{ativos.length} procedimento(s)</h2>
        <button
          onClick={() => openForm()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm transition-colors"
        >
          <Plus size={16} /> Novo Procedimento
        </button>
      </div>

      {ativos.length === 0 ? (
        <EmptyState icon={Package} title="Nenhum procedimento" action={{ label: 'Adicionar', onClick: () => openForm() }} />
      ) : isMobile ? (
        <div className="space-y-2">
          {ativos.map(p => (
            <button key={p.id} onClick={() => openForm(p.id)} className="w-full text-left bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-3 hover:border-accent/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800 dark:text-text-primary text-sm">{p.nome}</span>
                <span className="font-bold text-accent">{formatCurrency(p.valorParticular)}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-text-secondary">
                {p.codigo && <span>Cod: {p.codigo}</span>}
                <span>{p.categoria}</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-border bg-gray-50 dark:bg-bg-primary/50">
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Codigo</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Nome</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Categoria</th>
                <th className="text-right px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Valor</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {ativos.map(p => (
                <tr key={p.id} className="border-b border-gray-100 dark:border-border/50 hover:bg-gray-50 dark:hover:bg-bg-hover transition-colors">
                  <td className="px-4 py-3 text-gray-500 dark:text-text-secondary font-mono text-xs">{p.codigo}</td>
                  <td className="px-4 py-3 font-medium text-gray-800 dark:text-text-primary">{p.nome}</td>
                  <td className="px-4 py-3 text-gray-500 dark:text-text-secondary">{p.categoria}</td>
                  <td className="px-4 py-3 text-right font-medium text-gray-800 dark:text-text-primary">{formatCurrency(p.valorParticular)}</td>
                  <td className="px-2">
                    <button onClick={() => openForm(p.id)} className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-bg-hover text-gray-400"><Pencil size={14} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <Modal open onClose={() => setShowForm(false)} title={editId ? 'Editar Procedimento' : 'Novo Procedimento'}>
          <div className="space-y-3">
            <FormField label="Codigo (TUSS)">
              <input value={codigo} onChange={e => setCodigo(e.target.value)} className={inputClass} placeholder="10101012" />
            </FormField>
            <FormField label="Nome" required>
              <input value={nome} onChange={e => setNome(e.target.value)} className={inputClass} autoFocus />
            </FormField>
            <FormField label="Categoria">
              <select value={categoria} onChange={e => setCategoria(e.target.value)} className={selectClass}>
                <option>Consulta</option><option>Exame</option><option>Procedimento</option><option>Cirurgia</option><option>Outro</option>
              </select>
            </FormField>
            <FormField label="Valor Particular (R$)" required>
              <input type="number" value={valor} onChange={e => setValor(Number(e.target.value))} className={inputClass} step="0.01" min={0} />
            </FormField>
            <div className="flex gap-3 justify-end pt-2">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary text-gray-600 dark:text-text-secondary transition-colors">Cancelar</button>
              <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm bg-accent hover:bg-accent-hover text-white transition-colors">Salvar</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
