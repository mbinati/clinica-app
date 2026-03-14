import { useMemo } from 'react';
import { Users, CalendarDays, DollarSign, TrendingUp, UserCheck, Cake } from 'lucide-react';
import StatCard from '../shared/StatCard';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { useAgendaStore } from '../../stores/useAgendaStore';
import { useAtendimentoStore } from '../../stores/useAtendimentoStore';
import { useFaturamentoStore } from '../../stores/useFaturamentoStore';
import { todayStr, monthName } from '../../utils/dateUtils';
import { formatCurrency, calcularIdade, todayISO } from '../../utils/formatters';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line, CartesianGrid } from 'recharts';

const STATUS_COLORS: Record<string, string> = {
  agendado: '#06b6d4',
  confirmado: '#22c55e',
  em_atendimento: '#eab308',
  atendido: '#10b981',
  finalizado: '#10b981',
  presente: '#3b82f6',
  cancelado: '#ef4444',
  faltou: '#6b7280',
};

const COLORS_PIE = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function DashboardPage() {
  const pacientes = usePacienteStore(s => s.pacientes);
  const agendamentos = useAgendaStore(s => s.agendamentos);
  const atendimentos = useAtendimentoStore(s => s.atendimentos);
  const faturas = useFaturamentoStore(s => s.faturas);
  const today = todayStr();
  const now = new Date();
  const mesAtual = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

  const stats = useMemo(() => {
    const agendHoje = agendamentos.filter(a => a.data === today);
    const faturasMes = faturas.filter(f => f.data.startsWith(mesAtual));
    const faturamentoMes = faturasMes.filter(f => f.status !== 'cancelado').reduce((s, f) => s + f.valorFinal, 0);
    const pacientesAtivos = pacientes.filter(p => p.ativo).length;
    const atendHoje = atendimentos.filter(a => a.data === today);
    const finalizadosHoje = atendHoje.filter(a => a.status === 'finalizado').length;

    // Status distribution hoje
    const statusDist = agendHoje.reduce((acc, a) => {
      acc[a.status] = (acc[a.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    const statusData = Object.entries(statusDist).map(([name, value]) => ({ name, value }));

    // Pacientes por sexo
    const masc = pacientes.filter(p => p.ativo && p.sexo === 'M').length;
    const fem = pacientes.filter(p => p.ativo && p.sexo === 'F').length;
    const outro = pacientes.filter(p => p.ativo && p.sexo === 'outro').length;
    const sexoData = [
      { name: 'Masculino', value: masc },
      { name: 'Feminino', value: fem },
      ...(outro > 0 ? [{ name: 'Outro', value: outro }] : []),
    ].filter(x => x.value > 0);

    // Faturamento últimos 6 meses
    const faturamentoMensal: { mes: string; valor: number }[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      const total = faturas.filter(f => f.data.startsWith(key) && f.status !== 'cancelado').reduce((s, f) => s + f.valorFinal, 0);
      faturamentoMensal.push({ mes: monthName(d.getMonth()).slice(0, 3), valor: total });
    }

    // Agendamentos x Atendimentos últimos 6 meses
    const agendVsAtend: { mes: string; agendados: number; finalizados: number }[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      const label = monthName(d.getMonth()).slice(0, 3);
      const agend = agendamentos.filter(a => a.data.startsWith(key)).length;
      const final_ = atendimentos.filter(a => a.data.startsWith(key) && a.status === 'finalizado').length;
      agendVsAtend.push({ mes: label, agendados: agend, finalizados: final_ });
    }

    // Aniversariantes do mês
    const mesNum = String(now.getMonth() + 1).padStart(2, '0');
    const diaNum = String(now.getDate()).padStart(2, '0');
    const aniversariantes = pacientes
      .filter(p => p.ativo && p.dataNascimento)
      .filter(p => {
        const parts = p.dataNascimento.split('-');
        return parts[1] === mesNum;
      })
      .sort((a, b) => {
        const diaA = a.dataNascimento.split('-')[2];
        const diaB = b.dataNascimento.split('-')[2];
        return diaA.localeCompare(diaB);
      })
      .slice(0, 8);

    return {
      agendHoje: agendHoje.length,
      finalizadosHoje,
      faturamentoMes,
      pacientesAtivos,
      statusData,
      sexoData,
      faturamentoMensal,
      agendVsAtend,
      aniversariantes,
    };
  }, [pacientes, agendamentos, atendimentos, faturas, today, mesAtual]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Pacientes Ativos" value={stats.pacientesAtivos} color="text-emerald-500" />
        <StatCard icon={CalendarDays} label="Agendamentos Hoje" value={stats.agendHoje} color="text-teal-500" />
        <StatCard icon={UserCheck} label="Finalizados Hoje" value={stats.finalizadosHoje} color="text-blue-500" />
        <StatCard icon={DollarSign} label="Faturamento Mês" value={formatCurrency(stats.faturamentoMes)} color="text-green-500" />
      </div>

      {/* Gráficos - Linha 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Agendamentos hoje por status */}
        <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-5">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-text-primary mb-4">Agendamentos Hoje por Situação</h3>
          {stats.statusData.length > 0 ? (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={stats.statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75} label>
                  {stats.statusData.map((entry) => (
                    <Cell key={entry.name} fill={STATUS_COLORS[entry.name] || '#6b7280'} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-12">Nenhum agendamento hoje</p>
          )}
        </div>

        {/* Pacientes por sexo */}
        <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-5">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-text-primary mb-4">Pacientes por Sexo</h3>
          {stats.sexoData.length > 0 ? (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={stats.sexoData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75} label>
                  {stats.sexoData.map((_, i) => (
                    <Cell key={i} fill={COLORS_PIE[i % COLORS_PIE.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-12">Nenhum paciente cadastrado</p>
          )}
        </div>
      </div>

      {/* Gráficos - Linha 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Faturamento mensal */}
        <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-5">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-text-primary mb-4">Faturamento Mensal</h3>
          {stats.faturamentoMensal.some(m => m.valor > 0) ? (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={stats.faturamentoMensal}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="#94a3b8" />
                <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
                <Tooltip formatter={(v: number) => formatCurrency(v)} />
                <Bar dataKey="valor" name="Faturamento" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-12">Sem dados de faturamento</p>
          )}
        </div>

        {/* Agendamentos x Atendimentos */}
        <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-5">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-text-primary mb-4">Agendamentos x Finalizados (6 meses)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={stats.agendVsAtend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip />
              <Legend />
              <Bar dataKey="agendados" name="Agendados" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="finalizados" name="Finalizados" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Aniversariantes */}
      <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-5">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-text-primary mb-3 flex items-center gap-2">
          <Cake size={16} className="text-pink-500" /> Aniversariantes do Mês
        </h3>
        {stats.aniversariantes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {stats.aniversariantes.map(p => {
              const dia = p.dataNascimento.split('-')[2];
              const isHoje = p.dataNascimento.slice(5) === `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
              return (
                <div key={p.id} className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isHoje ? 'bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800' : 'bg-gray-50 dark:bg-bg-secondary'}`}>
                  <span className={`text-lg font-bold ${isHoje ? 'text-pink-500' : 'text-gray-400'}`}>{dia}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-800 dark:text-text-primary truncate">{p.nome}</p>
                    <p className="text-xs text-gray-400">{calcularIdade(p.dataNascimento)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-gray-400 text-center py-4">Nenhum aniversariante neste mês</p>
        )}
      </div>
    </div>
  );
}
