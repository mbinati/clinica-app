import { useState, useMemo } from 'react';
import { Plus, Search, DollarSign } from 'lucide-react';
import { useFaturamentoStore } from '../../stores/useFaturamentoStore';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { useProfissionalStore } from '../../stores/useProfissionalStore';
import { formatCurrency, formatDate, todayISO } from '../../utils/formatters';
import { matchSearch } from '../../utils/searchUtils';
import StatusBadge from '../shared/StatusBadge';
import EmptyState from '../shared/EmptyState';
import FaturaForm from './FaturaForm';
import PagamentoForm from './PagamentoForm';
import { useIsMobile } from '../../hooks/useMediaQuery';
import type { StatusFatura } from '../../types';

export default function FaturamentoPage() {
  const faturas = useFaturamentoStore(s => s.faturas);
  const pagamentos = useFaturamentoStore(s => s.pagamentos);
  const pacientes = usePacienteStore(s => s.pacientes);
  const profissionais = useProfissionalStore(s => s.profissionais);
  const isMobile = useIsMobile();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFatura | ''>('');
  const [showFaturaForm, setShowFaturaForm] = useState(false);
  const [showPagForm, setShowPagForm] = useState(false);
  const [selectedFaturaId, setSelectedFaturaId] = useState<string | null>(null);

  const getPacName = (id: string) => pacientes.find(p => p.id === id)?.nome || 'Paciente';

  const filtered = useMemo(() => {
    let list = [...faturas].sort((a, b) => b.data.localeCompare(a.data));
    if (statusFilter) list = list.filter(f => f.status === statusFilter);
    if (search) list = list.filter(f => matchSearch(getPacName(f.pacienteId), search));
    return list;
  }, [faturas, statusFilter, search, pacientes]);

  const totals = useMemo(() => {
    const pendente = faturas.filter(f => f.status === 'pendente').reduce((s, f) => s + f.valorFinal, 0);
    const pago = faturas.filter(f => f.status === 'pago').reduce((s, f) => s + f.valorFinal, 0);
    const parcial = faturas.filter(f => f.status === 'parcial').reduce((s, f) => s + f.valorFinal, 0);
    return { pendente, pago, parcial };
  }, [faturas]);

  const handlePagar = (faturaId: string) => {
    setSelectedFaturaId(faturaId);
    setShowPagForm(true);
  };

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Resumo */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-200 dark:border-yellow-900/30 p-3 text-center">
          <p className="text-xs text-yellow-600 dark:text-yellow-400">Pendente</p>
          <p className="text-lg font-bold text-yellow-700 dark:text-yellow-300">{formatCurrency(totals.pendente)}</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-900/30 p-3 text-center">
          <p className="text-xs text-green-600 dark:text-green-400">Pago</p>
          <p className="text-lg font-bold text-green-700 dark:text-green-300">{formatCurrency(totals.pago)}</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-200 dark:border-orange-900/30 p-3 text-center">
          <p className="text-xs text-orange-600 dark:text-orange-400">Parcial</p>
          <p className="text-lg font-bold text-orange-700 dark:text-orange-300">{formatCurrency(totals.parcial)}</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar por paciente..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm text-gray-800 dark:text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
        </div>
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as any)}
          className="px-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm text-gray-700 dark:text-text-secondary"
        >
          <option value="">Todos status</option>
          <option value="pendente">Pendente</option>
          <option value="pago">Pago</option>
          <option value="parcial">Parcial</option>
          <option value="cancelado">Cancelado</option>
        </select>
        <button
          onClick={() => { setSelectedFaturaId(null); setShowFaturaForm(true); }}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm transition-colors"
        >
          <Plus size={16} /> Nova Fatura
        </button>
      </div>

      {/* Lista */}
      {filtered.length === 0 ? (
        <EmptyState icon={DollarSign} title="Nenhuma fatura" description={search || statusFilter ? 'Nenhuma fatura encontrada com esses filtros' : 'Crie a primeira fatura'} />
      ) : isMobile ? (
        <div className="space-y-2">
          {filtered.map(f => (
            <div key={f.id} className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800 dark:text-text-primary text-sm">{getPacName(f.pacienteId)}</span>
                <StatusBadge status={f.status} small />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-text-secondary">{formatDate(f.data)}</span>
                <span className="font-bold text-gray-800 dark:text-text-primary">{formatCurrency(f.valorFinal)}</span>
              </div>
              {(f.status === 'pendente' || f.status === 'parcial') && (
                <button onClick={() => handlePagar(f.id)} className="mt-2 w-full py-1.5 rounded-lg bg-green-500 hover:bg-green-600 text-white text-xs font-medium transition-colors">
                  Registrar Pagamento
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-border bg-gray-50 dark:bg-bg-primary/50">
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Data</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Paciente</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Valor</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Status</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Acoes</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(f => (
                <tr key={f.id} className="border-b border-gray-100 dark:border-border/50 hover:bg-gray-50 dark:hover:bg-bg-hover transition-colors">
                  <td className="px-4 py-3 text-gray-600 dark:text-text-secondary">{formatDate(f.data)}</td>
                  <td className="px-4 py-3 font-medium text-gray-800 dark:text-text-primary">{getPacName(f.pacienteId)}</td>
                  <td className="px-4 py-3 font-medium text-gray-800 dark:text-text-primary">{formatCurrency(f.valorFinal)}</td>
                  <td className="px-4 py-3"><StatusBadge status={f.status} /></td>
                  <td className="px-4 py-3">
                    {(f.status === 'pendente' || f.status === 'parcial') && (
                      <button onClick={() => handlePagar(f.id)} className="text-xs text-green-600 hover:underline">Pagar</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showFaturaForm && <FaturaForm onClose={() => setShowFaturaForm(false)} />}
      {showPagForm && selectedFaturaId && <PagamentoForm faturaId={selectedFaturaId} onClose={() => { setShowPagForm(false); setSelectedFaturaId(null); }} />}
    </div>
  );
}
