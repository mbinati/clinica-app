import { useState } from 'react';
import { Plus, Stethoscope } from 'lucide-react';
import { useProfissionalStore } from '../../stores/useProfissionalStore';
import EmptyState from '../shared/EmptyState';
import ProfissionalForm from './ProfissionalForm';

export default function ProfissionaisPage() {
  const profissionais = useProfissionalStore(s => s.profissionais);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const ativos = profissionais.filter(p => p.ativo);

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-gray-500 dark:text-text-secondary">{ativos.length} profissional(is) ativo(s)</h2>
        <button
          onClick={() => { setEditId(null); setShowForm(true); }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm transition-colors"
        >
          <Plus size={16} /> Novo Profissional
        </button>
      </div>

      {ativos.length === 0 ? (
        <EmptyState
          icon={Stethoscope}
          title="Nenhum profissional cadastrado"
          description="Cadastre os medicos e profissionais da clinica"
          action={{ label: 'Cadastrar', onClick: () => setShowForm(true) }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ativos.map(p => (
            <button
              key={p.id}
              onClick={() => { setEditId(p.id); setShowForm(true); }}
              className="text-left bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-4 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: p.cor || '#10b981' }}>
                  {p.nome.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-800 dark:text-text-primary truncate">{p.nome}</p>
                  <p className="text-xs text-gray-500 dark:text-text-secondary">{p.especialidade}</p>
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-500 dark:text-text-secondary space-y-0.5">
                <p>{p.tipoRegistro}: {p.registro}</p>
                {p.telefone && <p>Tel: {p.telefone}</p>}
              </div>
            </button>
          ))}
        </div>
      )}

      {showForm && <ProfissionalForm editId={editId} onClose={() => { setShowForm(false); setEditId(null); }} />}
    </div>
  );
}
