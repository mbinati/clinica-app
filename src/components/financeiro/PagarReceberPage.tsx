import { useState, useMemo } from 'react';
import { useFinanceiroStore } from '../../stores/useFinanceiroStore';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { formatCurrency, formatDate, statusLabel, statusColor } from '../../utils/formatters';
import StatusBadge from '../shared/StatusBadge';
import EmptyState from '../shared/EmptyState';
import { Plus, Wallet, Filter, Search } from 'lucide-react';
import type { TipoConta, StatusConta } from '../../types';

type FiltroTipo = 'todos' | 'pagar' | 'receber';
type FiltroStatus = 'todos' | 'aberta' | 'vencida' | 'paga' | 'parcial';

export default function PagarReceberPage() {
  const contas = useFinanceiroStore(s => s.contas);
  const pacientes = usePacienteStore(s => s.pacientes);

  const [busca, setBusca] = useState('');
  const [filtroTipo, setFiltroTipo] = useState<FiltroTipo>('todos');
  const [filtroStatus, setFiltroStatus] = useState<FiltroStatus>('todos');

  const getPaciente = (id: string | null) => id ? pacientes.find(p => p.id === id) : null;

  const listaFiltrada = useMemo(() => {
    let lista = [...contas];

    if (filtroTipo !== 'todos') {
      lista = lista.filter(c => c.tipo === filtroTipo);
    }
    if (filtroStatus !== 'todos') {
      lista = lista.filter(c => c.status === filtroStatus);
    }
    if (busca) {
      const q = busca.toLowerCase();
      lista = lista.filter(c => {
        const pac = getPaciente(c.pacienteId);
        return c.descricao.toLowerCase().includes(q)
          || c.fornecedor.toLowerCase().includes(q)
          || (pac && pac.nome.toLowerCase().includes(q));
      });
    }

    // Ordenar por vencimento
    lista.sort((a, b) => a.dataVencimento.localeCompare(b.dataVencimento));
    return lista;
  }, [contas, busca, filtroTipo, filtroStatus, pacientes]);

  const totalReceber = listaFiltrada
    .filter(c => c.tipo === 'receber' && c.status !== 'cancelada')
    .reduce((sum, c) => sum + (c.valor - c.valorPago), 0);
  const totalPagar = listaFiltrada
    .filter(c => c.tipo === 'pagar' && c.status !== 'cancelada')
    .reduce((sum, c) => sum + (c.valor - c.valorPago), 0);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-text-primary">Pagar e Receber</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors text-sm font-medium">
          <Plus size={16} />Nova Conta
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
          <p className="text-xs text-gray-500 dark:text-text-secondary">A Receber</p>
          <p className="text-lg font-bold text-emerald-600">{formatCurrency(totalReceber)}</p>
        </div>
        <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
          <p className="text-xs text-gray-500 dark:text-text-secondary">A Pagar</p>
          <p className="text-lg font-bold text-red-500">{formatCurrency(totalPagar)}</p>
        </div>
        <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
          <p className="text-xs text-gray-500 dark:text-text-secondary">Saldo</p>
          <p className={`text-lg font-bold ${totalReceber - totalPagar >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
            {formatCurrency(totalReceber - totalPagar)}
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={busca}
            onChange={e => setBusca(e.target.value)}
            placeholder="Buscar conta..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm focus:ring-2 focus:ring-accent/40 focus:border-accent"
          />
        </div>
        <select
          value={filtroTipo}
          onChange={e => setFiltroTipo(e.target.value as FiltroTipo)}
          className="px-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm"
        >
          <option value="todos">Todos</option>
          <option value="receber">A Receber</option>
          <option value="pagar">A Pagar</option>
        </select>
        <select
          value={filtroStatus}
          onChange={e => setFiltroStatus(e.target.value as FiltroStatus)}
          className="px-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm"
        >
          <option value="todos">Todas situações</option>
          <option value="aberta">Em Aberto</option>
          <option value="vencida">Vencidas</option>
          <option value="paga">Pagas</option>
          <option value="parcial">Parcial</option>
        </select>
      </div>

      {/* Lista */}
      {listaFiltrada.length === 0 ? (
        <EmptyState icon={Wallet} title="Nenhuma conta" description="Nenhuma conta encontrada com os filtros selecionados" />
      ) : (
        <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-border bg-gray-50 dark:bg-bg-secondary">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-text-secondary">Tipo</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-text-secondary">Descrição</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-text-secondary">Cliente/Fornecedor</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-text-secondary">Vencimento</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-text-secondary">Valor</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-text-secondary">Aberto</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 dark:text-text-secondary">Situação</th>
                </tr>
              </thead>
              <tbody>
                {listaFiltrada.map(conta => {
                  const pac = getPaciente(conta.pacienteId);
                  const emAberto = conta.valor - conta.valorPago;
                  return (
                    <tr key={conta.id} className="border-b border-gray-100 dark:border-border/50 hover:bg-gray-50 dark:hover:bg-bg-hover transition-colors">
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${conta.tipo === 'receber' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                          {conta.tipo === 'receber' ? 'Receber' : 'Pagar'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-800 dark:text-text-primary">{conta.descricao}</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-text-secondary">{pac?.nome || conta.fornecedor || '—'}</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-text-secondary">{formatDate(conta.dataVencimento)}</td>
                      <td className="px-4 py-3 text-right font-medium text-gray-800 dark:text-text-primary">{formatCurrency(conta.valor)}</td>
                      <td className={`px-4 py-3 text-right font-medium ${emAberto > 0 ? 'text-orange-500' : 'text-gray-400'}`}>{formatCurrency(emAberto)}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor(conta.status)}`}>
                          {statusLabel(conta.status)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
