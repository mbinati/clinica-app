// ─── UI Types ───
export type Theme = 'dark' | 'light';
export type PageId = 'dashboard' | 'agenda' | 'pacientes' | 'prontuario' | 'faturamento' | 'profissionais' | 'catalogo' | 'usuarios' | 'atendimentos' | 'pagar_receber' | 'caixa' | 'indicadores';
export type CalendarView = 'day' | 'week' | 'month' | 'list_prof' | 'list_pac' | 'list_hora';

// ─── Paciente ───
export interface Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}

export interface Paciente {
  id: string;
  nome: string;
  cpf: string;
  rg: string;
  dataNascimento: string;
  sexo: 'M' | 'F' | 'outro';
  telefone: string;
  telefone2: string;
  email: string;
  endereco: Endereco;
  convenioId: string | null;
  numeroCarteirinha: string;
  observacoes: string;
  ativo: boolean;
  criadoEm: string;
  atualizadoEm: string;

  // Campos expandidos (opcionais para retrocompatibilidade)
  nomeSocial?: string;
  genero?: string;
  estrangeiro?: boolean;
  orgaoExpedidorRg?: string;
  nacionalidade?: string;
  telefoneResidencial?: string;
  telefoneComercial?: string;
  telefoneRecados?: string;
  fatorSanguineo?: string;
  etnia?: string;
  estadoCivil?: string;
  nomeConjuge?: string;
  nomeMae?: string;
  nomePai?: string;
  responsavel?: string;
  hobby?: string;
  escolaridade?: string;
  profissao?: string;
  responsavelFinanceiro?: string;
  indicacao?: string;
  origemPaciente?: string;
  cns?: string;
}

// ─── Profissional ───
export interface HorarioAtendimento {
  diaSemana: number; // 0=Dom, 1=Seg...6=Sab
  horaInicio: string; // "08:00"
  horaFim: string;
  intervaloMinutos: number; // 15, 20, 30, 60
}

export interface Profissional {
  id: string;
  nome: string;
  especialidade: string;
  registro: string; // CRM, CRO, etc.
  tipoRegistro: string;
  telefone: string;
  email: string;
  cor: string; // hex color for calendar
  horarios: HorarioAtendimento[];
  ativo: boolean;
}

// ─── Agendamento ───
export type StatusAgendamento = 'agendado' | 'confirmado' | 'em_atendimento' | 'atendido' | 'cancelado' | 'faltou';

export interface Agendamento {
  id: string;
  pacienteId: string;
  profissionalId: string;
  data: string; // yyyy-mm-dd
  horaInicio: string; // "14:30"
  horaFim: string;
  status: StatusAgendamento;
  procedimentoId: string | null;
  observacoes: string;
  motivoCancelamento?: string;
  criadoEm: string;
  atualizadoEm: string;
}

// ─── Atendimento ───
export type StatusAtendimento = 'agendado' | 'confirmado' | 'presente' | 'em_atendimento' | 'finalizado' | 'cancelado' | 'faltou';

export interface Atendimento {
  id: string;
  agendamentoId: string | null;
  pacienteId: string;
  profissionalId: string;
  data: string;
  horaChegada: string | null;
  horaInicioAtendimento: string | null;
  horaFimAtendimento: string | null;
  status: StatusAtendimento;
  observacoes: string;
  criadoEm: string;
  atualizadoEm: string;
}

// ─── Seção do Prontuário (modular) ───
export type SecaoProntuarioTipo = 'anamnese' | 'atestado' | 'conduta' | 'exame_fisico' | 'prescricao' | 'plano_tratamento' | 'queixa_principal' | 'solicitacao_exames' | 'laudo';

export interface SecaoProntuario {
  id: string;
  atendimentoId: string;
  pacienteId: string;
  profissionalId: string;
  tipo: SecaoProntuarioTipo;
  titulo: string;
  conteudo: string;
  dados?: Record<string, unknown>;
  criadoEm: string;
  atualizadoEm: string;
}

// ─── Financeiro expandido ───
export type TipoConta = 'pagar' | 'receber';
export type StatusConta = 'aberta' | 'paga' | 'vencida' | 'parcial' | 'cancelada';
export type CategoriaConta = 'atendimento' | 'material' | 'aluguel' | 'salario' | 'outros';

