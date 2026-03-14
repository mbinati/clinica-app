import { useMemo } from 'react';
import { useAgendaStore } from '../../stores/useAgendaStore';
import { useAtendimentoStore } from '../../stores/useAtendimentoStore';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { useFaturamentoStore } from '../../stores/useFaturamentoStore';
import { useFinanceiroStore } from '../../stores/useFinanceiroStore';
import { formatCurrency } from '../../utils/formatters';
import { BarChart3, Users, CalendarDays, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function IndicadoresPage() {
  const agendamentos = useAgendaStore(s => s.agendamentos);
  const atendimentos = useAtendimentoStore(s => s.atendimentos);
  const pacientes = usePacienteStore(s => s.pacientes);
  const faturas = useFaturamentoStore(s => s.faturas);
  const contas = useFinanceiroStore(s => s.contas);

  // KPIs básicos
  const totalPacientes = pacientes.length;
  const totalAgendamentos = agendamentos.length;
  const totalAtendimentos = atendimentos.filter(a => a.status === 'finalizado').length;
  const receitaTotal = faturas.reduce((sum, f) => sum + f.valorFinal, 0);

  // Agendamentos por status (para gráfico pizza)
  const agendPorStatus = useMemo(() => {
    const counts: Record<string, number> = {};
    agendamentos.forEach(a => {
      counts[a.status] = (counts[a.status] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name: name.replace('_', ' '), value }));
  }, [agendamentos]);

  // Pacientes por sexo
  const pacPorSexo = useMemo(() => {
    const m = pacientes.filter(p => p.sexo === 'M').length;
    const f = pacientes.filter(p => p.sexo === 'F').length;
    const o = pacientes.filter(p => p.sexo === 'outro').length;
    return [
      { name: 'Masculino', value: m },
      { name: 'Feminino', value: f },
      ...(o > 0 ? [{ name: 'Outro', value: o }] : []),
    ].filter(x => x.value > 0);
  }, [pacientes]);

  // Atendimentos por mês (últimos 6 meses)
  const atendPorMes = useMemo(() => {
    const now = new Date();
    const meses: { mes: string; agendados: number; finalizados: number }[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const mesStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      const label = d.toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' });
      const agend = agendamentos.filter(a => a.data.startsWith(mesStr)).length;
      const final = atendimentos.filter(a => a.data.startsWith(mesStr) && a.status === 'finalizado').length;
      meses.push({ mes: label, agendados: agend, finalizados: final });
    }
    return meses;
  }, [agendamentos, atendimentos]);

  // Financeiro resumo
  const totalReceber = contas
    .filter(c => c.tipo === 'receber' && (c.status === 'aberta' || c.status === 'parcial'))
    .reduce((sum, c) => sum + (c.valor - c.valorPago), 0);
  const totalPagar = contas
    .filter(c => c.tipo === 'pagar' && (c.status === 'aberta' || c.status === 'parcial'))
    .reduce((sum, c) => sum + (c.valor - c.valorPago), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 dark:text-text-primary">Indicadores</h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <KPICard icon={Users} label="Pacientes" value={String(totalPacientes)} color="text-blue-600" />
        <KPICard icon={CalendarDays} label="Agendamentos" value={String(totalAgendamentos)} color="text-cyan-600" />
        <KPICard icon={BarChart3} label="Atendimentos" value={String(totalAtendimentos)} color="text-emerald-600" />
        <KPICard icon={DollarSign} label="Receita Total" value={formatCurrency(receitaTotal)} color="text-accent" />
      </div>

      {/* Financeiro */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4 flex items-center gap-4">
          <TrendingUp size={32} className="text-emerald-500 shrink-0" />
          <div>
            <p className="text-xs text-gray-500 dark:text-text-secondary">A Receber</p>
            <p className="text-xl font-bold text-emerald-600">{formatCurrency(totalReceber)}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4 flex items-center gap-4">
          <TrendingDown size={32} className="text-red-500 shrink-0" />
          <div>
            <p className="text-xs text-gray-500 dark:text-text-secondary">A Pagar</p>
            <p className="text-xl font-bold text-red-500">{formatCurrency(totalPagar)}</p>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Agendamentos por status */}
        {agendPorStatus.length > 0 && (
          <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-text-primary mb-3">Agendamentos por Situação</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={agendPorStatus} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {agendPorStatus.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Pacientes por sexo */}
        {pacPorSexo.length > 0 && (
          <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-text-primary mb-3">Pacientes por Sexo</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={pacPorSexo} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {pacPorSexo.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Gráfico barras - Atendimentos por mês */}
      <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-text-primary mb-3">Agendamentos x Atendimentos (6 meses)</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={atendPorMes}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="mes" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="agendados" name="Agendados" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="finalizados" name="Finalizados" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function KPICard({ icon: Icon, label, value, color }: { icon: React.ElementType; label: string; value: string; color: string }) {
  return (
    <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
      <div className="flex items-center gap-3">
        <Icon size={24} className={`${color} shrink-0`} />
        <div>
          <p className="text-xs text-gray-500 dark:text-text-secondary">{label}</p>
          <p className="text-lg font-bold text-gray-800 dark:text-text-primary">{value}</p>
        </div>
      </div>
    </div>
  );
}
