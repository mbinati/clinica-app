import { formatDateISO } from './formatters';

export function getWeekRange(date: Date): { start: Date; end: Date } {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? 6 : day - 1; // Monday as first day
  const start = new Date(d);
  start.setDate(d.getDate() - diff);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return { start, end };
}

export function getMonthRange(year: number, month: number): { start: Date; end: Date } {
  return {
    start: new Date(year, month, 1),
    end: new Date(year, month + 1, 0),
  };
}

export function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function generateTimeSlots(start: string, end: string, intervalMinutes: number): string[] {
  const slots: string[] = [];
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  let totalMin = sh * 60 + sm;
  const endMin = eh * 60 + em;
  while (totalMin < endMin) {
    const h = Math.floor(totalMin / 60);
    const m = totalMin % 60;
    slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    totalMin += intervalMinutes;
  }
  return slots;
}

export function parseTimeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

export function getWeekDays(date: Date): Date[] {
  const { start } = getWeekRange(date);
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

export function getMonthCalendarDays(year: number, month: number): Date[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
  const days: Date[] = [];
  for (let i = -startDay; i <= lastDay.getDate() + (6 - (lastDay.getDay() === 0 ? 6 : lastDay.getDay() - 1)); i++) {
    if (days.length >= 42) break; // max 6 weeks
    days.push(new Date(year, month, i + 1));
  }
  return days;
}

export function dayName(dayIndex: number, short = false): string {
  const names = short
    ? ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    : ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
  return names[dayIndex] || '';
}

export function monthName(month: number): string {
  const names = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return names[month] || '';
}

export function todayStr(): string {
  return formatDateISO(new Date());
}
