import { useState, useMemo } from 'react';
import { useFinanceiroStore } from '../../stores/useFinanceiroStore';
import { formatCurrency, formatDate, horaAtual, todayISO } from '../../utils/formatters';
import EmptyState from '../shared/EmptyState';
import { Landmark, Plus, ArrowUpCircle, ArrowDownCircle, Lock, Unlock } from 'lucide-react';
import type { StatusCaixa } from '../../types';

export default function CaixaPage() {
  const caixas = useFinanceiroStore(s => s.caixas);
  const movimentos = useFinanceiroStore(s => s.movimentos);
  const abrirCaixa = useFinanceiroStore(s => s.abrirCaixa);
  const fecharCaixa = useFinanceiroStore(s => s.fecharCaixa);
  const addMovimento = useFinanceiroStore(s => s.addMovimento);

  const [saldoInicial, setSaldoInicial] = useState('');

  // Caixa aberto atual
  const caixaAberto = caixas.find(c => c.status === 'aberto');

  // Movimentos do caixa aberto
  const movimentosCaixa = useMemo(() => {
    if (!caixaAberto) return [];
    return movimentos
      .filter(m => m.caixaId === caixaAberto.id)
      .sort((a, b) => b.criadoEm.localeCompare(a.criadoEm));
  }, [caixaAberto, movimentos]);

  const totalEntradas = movimentosCaixa
    .filter(m => m.tipo === 'entrada' || m.tipo === 'suprimento')
    .reduce((sum, m) => sum + m.valor, 0);
  const totalSaidas = movimentosCaixa
    .filter(m => m.tipo === 'saida' || m.tipo === 'sangria')
    .reduce((sum, m) => sum + m.valor, 0);
  const saldoAtual = (caixaAberto?.saldoInicial ?? 0) + totalEntradas - totalSaidas;

  const handleAbrirCaixa = () => {
    const valor = parseFloat(saldoInicial.replace(',', '.')) || 0;
    abrirCaixa(valor, 'admin');
    setSaldoInicial('');
  };

  const handleFecharCaixa = () => {
    if (caixaAberto) {
      fecharCaixa(caixaAberto.id, saldoAtual);
    }
  };

  // Caixas fechados recentes
  const caixasFechados = caixas
    .filter(c => c.status === 'fechado')
    .sort((a, b) => b.dataAbertura.localeCompare(a.dataAbertura))
    .slice(0, 10);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-text-primary">Caixa</h2>
      </div>

      {!caixaAberto ? (
        /* Tela de abertura */
        <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-6 max-w-md mx-auto text-center">
          <Unlock size={48} className="mx-auto text-accent mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-text-primary mb-2">Abrir Caixa</h3>
          <p className="text-sm text-gray-500 dark:text-text-secondary mb-4">Informe o saldo inicial para abrir o caixa do dia.</p>
          <input
            value={saldoInicial}
            onChange={e => setSaldoInicial(e.target.value)}
            placeholder="Saldo inicial (R$)"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-secondary text-sm text-center mb-4 focus:ring-2 focus:ring-accent/40 focus:border-accent"
          />
          <button
            onClick={handleAbrirCaixa}
            className="w-full px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors text-sm font-medium"
          >
            Abrir Caixa
          </button>
        </div>
      ) : (
        <>
          {/* KPIs do caixa aberto */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
              <p className="text-xs text-gray-500 dark:text-text-secondary">Saldo Inicial</p>
              <p className="text-lg font-bold text-gray-800 dark:text-text-primary">{formatCurrency(caixaAberto.saldoInicial)}</p>
            </div>
            <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
              <p className="text-xs text-gray-500 dark:text-text-secondary">Entradas</p>
              <p className="text-lg font-bold text-emerald-600">{formatCurrency(totalEntradas)}</p>
            </div>
            <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
              <p className="text-xs text-gray-500 dark:text-text-secondary">Saídas</p>
              <p className="text-lg font-bold text-red-500">{formatCurrency(totalSaidas)}</p>
            </div>
            <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
              <p className="text-xs text-gray-500 dark:text-text-secondary">Saldo Atual</p>
              <p className={`text-lg font-bold ${saldoAtual >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>{formatCurrency(saldoAtual)}</p>
            </div>
          </div>

          {/* Botão fechar */}
          <div className="flex justify-end">
            <button
              onClick={handleFecharCaixa}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
            >
              <Lock size={16} />Fechar Caixa
            </button>
          </div>

          {/* Movimentos */}
          {movimentosCaixa.length === 0 ? (
            <EmptyState icon={Landmark} title="Sem movimentos" description="Nenhum movimento registrado neste caixa" />
          ) : (
            <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-border bg-gray-50 dark:bg-bg-secondary">
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-text-secondary">Tipo</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-text-secondary">Descrição</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-text-secondary">Forma Pgto</th>
                      <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-text-secondary">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movimentosCaixa.map(mov => (
                      <tr key={mov.id} className="border-b border-gray-100 dark:border-border/50 hover:bg-gray-50 dark:hover:bg-bg-hover transition-colors">
                        <td className="px-4 py-3">
                          {(mov.tipo === 'entrada' || mov.tipo === 'suprimento') ? (
                            <span className="inline-flex items-center gap-1 text-emerald-600"><ArrowUpCircle size={14} />{mov.tipo === 'suprimento' ? 'Suprimento' : 'Entrada'}</span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-red-500"><ArrowDownCircle size={14} />{mov.tipo === 'sangria' ? 'Sangria' : 'Saída'}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-gray-800 dark:text-text-primary">{mov.descricao}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-text-secondary capitalize">{mov.formaPagamento.replace('_', ' ')}</td>
                        <td className={`px-4 py-3 text-right font-medium ${(mov.tipo === 'entrada' || mov.tipo === 'suprimento') ? 'text-emerald-600' : 'text-red-500'}`}>
                          {formatCurrency(mov.valor)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {/* Caixas fechados */}
      {caixasFechados.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-600 dark:text-text-secondary mb-2">Caixas Fechados</h3>
          <div className="grid gap-2">
            {caixasFechados.map(cx => (
              <div key={cx.id} className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-lg p-3 flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-800 dark:text-text-primary font-medium">{formatDate(cx.dataAbertura)}</span>
                  <span className="text-xs text-gray-400 ml-2">Inicial: {formatCurrency(cx.saldoInicial)}</span>
                </div>
                <span className="text-sm font-bold text-gray-800 dark:text-text-primary">
                  Final: {formatCurrency(cx.saldoFinal ?? 0)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
