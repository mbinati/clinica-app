// Utilitários compartilhados pelos templates PDF

/**
 * Gera código de autenticidade no formato XXXX-XXXX-XXXX
 * usando hash simples dos campos identificadores do documento.
 * Não depende de servidor — é gerado no frontend.
 */
export function gerarCodigoAutenticidade(
  id: string,
  data: string,
  pacienteId: string
): string {
  const raw = `${id}|${data}|${pacienteId}`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    const char = raw.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // converte para 32bit int
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0').toUpperCase();
  return `${hex.slice(0, 4)}-${hex.slice(4, 8)}-${hex.slice(0, 4)}`;
}

/** Formata data ISO ou string DD/MM/AAAA para exibição */
export function formatarData(data: string): string {
  if (!data) return '—';
  if (data.includes('/')) return data;
  const [ano, mes, dia] = data.split('T')[0].split('-');
  return `${dia}/${mes}/${ano}`;
}

/** Formata data e hora atuais para o rodapé */
export function formatarDataHoraAgora(): string {
  const now = new Date();
  return now.toLocaleString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}