export interface ContaPagarReceber {
  id: string;
  tipo: TipoConta;
  descricao: string;
  categoria: CategoriaConta;
  faturaId: string | null;
  pacienteId: string | null;
  fornecedor: string;
  valor: number;
  valorPago: number;
  dataEmissao: string;
  dataVencimento: string;
  dataCompetencia: string;
  status: StatusConta;
  observacoes: string;
  criadoEm: string;
  atualizadoEm: string;
}

// ─── Caixa ───
export type StatusCaixa = 'aberto' | 'fechado';
export type TipoMovimentoCaixa = 'entrada' | 'saida' | 'sangria' | 'suprimento';

export interface Caixa {
  id: string;
  dataAbertura: string;
  dataFechamento: string | null;
  saldoInicial: number;
  saldoFinal: number | null;
  status: StatusCaixa;
  responsavelId: string;
  observacoes: string;
  criadoEm: string;
}

export interface MovimentoCaixa {
  id: string;
  caixaId: string;
  tipo: TipoMovimentoCaixa;
  valor: number;
  descricao: string;
  contaId: string | null;
  pagamentoId: string | null;
  formaPagamento: MetodoPagamento;
  criadoEm: string;
}

// ─── Prontuario ───
export interface Anamnese {
  id: string;
  pacienteId: string;
  queixaPrincipal: string;
  historiaDoencaAtual: string;
  historiaMedica: string;
  historiaFamiliar: string;
  alergias: string;
  medicamentosEmUso: string;
  habitos: string;
  observacoes: string;
  criadoEm: string;
  atualizadoEm: string;
}

export interface Evolucao {
  id: string;
  pacienteId: string;
  profissionalId: string;
  agendamentoId: string | null;
  data: string;
  subjetivo: string;
  objetivo: string;
  avaliacao: string;
  plano: string;
  cidCodigos: string[];
  cidDescricoes: string[];
  criadoEm: string;
}

export interface PrescricaoItem {
  id: string;
  medicamento: string;
  dosagem: string;
  posologia: string;
  quantidade: string;
  viaAdministracao: string;
}

export interface Prescricao {
  id: string;
  pacienteId: string;
  profissionalId: string;
  evolucaoId: string | null;
  data: string;
  itens: PrescricaoItem[];
  observacoes: string;
  criadoEm: string;
}

export interface ExameItem {
  id: string;
  nome: string;
  tipo: 'laboratorio' | 'imagem' | 'outro';
  observacoes: string;
}

export interface SolicitacaoExame {
  id: string;
  pacienteId: string;
  profissionalId: string;
  evolucaoId: string | null;
  data: string;
  exames: ExameItem[];
  indicacaoClinica: string;
  criadoEm: string;
}

export interface Anexo {
  id: string;
  pacienteId: string;
  evolucaoId: string | null;
  nome: string;
  tipo: string;
  tamanho: number;
  dataBase64: string;
  criadoEm: string;
}

// ─── Faturamento ───
export interface Procedimento {
  id: string;
  codigo: string;
  nome: string;
  categoria: string;
  valorParticular: number;
  ativo: boolean;
}

export interface Convenio {
  id: string;
  nome: string;
  registroANS: string;
  telefone: string;
  ativo: boolean;
}

export type StatusFatura = 'pendente' | 'pago' | 'parcial' | 'cancelado';
export type MetodoPagamento = 'dinheiro' | 'cartao_credito' | 'cartao_debito' | 'pix' | 'convenio' | 'outro';

export interface FaturaItem {
  id: string;
  procedimentoId: string;
  descricao: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
}

export interface Fatura {
  id: string;
  pacienteId: string;
  profissionalId: string;
  agendamentoId: string | null;
  data: string;
  itens: FaturaItem[];
  valorTotal: number;
  desconto: number;
  valorFinal: number;
  status: StatusFatura;
  convenioId: string | null;
  observacoes: string;
  criadoEm: string;
  atualizadoEm: string;
}

export interface Pagamento {
  id: string;
  faturaId: string;
  data: string;
  valor: number;
  metodo: MetodoPagamento;
  observacoes: string;
  criadoEm: string;
}
