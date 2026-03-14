export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function formatNumber(value: number): string {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

export function formatDateISO(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function formatCPF(cpf: string): string {
  const digits = cpf.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function formatCEP(cep: string): string {
  const digits = cep.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

export function formatTime(time: string): string {
  return time; // Already in HH:MM format
}

export function todayISO(): string {
  return formatDateISO(new Date());
}

export function nowISO(): string {
  return new Date().toISOString();
}

export function calcularIdade(dataNascimento: string): string {
  if (!dataNascimento) return '';
  const [y, m, d] = dataNascimento.split('-').map(Number);
  const hoje = new Date();
  let anos = hoje.getFullYear() - y;
  const mesAtual = hoje.getMonth() + 1;
  if (mesAtual < m || (mesAtual === m && hoje.getDate() < d)) anos--;
  if (anos < 1) {
    const meses = (hoje.getFullYear() - y) * 12 + mesAtual - m;
    return `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
  }
  return `${anos} ${anos === 1 ? 'ano' : 'anos'}`;
}

export function tempoEspera(horaChegada: string): string {
  if (!horaChegada) return '';
  const [h, m] = horaChegada.split(':').map(Number);
  const agora = new Date();
  const chegada = new Date();
  chegada.setHours(h, m, 0, 0);
  const diffMs = agora.getTime() - chegada.getTime();
  if (diffMs < 0) return '';
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `há ${mins}min`;
  return `há ${Math.floor(mins / 60)}h${String(mins % 60).padStart(2, '0')}min`;
}

export function horaAtual(): string {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

export function statusLabel(status: string): string {
  const labels: Record<string, string> = {
    agendado: 'Agendado',
    confirmado: 'Confirmado',
    em_atendimento: 'Em Atendimento',
    atendido: 'Atendido',
    presente: 'Presente',
    finalizado: 'Finalizado',
    cancelado: 'Cancelado',
    faltou: 'Faltou',
    pendente: 'Pendente',
    pago: 'Pago',
    parcial: 'Parcial',
    aberta: 'Em Aberto',
    vencida: 'Vencida',
    aberto: 'Aberto',
    fechado: 'Fechado',
  };
  return labels[status] || status;
}

export function statusColor(status: string): string {
  const colors: Record<string, string> = {
    agendado: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    confirmado: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    em_atendimento: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    atendido: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    cancelado: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    presente: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    finalizado: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    faltou: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400',
    pendente: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    aberta: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    vencida: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    pago: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    parcial: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  };
  return colors[status] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
}
