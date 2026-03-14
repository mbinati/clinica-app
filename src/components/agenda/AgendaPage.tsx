import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useAgendaStore } from '../../stores/useAgendaStore';
import { useProfissionalStore } from '../../stores/useProfissionalStore';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { useCatalogoStore } from '../../stores/useCatalogoStore';
import { formatDateISO, formatDate } from '../../utils/formatters';
import { addDays, dayName, monthName, getWeekDays, generateTimeSlots, parseTimeToMinutes } from '../../utils/dateUtils';
import StatusBadge from '../shared/StatusBadge';
import AgendamentoForm from './AgendamentoForm';
import type { CalendarView, Agendamento, StatusAgendamento } from '../../types';
import { useIsMobile } from '../../hooks/useMediaQuery';

export default function AgendaPage() {
  const agendamentos = useAgendaStore(s => s.agendamentos);
  const updateAgendamento = useAgendaStore(s => s.updateAgendamento);
  const profissionais = useProfissionalStore(s => s.profissionais).filter(p => p.ativo);
  const pacientes = usePacienteStore(s => s.pacientes);
  const procedimentos = useCatalogoStore(s => s.procedimentos);
  const isMobile = useIsMobile();

  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<CalendarView>(isMobile ? 'day' : 'week');
  const [filterProf, setFilterProf] = useState<string>('');
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [prefillSlot, setPrefillSlot] = useState<{ data: string; hora: string; profissionalId: string } | null>(null);

  const dateStr = formatDateISO(date);
  const weekDays = useMemo(() => getWeekDays(date), [dateStr]);
  const timeSlots = generateTimeSlots('07:00', '20:00', 30);

  const filtered = useMemo(() => {
    let list = agendamentos;
    if (filterProf) list = list.filter(a => a.profissionalId === filterProf);
    return list;
  }, [agendamentos, filterProf]);

  const getForSlot = (day: string, time: string) =>
    filtered.filter(a => a.data === day && a.horaInicio === time);

  const getPacienteName = (id: string) => pacientes.find(p => p.id === id)?.nome || 'Paciente';
  const getProfColor = (id: string) => profissionais.find(p => p.id === id)?.cor || '#10b981';

  const nav = (dir: number) => {
    if (view === 'day') setDate(addDays(date, dir));
    else if (view === 'week') setDate(addDays(date, dir * 7));
    else setDate(new Date(date.getFullYear(), date.getMonth() + dir, 1));
  };

  const handleSlotClick = (day: string, time: string) => {
    setPrefillSlot({ data: day, hora: time, profissionalId: filterProf || '' });
    setEditId(null);
    setShowForm(true);
  };

  const handleCardClick = (a: Agendamento) => {
    setEditId(a.id);
    setPrefillSlot(null);
    setShowForm(true);
  };

  const quickStatus = (id: string, status: StatusAgendamento) => {
    updateAgendamento(id, { status });
  };

  // ── Day View ──
  const renderDay = (dayStr: string) => (
    <div className="space-y-0.5">
      {timeSlots.map(time => {
        const items = getForSlot(dayStr, time);
        return (
          <div
            key={time}
            onClick={() => !items.length && handleSlotClick(dayStr, time)}
            className={`flex items-stretch min-h-[44px] border-b border-gray-100 dark:border-border/30 group
              ${!items.length ? 'cursor-pointer hover:bg-accent/5' : ''}`}
          >
            <div className="w-14 shrink-0 text-xs text-gray-400 dark:text-gray-500 py-2 text-right pr-2 border-r border-gray-100 dark:border-border/30">
              {time}
            </div>
            <div className="flex-1 px-2 py-1 space-y-1">
              {items.map(a => (
                <button
                  key={a.id}
                  onClick={(e) => { e.stopPropagation(); handleCardClick(a); }}
                  className="w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors hover:opacity-80"
                  style={{ backgroundColor: getProfColor(a.profissionalId) + '20', borderLeft: `3px solid ${getProfColor(a.profissionalId)}` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800 dark:text-text-primary truncate">{getPacienteName(a.pacienteId)}</span>
                    <StatusBadge status={a.status} small />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-text-secondary">{a.horaInicio} - {a.horaFim}</p>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  // ── Week View ──
  const renderWeek = () => (
    <div className="overflow-x-auto">
      <div className="min-w-[700px]">
        {/* Header */}
        <div className="grid grid-cols-[56px_repeat(7,1fr)] border-b border-gray-200 dark:border-border">
          <div />
          {weekDays.map(d => {
            const ds = formatDateISO(d);
            const isToday = ds === formatDateISO(new Date());
            return (
              <div key={ds} className={`text-center py-2 text-xs font-medium ${isToday ? 'text-accent' : 'text-gray-500 dark:text-text-secondary'}`}>
                <div>{dayName(d.getDay(), true)}</div>
                <div className={`text-lg ${isToday ? 'bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto' : ''}`}>
                  {d.getDate()}
                </div>
              </div>
            );
          })}
        </div>
        {/* Grid */}
        <div className="max-h-[calc(100vh-280px)] overflow-y-auto">
          {timeSlots.map(time => (
            <div key={time} className="grid grid-cols-[56px_repeat(7,1fr)] border-b border-gray-50 dark:border-border/20">
              <div className="text-xs text-gray-400 dark:text-gray-500 py-1 text-right pr-2">{time}</div>
              {weekDays.map(d => {
                const ds = formatDateISO(d);
                const items = getForSlot(ds, time);
                return (
                  <div
                    key={ds}
                    onClick={() => !items.length && handleSlotClick(ds, time)}
                    className={`min-h-[40px] border-l border-gray-50 dark:border-border/20 px-0.5 py-0.5
                      ${!items.length ? 'cursor-pointer hover:bg-accent/5' : ''}`}
                  >
                    {items.map(a => (
                      <button
                        key={a.id}
                        onClick={(e) => { e.stopPropagation(); handleCardClick(a); }}
                        className="w-full text-left px-1.5 py-0.5 rounded text-[11px] truncate hover:opacity-80"
                        style={{ backgroundColor: getProfColor(a.profissionalId) + '30', color: getProfColor(a.profissionalId) }}
                      >
                        {getPacienteName(a.pacienteId)}
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={() => nav(-1)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-bg-hover text-gray-500 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => setDate(new Date())} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-bg-primary text-gray-600 dark:text-text-secondary hover:bg-gray-200 dark:hover:bg-bg-hover transition-colors">
            Hoje
          </button>
          <button onClick={() => nav(1)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-bg-hover text-gray-500 transition-colors">
            <ChevronRight size={18} />
          </button>
          <h2 className="text-sm font-semibold text-gray-800 dark:text-text-primary ml-2">
            {view === 'day' && `${date.getDate()} de ${monthName(date.getMonth())} ${date.getFullYear()}`}
            {view === 'week' && `${weekDays[0].getDate()} - ${weekDays[6].getDate()} de ${monthName(date.getMonth())} ${date.getFullYear()}`}
            {(view === 'month' || view === 'list_prof' || view === 'list_pac' || view === 'list_hora') && `${monthName(date.getMonth())} ${date.getFullYear()}`}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {/* Prof filter */}
          <select
            value={filterProf}
            onChange={e => setFilterProf(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm text-gray-700 dark:text-text-secondary"
          >
            <option value="">Todos profissionais</option>
            {profissionais.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
          </select>
          {/* View toggle */}
          <div className="flex bg-gray-100 dark:bg-bg-primary rounded-lg p-0.5 flex-wrap">
            {([
              { v: 'day' as CalendarView, label: 'Dia' },
              { v: 'week' as CalendarView, label: 'Semana' },
              { v: 'month' as CalendarView, label: 'Mês' },
              { v: 'list_prof' as CalendarView, label: 'Prof.' },
              { v: 'list_pac' as CalendarView, label: 'Pac.' },
              { v: 'list_hora' as CalendarView, label: 'Hora' },
            ]).map(({ v, label }) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors
                  ${view === v ? 'bg-white dark:bg-bg-card text-gray-800 dark:text-text-primary shadow-sm' : 'text-gray-500 dark:text-text-secondary'}`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => { setEditId(null); setPrefillSlot(null); setShowForm(true); }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm transition-colors"
          >
            <Plus size={16} /> <span className="hidden sm:inline">Agendar</span>
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border overflow-hidden">
        {view === 'day' && renderDay(dateStr)}
        {view === 'week' && renderWeek()}
        {view === 'month' && (
          <div className="p-4">
            {/* Simple month grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'].map(d => (
                <div key={d} className="text-xs font-medium text-gray-500 dark:text-text-secondary py-1">{d}</div>
              ))}
              {(() => {
                const first = new Date(date.getFullYear(), date.getMonth(), 1);
                const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
                const startDay = first.getDay() === 0 ? 6 : first.getDay() - 1;
                const cells = [];
                for (let i = 0; i < startDay; i++) cells.push(<div key={`e${i}`} />);
                for (let d = 1; d <= lastDay; d++) {
                  const ds = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                  const count = filtered.filter(a => a.data === ds).length;
                  const isToday = ds === formatDateISO(new Date());
                  cells.push(
                    <button
                      key={d}
                      onClick={() => { setDate(new Date(date.getFullYear(), date.getMonth(), d)); setView('day'); }}
                      className={`py-2 rounded-lg text-sm transition-colors hover:bg-accent/10
                        ${isToday ? 'bg-accent text-white font-bold' : 'text-gray-700 dark:text-text-primary'}`}
                    >
                      {d}
                      {count > 0 && (
                        <div className="flex justify-center gap-0.5 mt-0.5">
                          {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-accent" />
                          ))}
                        </div>
                      )}
                    </button>
                  );
                }
                return cells;
              })()}
            </div>
          </div>
        )}
      </div>

      {/* Visão lista por profissional */}
      {view === 'list_prof' && (
        <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border overflow-hidden">
          {profissionais.map(prof => {
            const agendProf = filtered.filter(a => a.profissionalId === prof.id && a.data === dateStr)
              .sort((a, b) => a.horaInicio.localeCompare(b.horaInicio));
            if (agendProf.length === 0) return null;
            return (
              <div key={prof.id} className="border-b border-gray-100 dark:border-border/50 last:border-0">
                <div className="px-4 py-2 bg-gray-50 dark:bg-bg-secondary flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: prof.cor }} />
                  <span className="text-sm font-semibold text-gray-700 dark:text-text-primary">{prof.nome}</span>
                  <span className="text-xs text-gray-400 ml-auto">{agendProf.length} agendamento(s)</span>
                </div>
                {agendProf.map(a => (
                  <button key={a.id} onClick={() => handleCardClick(a)} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-bg-hover text-left transition-colors">
                    <span className="text-xs text-gray-400 w-20">{a.horaInicio} - {a.horaFim}</span>
                    <span className="text-sm text-gray-800 dark:text-text-primary flex-1 truncate">{getPacienteName(a.pacienteId)}</span>
                    <StatusBadge status={a.status} small />
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* Visão lista por paciente */}
      {view === 'list_pac' && (
        <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border overflow-hidden">
          {(() => {
            const agendDia = filtered.filter(a => a.data === dateStr).sort((a, b) => getPacienteName(a.pacienteId).localeCompare(getPacienteName(b.pacienteId)));
            const grouped = new Map<string, typeof agendDia>();
            agendDia.forEach(a => {
              const key = a.pacienteId;
              if (!grouped.has(key)) grouped.set(key, []);
              grouped.get(key)!.push(a);
            });
            return Array.from(grouped.entries()).map(([pacId, agends]) => (
              <div key={pacId} className="border-b border-gray-100 dark:border-border/50 last:border-0">
                <div className="px-4 py-2 bg-gray-50 dark:bg-bg-secondary">
                  <span className="text-sm font-semibold text-gray-700 dark:text-text-primary">{getPacienteName(pacId)}</span>
                </div>
                {agends.map(a => {
                  const prof = profissionais.find(p => p.id === a.profissionalId);
                  return (
                    <button key={a.id} onClick={() => handleCardClick(a)} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-bg-hover text-left transition-colors">
                      <span className="text-xs text-gray-400 w-20">{a.horaInicio} - {a.horaFim}</span>
                      <span className="text-sm text-gray-600 dark:text-text-secondary flex-1 truncate">{prof?.nome || 'Profissional'}</span>
                      <StatusBadge status={a.status} small />
                    </button>
                  );
                })}
              </div>
            ));
          })()}
        </div>
      )}

      {/* Visão lista por horário */}
      {view === 'list_hora' && (
        <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-border bg-gray-50 dark:bg-bg-secondary">
                <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-500 dark:text-text-secondary">Horário</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-500 dark:text-text-secondary">Paciente</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-500 dark:text-text-secondary">Profissional</th>
                <th className="text-center px-4 py-2.5 text-xs font-semibold text-gray-500 dark:text-text-secondary">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered
                .filter(a => a.data === dateStr)
                .sort((a, b) => a.horaInicio.localeCompare(b.horaInicio))
                .map(a => {
                  const prof = profissionais.find(p => p.id === a.profissionalId);
                  return (
                    <tr key={a.id} onClick={() => handleCardClick(a)} className="border-b border-gray-100 dark:border-border/50 hover:bg-gray-50 dark:hover:bg-bg-hover cursor-pointer transition-colors">
                      <td className="px-4 py-2.5 text-gray-600 dark:text-text-secondary">{a.horaInicio} - {a.horaFim}</td>
                      <td className="px-4 py-2.5 font-medium text-gray-800 dark:text-text-primary">{getPacienteName(a.pacienteId)}</td>
                      <td className="px-4 py-2.5 text-gray-600 dark:text-text-secondary">{prof?.nome || ''}</td>
                      <td className="px-4 py-2.5 text-center"><StatusBadge status={a.status} small /></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <AgendamentoForm
          editId={editId}
          prefill={prefillSlot}
          onClose={() => { setShowForm(false); setEditId(null); setPrefillSlot(null); }}
        />
      )}
    </div>
  );
}
