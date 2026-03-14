-- ========================================
-- mbai sistemas — Migration v1.0
-- Executar no Supabase SQL Editor:
-- https://supabase.com/dashboard/project/xzcgnbhzqzwcrmsoaytw/sql/new
-- ========================================

-- USUARIOS
CREATE TABLE IF NOT EXISTS usuarios (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  username TEXT NOT NULL,
  "passwordHash" TEXT NOT NULL,
  "nomeCompleto" TEXT NOT NULL,
  perfil TEXT NOT NULL DEFAULT 'recepcao',
  ativo BOOLEAN NOT NULL DEFAULT true,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "atualizadoEm" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "ultimoLogin" TIMESTAMPTZ
);

-- PACIENTES
CREATE TABLE IF NOT EXISTS pacientes (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  nome TEXT NOT NULL,
  "dataNascimento" TEXT,
  cpf TEXT,
  rg TEXT,
  telefone TEXT,
  email TEXT,
  endereco JSONB,
  responsavel JSONB,
  convenio JSONB,
  observacoes TEXT,
  "fotoUrl" TEXT,
  ativo BOOLEAN NOT NULL DEFAULT true,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "atualizadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- PROFISSIONAIS
CREATE TABLE IF NOT EXISTS profissionais (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  nome TEXT NOT NULL,
  especialidade TEXT NOT NULL,
  conselho TEXT,
  "numeroConselho" TEXT,
  cpf TEXT,
  email TEXT,
  telefone TEXT,
  "usuarioId" TEXT,
  cor TEXT DEFAULT '#10b981',
  ativo BOOLEAN NOT NULL DEFAULT true,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "atualizadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- AGENDAMENTOS
CREATE TABLE IF NOT EXISTS agendamentos (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  "pacienteId" TEXT NOT NULL,
  "profissionalId" TEXT NOT NULL,
  data TEXT NOT NULL,
  "horaInicio" TEXT NOT NULL,
  "horaFim" TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'agendado',
  tipo TEXT,
  observacoes TEXT,
  convenio TEXT,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "atualizadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ATENDIMENTOS
CREATE TABLE IF NOT EXISTS atendimentos (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  "pacienteId" TEXT NOT NULL,
  "profissionalId" TEXT NOT NULL,
  "agendamentoId" TEXT,
  data TEXT NOT NULL,
  tipo TEXT NOT NULL DEFAULT 'consulta',
  status TEXT NOT NULL DEFAULT 'aguardando',
  "horaChegada" TEXT,
  "horaInicioAtendimento" TEXT,
  "horaFimAtendimento" TEXT,
  observacoes TEXT,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "atualizadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ANAMNESES
CREATE TABLE IF NOT EXISTS anamneses (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  "pacienteId" TEXT NOT NULL,
  dados JSONB NOT NULL DEFAULT '{}',
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "atualizadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- EVOLUCOES
CREATE TABLE IF NOT EXISTS evolucoes (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  "pacienteId" TEXT NOT NULL,
  "profissionalId" TEXT NOT NULL,
  "atendimentoId" TEXT,
  data TEXT NOT NULL,
  conteudo TEXT NOT NULL,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- PRESCRICOES
CREATE TABLE IF NOT EXISTS prescricoes (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  "pacienteId" TEXT NOT NULL,
  "profissionalId" TEXT NOT NULL,
  data TEXT NOT NULL,
  medicamentos JSONB NOT NULL DEFAULT '[]',
  observacoes TEXT,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- SECOES_PRONTUARIO
CREATE TABLE IF NOT EXISTS secoes_prontuario (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  "pacienteId" TEXT NOT NULL,
  "atendimentoId" TEXT,
  tipo TEXT NOT NULL,
  titulo TEXT NOT NULL,
  dados JSONB NOT NULL DEFAULT '{}',
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "atualizadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- PROCEDIMENTOS (catálogo)
CREATE TABLE IF NOT EXISTS procedimentos (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  nome TEXT NOT NULL,
  descricao TEXT,
  categoria TEXT,
  "codigoTuss" TEXT,
  valor NUMERIC NOT NULL DEFAULT 0,
  duracao INTEGER,
  ativo BOOLEAN NOT NULL DEFAULT true
);

-- CONVENIOS (catálogo)
CREATE TABLE IF NOT EXISTS convenios (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  nome TEXT NOT NULL,
  codigo TEXT,
  tipo TEXT,
  ativo BOOLEAN NOT NULL DEFAULT true
);

-- FATURAS
CREATE TABLE IF NOT EXISTS faturas (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  "pacienteId" TEXT NOT NULL,
  "atendimentoId" TEXT,
  "profissionalId" TEXT,
  data TEXT NOT NULL,
  itens JSONB NOT NULL DEFAULT '[]',
  "valorTotal" NUMERIC NOT NULL DEFAULT 0,
  desconto NUMERIC NOT NULL DEFAULT 0,
  "valorFinal" NUMERIC NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pendente',
  convenio TEXT,
  observacoes TEXT,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "atualizadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- PAGAMENTOS
CREATE TABLE IF NOT EXISTS pagamentos (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  "faturaId" TEXT NOT NULL,
  data TEXT NOT NULL,
  valor NUMERIC NOT NULL,
  metodo TEXT NOT NULL,
  observacoes TEXT,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- CONTAS (pagar/receber)
CREATE TABLE IF NOT EXISTS contas (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  tipo TEXT NOT NULL,
  descricao TEXT NOT NULL,
  valor NUMERIC NOT NULL,
  "dataVencimento" TEXT NOT NULL,
  "dataPagamento" TEXT,
  status TEXT NOT NULL DEFAULT 'pendente',
  categoria TEXT,
  beneficiario TEXT,
  observacoes TEXT,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "atualizadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- CAIXAS
CREATE TABLE IF NOT EXISTS caixas (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  "dataAbertura" TEXT NOT NULL,
  "dataFechamento" TEXT,
  "saldoInicial" NUMERIC NOT NULL DEFAULT 0,
  "saldoFinal" NUMERIC,
  status TEXT NOT NULL DEFAULT 'aberto',
  "responsavelId" TEXT NOT NULL,
  observacoes TEXT,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- MOVIMENTOS DE CAIXA
CREATE TABLE IF NOT EXISTS movimentos_caixa (
  id TEXT PRIMARY KEY,
  "clinicaId" TEXT NOT NULL DEFAULT 'default',
  "caixaId" TEXT NOT NULL,
  tipo TEXT NOT NULL,
  valor NUMERIC NOT NULL,
  descricao TEXT NOT NULL,
  metodo TEXT,
  "referenciaId" TEXT,
  "criadoEm" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ========================================
-- Habilitar Realtime (REPLICA IDENTITY FULL
-- permite receber dados completos nos eventos DELETE)
-- ========================================
ALTER TABLE pacientes REPLICA IDENTITY FULL;
ALTER TABLE agendamentos REPLICA IDENTITY FULL;
ALTER TABLE atendimentos REPLICA IDENTITY FULL;
ALTER TABLE profissionais REPLICA IDENTITY FULL;
ALTER TABLE faturas REPLICA IDENTITY FULL;
ALTER TABLE pagamentos REPLICA IDENTITY FULL;
ALTER TABLE contas REPLICA IDENTITY FULL;
ALTER TABLE caixas REPLICA IDENTITY FULL;
ALTER TABLE movimentos_caixa REPLICA IDENTITY FULL;
ALTER TABLE anamneses REPLICA IDENTITY FULL;
ALTER TABLE evolucoes REPLICA IDENTITY FULL;
ALTER TABLE prescricoes REPLICA IDENTITY FULL;
ALTER TABLE secoes_prontuario REPLICA IDENTITY FULL;
ALTER TABLE usuarios REPLICA IDENTITY FULL;
ALTER TABLE procedimentos REPLICA IDENTITY FULL;
ALTER TABLE convenios REPLICA IDENTITY FULL;
