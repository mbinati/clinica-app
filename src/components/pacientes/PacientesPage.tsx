import { useState, useMemo } from 'react';
import { Plus, Search, Phone, Mail } from 'lucide-react';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { useAppStore } from '../../stores/useAppStore';
import { matchSearchMulti } from '../../utils/searchUtils';
import { formatCPF, formatPhone, formatDate, calcularIdade } from '../../utils/formatters';
import EmptyState from '../shared/EmptyState';
import PacienteForm from './PacienteForm';
import { useIsMobile } from '../../hooks/useMediaQuery';

type FiltroSexo = 'todos' | 'M' | 'F';

export default function PacientesPage() {
  const pacientes = usePacienteStore(s => s.pacientes);
  const navigateToPaciente = useAppStore(s => s.navigateToPaciente);
  const [search, setSearch] = useState('');
  const [filtroSexo, setFiltroSexo] = useState<FiltroSexo>('todos');
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const filtered = useMemo(() =>
    pacientes
      .filter(p => p.ativo)
      .filter(p => filtroSexo === 'todos' || p.sexo === filtroSexo)
      .filter(p => matchSearchMulti([p.nome, p.cpf, p.telefone, p.email], search))
      .sort((a, b) => a.nome.localeCompare(b.nome)),
    [pacientes, search, filtroSexo]
  );

  const handleEdit = (id: string) => {
    setEditId(id);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setEditId(null);
  };

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar paciente (nome, CPF, telefone)..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm text-gray-800 dark:text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
        </div>
        <select
          value={filtroSexo}
          onChange={e => setFiltroSexo(e.target.value as FiltroSexo)}
          className="px-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm text-gray-700 dark:text-text-primary"
        >
          <option value="todos">Todos</option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
        <button
          onClick={() => { setEditId(null); setShowForm(true); }}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm transition-colors"
        >
          <Plus size={16} /> Novo Paciente
        </button>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <EmptyState
          title="Nenhum paciente encontrado"
          description={search ? 'Tente outro termo de busca' : 'Cadastre seu primeiro paciente'}
          action={!search ? { label: 'Novo Paciente', onClick: () => setShowForm(true) } : undefined}
        />
      ) : isMobile ? (
        // Mobile: Cards
        <div className="space-y-2">
          {filtered.map(p => (
            <button
              key={p.id}
              onClick={() => handleEdit(p.id)}
              className="w-full text-left bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-4 hover:border-accent/50 transition-colors"
            >
              <p className="font-medium text-gray-800 dark:text-text-primary">{p.nome}</p>
              <div className="flex items-center gap-4 mt-1 text-xs text-gray-500 dark:text-text-secondary">
                {p.cpf && <span>{formatCPF(p.cpf)}</span>}
                {p.telefone && (
                  <span className="flex items-center gap-1"><Phone size={10} />{formatPhone(p.telefone)}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      ) : (
        // Desktop: Table
        <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-border bg-gray-50 dark:bg-bg-primary/50">
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Nome</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Idade</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Telefone</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Email</th>
                <th className="text-center px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Situação</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr
                  key={p.id}
                  onClick={() => handleEdit(p.id)}
                  className="border-b border-gray-100 dark:border-border/50 hover:bg-gray-50 dark:hover:bg-bg-hover cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-gray-800 dark:text-text-primary">{p.nome}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-text-secondary">{calcularIdade(p.dataNascimento)}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-text-secondary">{formatPhone(p.telefone)}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-text-secondary">{p.email}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${p.ativo ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'}`}>
                      {p.ativo ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Form Modal */}
      {showForm && <PacienteForm editId={editId} onClose={handleClose} />}
    </div>
  );
}
