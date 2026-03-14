# PWA + Supabase — Sincronização Multi-dispositivo

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrar todos os stores Zustand (localStorage) para Supabase, habilitar PWA para iPhone e fazer deploy no Vercel.

**Architecture:** O app React existente ganha um cliente Supabase como única fonte de verdade. Cada store troca o middleware `persist` (localStorage) por operações CRUD diretas no Supabase + realtime subscriptions. O Electron continua funcionando normalmente, lendo/escrevendo no mesmo banco. O Vercel hospeda a versão web/PWA.

**Tech Stack:** React 18 + TypeScript + Vite + Supabase JS v2 + vite-plugin-pwa + Vercel CLI

---

## PRÉ-REQUISITO: Obter anon key do Supabase

Antes de iniciar: o usuário deve acessar:
`https://supabase.com/dashboard/project/xzcgnbhzqzwcrmsoaytw/settings/api`

Rolar até "Project API Keys" e copiar o valor de **anon / public**.

---

### Task 1: Instalar dependências e criar .env

**Files:**
- Create: `C:\PROJETOS\clinica\.env`
- Create: `C:\PROJETOS\clinica\.env.example`

**Step 1: Instalar @supabase/supabase-js**

```bash
cd C:\PROJETOS\clinica
npm install @supabase/supabase-js
```

Esperado: instalado sem erros.

**Step 2: Criar arquivo .env**

```
VITE_SUPABASE_URL=https://xzcgnbhzqzwcrmsoaytw.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...  ← colar a chave anon aqui
```

**Step 3: Criar .env.example**

```
VITE_SUPABASE_URL=https://xxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

**Step 4: Garantir que .env está no .gitignore**

Verificar que `.env` existe no `.gitignore`. Se não existir, adicionar a linha `.env`.

---

### Task 2: Criar cliente Supabase

**Files:**
- Create: `src/lib/supabase.ts`

**Step 1: Criar src/lib/supabase.ts**

```typescript
import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(url, key);
export const CLINICA_ID = 'default';
```

`★ Insight`
O `CLINICA_ID = 'default'` permite no futuro suportar múltiplas clínicas apenas trocando esse valor por um ID vindo do login. Toda query filtra por `clinicaId`, isolando os dados.

---

### Task 3: Criar migration SQL no Supabase

**Files:**
- Create: `docs/sql/migration.sql`

**Step 1: Criar o arquivo de migration**

```sql
-- ========================================
-- mbai sistemas — Migration v1.0
-- Executar no Supabase SQL Editor
-- ========================================

-- Desativar RLS por enquanto (app gerencia auth)
-- TODO: habilitar RLS com Supabase Auth em versão futura

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
  "pacienteId" TEXT NOT NULL UNIQUE,
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

-- CATALOGO: PROCEDIMENTOS
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

-- CATALOGO: CONVENIOS
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

-- Habilitar Realtime em todas as tabelas principais
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
```

**Step 2: Executar no Supabase**

1. Ir em: `https://supabase.com/dashboard/project/xzcgnbhzqzwcrmsoaytw/sql/new`
2. Colar o conteúdo do arquivo
3. Clicar em **Run**
4. Verificar: sem erros, todas as tabelas criadas

**Step 3: Habilitar realtime nas tabelas**

No Supabase: Database → Replication → Habilitar todas as tabelas listadas acima.

---

### Task 4: Corrigir vite.config.ts para suportar web + Electron

**Files:**
- Modify: `vite.config.ts`

**Step 1: Alterar `base` para ser condicional**

Trocar:
```typescript
base: './',
```

Por:
```typescript
base: isElectron ? './' : '/',
```

Isso garante que o build para Vercel use caminhos absolutos (necessário para service worker PWA), e o Electron continue com caminhos relativos.

---

### Task 5: Criar ícones PWA (192x192 e 512x512)

**Files:**
- Create: `public/icons/icon-192.png`
- Create: `public/icons/icon-512.png`

**Step 1: Gerar ícones a partir do logo.png**

```bash
cd C:\PROJETOS\clinica
node -e "
const fs = require('fs');
// Verificar se logo.png existe
console.log('logo.png existe:', fs.existsSync('public/logo.png'));
console.log('Arquivos em public/icons:', fs.readdirSync('public/icons').join(', '));
"
```

**Step 2: Se os ícones não existirem, usar sharp para redimensionar**

```bash
npm install --save-dev sharp
node -e "
const sharp = require('sharp');
sharp('public/logo.png').resize(192,192).toFile('public/icons/icon-192.png', (e,i) => console.log(e||i));
sharp('public/logo.png').resize(512,512).toFile('public/icons/icon-512.png', (e,i) => console.log(e||i));
"
```

**Step 3: Verificar**

Confirmar que `public/icons/icon-192.png` e `public/icons/icon-512.png` existem e têm tamanho > 0.

---

### Task 6: Migrar useAuthStore → Supabase

**Files:**
- Modify: `src/stores/useAuthStore.ts`

**Step 1: Reescrever o store**

```typescript
import { create } from 'zustand';
import type { Usuario, SessaoUsuario, PerfilUsuario } from '../types/auth';
import { generateId } from '../utils/generateId';
import { nowISO } from '../utils/formatters';
import { hashPassword, verifyPassword } from '../utils/crypto';
import { supabase, CLINICA_ID } from '../lib/supabase';

const SESSION_KEY = 'clinica-session';
const SESSION_DURATION_MS = 12 * 60 * 60 * 1000;

interface AuthState {
  usuarios: Usuario[];
  currentSession: SessaoUsuario | null;
  get currentUser(): SessaoUsuario | null;
  isSessionExpired: () => boolean;
  login: (username: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
  addUsuario: (data: { username: string; password: string; nomeCompleto: string; perfil: PerfilUsuario }) => Promise<{ ok: boolean; error?: string }>;
  updateUsuario: (id: string, data: Partial<Pick<Usuario, 'nomeCompleto' | 'perfil' | 'ativo'>>) => Promise<void>;
  resetPassword: (id: string, newPassword: string) => Promise<void>;
  loadUsuarios: () => Promise<void>;
  _ensureAdmin: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, get) => {
  // Restaurar sessão do sessionStorage (não localStorage — expira ao fechar aba)
  let savedSession: SessaoUsuario | null = null;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (raw) savedSession = JSON.parse(raw);
  } catch {}

  return {
    usuarios: [],
    currentSession: savedSession,

    get currentUser() { return get().currentSession; },

    isSessionExpired: () => {
      const s = get().currentSession;
      if (!s) return true;
      return new Date(s.expiraEm).getTime() < Date.now();
    },

    loadUsuarios: async () => {
      const { data } = await supabase
        .from('usuarios')
        .select('*')
        .eq('clinicaId', CLINICA_ID);
      set({ usuarios: (data ?? []) as Usuario[] });
    },

    login: async (username, password) => {
      await get()._ensureAdmin();
      await get().loadUsuarios();
      const user = get().usuarios.find(
        u => u.username.toLowerCase() === username.toLowerCase() && u.ativo
      );
      if (!user) return { ok: false, error: 'Usuário ou senha inválidos' };
      const valid = await verifyPassword(password, user.passwordHash);
      if (!valid) return { ok: false, error: 'Usuário ou senha inválidos' };

      const now = nowISO();
      const session: SessaoUsuario = {
        userId: user.id, username: user.username,
        nomeCompleto: user.nomeCompleto, perfil: user.perfil,
        loginEm: now,
        expiraEm: new Date(Date.now() + SESSION_DURATION_MS).toISOString(),
      };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
      set({ currentSession: session });

      await supabase.from('usuarios').update({ ultimoLogin: now }).eq('id', user.id);
      return { ok: true };
    },

    logout: () => {
      sessionStorage.removeItem(SESSION_KEY);
      set({ currentSession: null });
    },

    addUsuario: async ({ username, password, nomeCompleto, perfil }) => {
      const exists = get().usuarios.some(u => u.username.toLowerCase() === username.toLowerCase());
      if (exists) return { ok: false, error: 'Nome de usuário já existe' };
      if (password.length < 4) return { ok: false, error: 'Senha deve ter no mínimo 4 caracteres' };

      const passwordHash = await hashPassword(password);
      const now = nowISO();
      const usuario: Usuario = {
        id: generateId(), username, passwordHash, nomeCompleto, perfil,
        ativo: true, criadoEm: now, atualizadoEm: now, ultimoLogin: null,
      };
      const { error } = await supabase.from('usuarios').insert({ ...usuario, clinicaId: CLINICA_ID });
      if (error) return { ok: false, error: error.message };
      set(s => ({ usuarios: [...s.usuarios, usuario] }));
      return { ok: true };
    },

    updateUsuario: async (id, data) => {
      const now = nowISO();
      await supabase.from('usuarios').update({ ...data, atualizadoEm: now }).eq('id', id);
      set(s => ({ usuarios: s.usuarios.map(u => u.id === id ? { ...u, ...data, atualizadoEm: now } : u) }));
    },

    resetPassword: async (id, newPassword) => {
      const hash = await hashPassword(newPassword);
      const now = nowISO();
      await supabase.from('usuarios').update({ passwordHash: hash, atualizadoEm: now }).eq('id', id);
      set(s => ({ usuarios: s.usuarios.map(u => u.id === id ? { ...u, passwordHash: hash, atualizadoEm: now } : u) }));
    },

    _ensureAdmin: async () => {
      const { count } = await supabase
        .from('usuarios')
        .select('*', { count: 'exact', head: true })
        .eq('clinicaId', CLINICA_ID);

      if (!count || count === 0) {
        const hash = await hashPassword('admin123');
        const now = nowISO();
        await supabase.from('usuarios').insert({
          id: generateId(), clinicaId: CLINICA_ID,
          username: 'admin', passwordHash: hash,
          nomeCompleto: 'Administrador', perfil: 'admin',
          ativo: true, criadoEm: now, atualizadoEm: now,
        });
      }
    },
  };
});
```

`★ Insight`
A sessão agora fica no `sessionStorage` (não localStorage), o que significa que ela expira quando o usuário fecha o navegador — comportamento mais seguro para um sistema de saúde. O Electron continua funcionando pois `sessionStorage` existe em janelas Electron.

---

### Task 7: Criar helper de realtime + padrão base para stores

**Files:**
- Create: `src/lib/realtimeStore.ts`

**Step 1: Criar helper genérico de realtime**

```typescript
import type { RealtimePostgresChangesPayload } from '@supabase/supabase-js';
import { supabase } from './supabase';

type AnyRecord = Record<string, unknown>;

export function subscribeTable<T extends AnyRecord>(
  table: string,
  clinicaId: string,
  handlers: {
    onInsert: (row: T) => void;
    onUpdate: (row: T) => void;
    onDelete: (row: T) => void;
  }
) {
  return supabase
    .channel(`public:${table}`)
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table },
      (payload: RealtimePostgresChangesPayload<T>) => {
        if (payload.new && (payload.new as AnyRecord)['clinicaId'] !== clinicaId) return;
        if (payload.eventType === 'INSERT') handlers.onInsert(payload.new as T);
        if (payload.eventType === 'UPDATE') handlers.onUpdate(payload.new as T);
        if (payload.eventType === 'DELETE') handlers.onDelete(payload.old as T);
      }
    )
    .subscribe();
}
```

---

### Task 8: Migrar usePacienteStore → Supabase

**Files:**
- Modify: `src/stores/usePacienteStore.ts`

**Step 1: Reescrever o store**

```typescript
import { create } from 'zustand';
import type { Paciente } from '../types';
import { generateId } from '../utils/generateId';
import { nowISO } from '../utils/formatters';
import { supabase, CLINICA_ID } from '../lib/supabase';
import { subscribeTable } from '../lib/realtimeStore';

interface PacienteState {
  pacientes: Paciente[];
  init: () => Promise<void>;
  addPaciente: (p: Omit<Paciente, 'id' | 'criadoEm' | 'atualizadoEm' | 'ativo'>) => Promise<string>;
  updatePaciente: (id: string, data: Partial<Paciente>) => Promise<void>;
  removePaciente: (id: string) => Promise<void>;
  getPaciente: (id: string) => Paciente | undefined;
}

export const usePacienteStore = create<PacienteState>()((set, get) => ({
  pacientes: [],

  init: async () => {
    const { data } = await supabase
      .from('pacientes').select('*').eq('clinicaId', CLINICA_ID);
    set({ pacientes: (data ?? []) as Paciente[] });

    subscribeTable<Paciente>('pacientes', CLINICA_ID, {
      onInsert: (row) => set(s => ({ pacientes: [...s.pacientes, row] })),
      onUpdate: (row) => set(s => ({ pacientes: s.pacientes.map(p => p.id === row.id ? row : p) })),
      onDelete: (row) => set(s => ({ pacientes: s.pacientes.filter(p => p.id !== row.id) })),
    });
  },

  addPaciente: async (p) => {
    const id = generateId();
    const now = nowISO();
    const novo = { ...p, id, ativo: true, criadoEm: now, atualizadoEm: now, clinicaId: CLINICA_ID };
    await supabase.from('pacientes').insert(novo);
    // realtime irá atualizar o estado automaticamente
    return id;
  },

  updatePaciente: async (id, data) => {
    const now = nowISO();
    await supabase.from('pacientes').update({ ...data, atualizadoEm: now }).eq('id', id);
  },

  removePaciente: async (id) => {
    await supabase.from('pacientes').update({ ativo: false }).eq('id', id);
  },

  getPaciente: (id) => get().pacientes.find(p => p.id === id),
}));
```

---

### Task 9: Migrar useProfissionalStore → Supabase

**Files:**
- Modify: `src/stores/useProfissionalStore.ts`

**Step 1: Reescrever seguindo o mesmo padrão do usePacienteStore**

Mesma estrutura: `init()` + `subscribeTable` + operações async. Tabela: `profissionais`.

```typescript
import { create } from 'zustand';
import type { Profissional } from '../types';
import { generateId } from '../utils/generateId';
import { nowISO } from '../utils/formatters';
import { supabase, CLINICA_ID } from '../lib/supabase';
import { subscribeTable } from '../lib/realtimeStore';

interface ProfissionalState {
  profissionais: Profissional[];
  init: () => Promise<void>;
  addProfissional: (p: Omit<Profissional, 'id' | 'criadoEm' | 'atualizadoEm' | 'ativo'>) => Promise<string>;
  updateProfissional: (id: string, data: Partial<Profissional>) => Promise<void>;
  removeProfissional: (id: string) => Promise<void>;
  getProfissional: (id: string) => Profissional | undefined;
}

export const useProfissionalStore = create<ProfissionalState>()((set, get) => ({
  profissionais: [],

  init: async () => {
    const { data } = await supabase.from('profissionais').select('*').eq('clinicaId', CLINICA_ID);
    set({ profissionais: (data ?? []) as Profissional[] });
    subscribeTable<Profissional>('profissionais', CLINICA_ID, {
      onInsert: (row) => set(s => ({ profissionais: [...s.profissionais, row] })),
      onUpdate: (row) => set(s => ({ profissionais: s.profissionais.map(p => p.id === row.id ? row : p) })),
      onDelete: (row) => set(s => ({ profissionais: s.profissionais.filter(p => p.id !== row.id) })),
    });
  },

  addProfissional: async (p) => {
    const id = generateId();
    const now = nowISO();
    await supabase.from('profissionais').insert({ ...p, id, ativo: true, criadoEm: now, atualizadoEm: now, clinicaId: CLINICA_ID });
    return id;
  },

  updateProfissional: async (id, data) => {
    await supabase.from('profissionais').update({ ...data, atualizadoEm: nowISO() }).eq('id', id);
  },

  removeProfissional: async (id) => {
    await supabase.from('profissionais').update({ ativo: false }).eq('id', id);
  },

  getProfissional: (id) => get().profissionais.find(p => p.id === id),
}));
```

---

### Task 10: Migrar useCatalogoStore → Supabase

**Files:**
- Modify: `src/stores/useCatalogoStore.ts`
- Read: `src/data/procedimentos.ts` e `src/data/convenios.ts` para obter os defaults

**Step 1: Reescrever**

```typescript
import { create } from 'zustand';
import type { Procedimento, Convenio } from '../types';
import { generateId } from '../utils/generateId';
import { supabase, CLINICA_ID } from '../lib/supabase';
import { subscribeTable } from '../lib/realtimeStore';
import { defaultProcedimentos } from '../data/procedimentos';
import { defaultConvenios } from '../data/convenios';

interface CatalogoState {
  procedimentos: Procedimento[];
  convenios: Convenio[];
  init: () => Promise<void>;
  addProcedimento: (p: Omit<Procedimento, 'id' | 'ativo'>) => Promise<string>;
  updateProcedimento: (id: string, data: Partial<Procedimento>) => Promise<void>;
  removeProcedimento: (id: string) => Promise<void>;
  getProcedimento: (id: string) => Procedimento | undefined;
  addConvenio: (c: Omit<Convenio, 'id' | 'ativo'>) => Promise<string>;
  updateConvenio: (id: string, data: Partial<Convenio>) => Promise<void>;
  removeConvenio: (id: string) => Promise<void>;
  getConvenio: (id: string) => Convenio | undefined;
}

export const useCatalogoStore = create<CatalogoState>()((set, get) => ({
  procedimentos: [],
  convenios: [],

  init: async () => {
    const [{ data: procs }, { data: convs }] = await Promise.all([
      supabase.from('procedimentos').select('*').eq('clinicaId', CLINICA_ID),
      supabase.from('convenios').select('*').eq('clinicaId', CLINICA_ID),
    ]);

    // Seed defaults se tabelas estiverem vazias
    if (!procs?.length) {
      await supabase.from('procedimentos').insert(
        defaultProcedimentos.map(p => ({ ...p, clinicaId: CLINICA_ID }))
      );
    }
    if (!convs?.length) {
      await supabase.from('convenios').insert(
        defaultConvenios.map(c => ({ ...c, clinicaId: CLINICA_ID }))
      );
    }

    const [{ data: p2 }, { data: c2 }] = await Promise.all([
      supabase.from('procedimentos').select('*').eq('clinicaId', CLINICA_ID),
      supabase.from('convenios').select('*').eq('clinicaId', CLINICA_ID),
    ]);
    set({ procedimentos: (p2 ?? []) as Procedimento[], convenios: (c2 ?? []) as Convenio[] });

    subscribeTable<Procedimento>('procedimentos', CLINICA_ID, {
      onInsert: (row) => set(s => ({ procedimentos: [...s.procedimentos, row] })),
      onUpdate: (row) => set(s => ({ procedimentos: s.procedimentos.map(p => p.id === row.id ? row : p) })),
      onDelete: (row) => set(s => ({ procedimentos: s.procedimentos.filter(p => p.id !== row.id) })),
    });
    subscribeTable<Convenio>('convenios', CLINICA_ID, {
      onInsert: (row) => set(s => ({ convenios: [...s.convenios, row] })),
      onUpdate: (row) => set(s => ({ convenios: s.convenios.map(c => c.id === row.id ? row : c) })),
      onDelete: (row) => set(s => ({ convenios: s.convenios.filter(c => c.id !== row.id) })),
    });
  },

  addProcedimento: async (p) => {
    const id = generateId();
    await supabase.from('procedimentos').insert({ ...p, id, ativo: true, clinicaId: CLINICA_ID });
    return id;
  },
  updateProcedimento: async (id, data) => { await supabase.from('procedimentos').update(data).eq('id', id); },
  removeProcedimento: async (id) => { await supabase.from('procedimentos').update({ ativo: false }).eq('id', id); },
  getProcedimento: (id) => get().procedimentos.find(p => p.id === id),

  addConvenio: async (c) => {
    const id = generateId();
    await supabase.from('convenios').insert({ ...c, id, ativo: true, clinicaId: CLINICA_ID });
    return id;
  },
  updateConvenio: async (id, data) => { await supabase.from('convenios').update(data).eq('id', id); },
  removeConvenio: async (id) => { await supabase.from('convenios').update({ ativo: false }).eq('id', id); },
  getConvenio: (id) => get().convenios.find(c => c.id === id),
}));
```

---

### Task 11: Migrar useAgendaStore → Supabase

**Files:**
- Modify: `src/stores/useAgendaStore.ts`

**Step 1: Reescrever**

```typescript
import { create } from 'zustand';
import type { Agendamento } from '../types';
import { generateId } from '../utils/generateId';
import { nowISO } from '../utils/formatters';
import { supabase, CLINICA_ID } from '../lib/supabase';
import { subscribeTable } from '../lib/realtimeStore';

interface AgendaState {
  agendamentos: Agendamento[];
  init: () => Promise<void>;
  addAgendamento: (a: Omit<Agendamento, 'id' | 'criadoEm' | 'atualizadoEm'>) => Promise<string>;
  updateAgendamento: (id: string, data: Partial<Agendamento>) => Promise<void>;
  removeAgendamento: (id: string) => Promise<void>;
  getAgendamento: (id: string) => Agendamento | undefined;
  getAgendamentosByDate: (data: string) => Agendamento[];
  getAgendamentosByPaciente: (pacienteId: string) => Agendamento[];
}

export const useAgendaStore = create<AgendaState>()((set, get) => ({
  agendamentos: [],

  init: async () => {
    const { data } = await supabase.from('agendamentos').select('*').eq('clinicaId', CLINICA_ID);
    set({ agendamentos: (data ?? []) as Agendamento[] });
    subscribeTable<Agendamento>('agendamentos', CLINICA_ID, {
      onInsert: (row) => set(s => ({ agendamentos: [...s.agendamentos, row] })),
      onUpdate: (row) => set(s => ({ agendamentos: s.agendamentos.map(a => a.id === row.id ? row : a) })),
      onDelete: (row) => set(s => ({ agendamentos: s.agendamentos.filter(a => a.id !== row.id) })),
    });
  },

  addAgendamento: async (a) => {
    const id = generateId();
    const now = nowISO();
    await supabase.from('agendamentos').insert({ ...a, id, criadoEm: now, atualizadoEm: now, clinicaId: CLINICA_ID });
    return id;
  },
  updateAgendamento: async (id, data) => {
    await supabase.from('agendamentos').update({ ...data, atualizadoEm: nowISO() }).eq('id', id);
  },
  removeAgendamento: async (id) => {
    await supabase.from('agendamentos').delete().eq('id', id);
  },
  getAgendamento: (id) => get().agendamentos.find(a => a.id === id),
  getAgendamentosByDate: (data) => get().agendamentos.filter(a => a.data === data),
  getAgendamentosByPaciente: (pid) => get().agendamentos.filter(a => a.pacienteId === pid),
}));
```

---

### Task 12: Migrar useAtendimentoStore → Supabase

**Files:**
- Modify: `src/stores/useAtendimentoStore.ts`

**Step 1: Reescrever**

```typescript
import { create } from 'zustand';
import type { Atendimento } from '../types';
import { generateId } from '../utils/generateId';
import { nowISO, horaAtual } from '../utils/formatters';
import { supabase, CLINICA_ID } from '../lib/supabase';
import { subscribeTable } from '../lib/realtimeStore';

interface AtendimentoState {
  atendimentos: Atendimento[];
  init: () => Promise<void>;
  addAtendimento: (a: Omit<Atendimento, 'id' | 'criadoEm' | 'atualizadoEm'>) => Promise<string>;
  updateAtendimento: (id: string, data: Partial<Atendimento>) => Promise<void>;
  getAtendimentosDoDia: (data: string) => Atendimento[];
  getAtendimentoByAgendamento: (agendamentoId: string) => Atendimento | undefined;
  registrarChegada: (id: string) => Promise<void>;
  iniciarAtendimento: (id: string) => Promise<void>;
  finalizarAtendimento: (id: string) => Promise<void>;
}

export const useAtendimentoStore = create<AtendimentoState>()((set, get) => ({
  atendimentos: [],

  init: async () => {
    const { data } = await supabase.from('atendimentos').select('*').eq('clinicaId', CLINICA_ID);
    set({ atendimentos: (data ?? []) as Atendimento[] });
    subscribeTable<Atendimento>('atendimentos', CLINICA_ID, {
      onInsert: (row) => set(s => ({ atendimentos: [...s.atendimentos, row] })),
      onUpdate: (row) => set(s => ({ atendimentos: s.atendimentos.map(a => a.id === row.id ? row : a) })),
      onDelete: (row) => set(s => ({ atendimentos: s.atendimentos.filter(a => a.id !== row.id) })),
    });
  },

  addAtendimento: async (a) => {
    const id = generateId();
    const now = nowISO();
    await supabase.from('atendimentos').insert({ ...a, id, criadoEm: now, atualizadoEm: now, clinicaId: CLINICA_ID });
    return id;
  },
  updateAtendimento: async (id, data) => {
    await supabase.from('atendimentos').update({ ...data, atualizadoEm: nowISO() }).eq('id', id);
  },
  getAtendimentosDoDia: (data) => get().atendimentos.filter(a => a.data === data),
  getAtendimentoByAgendamento: (aid) => get().atendimentos.find(a => a.agendamentoId === aid),
  registrarChegada: async (id) => {
    await get().updateAtendimento(id, { status: 'presente', horaChegada: horaAtual() });
  },
  iniciarAtendimento: async (id) => {
    await get().updateAtendimento(id, { status: 'em_atendimento', horaInicioAtendimento: horaAtual() });
  },
  finalizarAtendimento: async (id) => {
    await get().updateAtendimento(id, { status: 'finalizado', horaFimAtendimento: horaAtual() });
  },
}));
```

---

### Task 13: Migrar useProntuarioStore → Supabase

**Files:**
- Modify: `src/stores/useProntuarioStore.ts`

**Step 1: Reescrever (padrão idêntico — tabelas: anamneses, evolucoes, prescricoes, secoes_prontuario)**

```typescript
import { create } from 'zustand';
import type { Anamnese, Evolucao, Prescricao, SolicitacaoExame, Anexo, SecaoProntuario } from '../types';
import { generateId } from '../utils/generateId';
import { nowISO } from '../utils/formatters';
import { supabase, CLINICA_ID } from '../lib/supabase';
import { subscribeTable } from '../lib/realtimeStore';

interface ProntuarioState {
  anamneses: Anamnese[];
  evolucoes: Evolucao[];
  prescricoes: Prescricao[];
  exames: SolicitacaoExame[];
  secoes: SecaoProntuario[];
  init: () => Promise<void>;
  addAnamnese: (a: Omit<Anamnese, 'id' | 'criadoEm' | 'atualizadoEm'>) => Promise<string>;
  updateAnamnese: (id: string, data: Partial<Anamnese>) => Promise<void>;
  getAnamnese: (pacienteId: string) => Anamnese | undefined;
  addEvolucao: (e: Omit<Evolucao, 'id' | 'criadoEm'>) => Promise<string>;
  updateEvolucao: (id: string, data: Partial<Evolucao>) => Promise<void>;
  removeEvolucao: (id: string) => Promise<void>;
  getEvolucoesByPaciente: (pacienteId: string) => Evolucao[];
  addPrescricao: (p: Omit<Prescricao, 'id' | 'criadoEm'>) => Promise<string>;
  getPrescricoesByPaciente: (pacienteId: string) => Prescricao[];
  addExame: (e: Omit<SolicitacaoExame, 'id' | 'criadoEm'>) => Promise<string>;
  getExamesByPaciente: (pacienteId: string) => SolicitacaoExame[];
  addSecao: (s: Omit<SecaoProntuario, 'id' | 'criadoEm' | 'atualizadoEm'>) => Promise<string>;
  updateSecao: (id: string, data: Partial<SecaoProntuario>) => Promise<void>;
  removeSecao: (id: string) => Promise<void>;
  getSecoesByAtendimento: (atendimentoId: string) => SecaoProntuario[];
  getSecoesByPaciente: (pacienteId: string) => SecaoProntuario[];
}

export const useProntuarioStore = create<ProntuarioState>()((set, get) => ({
  anamneses: [], evolucoes: [], prescricoes: [], exames: [], secoes: [],

  init: async () => {
    const [{ data: a }, { data: e }, { data: p }, { data: s }] = await Promise.all([
      supabase.from('anamneses').select('*').eq('clinicaId', CLINICA_ID),
      supabase.from('evolucoes').select('*').eq('clinicaId', CLINICA_ID),
      supabase.from('prescricoes').select('*').eq('clinicaId', CLINICA_ID),
      supabase.from('secoes_prontuario').select('*').eq('clinicaId', CLINICA_ID),
    ]);
    set({
      anamneses: (a ?? []) as Anamnese[],
      evolucoes: (e ?? []) as Evolucao[],
      prescricoes: (p ?? []) as Prescricao[],
      secoes: (s ?? []) as SecaoProntuario[],
    });

    subscribeTable<Anamnese>('anamneses', CLINICA_ID, {
      onInsert: (row) => set(s => ({ anamneses: [...s.anamneses, row] })),
      onUpdate: (row) => set(s => ({ anamneses: s.anamneses.map(a => a.id === row.id ? row : a) })),
      onDelete: (row) => set(s => ({ anamneses: s.anamneses.filter(a => a.id !== row.id) })),
    });
    subscribeTable<Evolucao>('evolucoes', CLINICA_ID, {
      onInsert: (row) => set(s => ({ evolucoes: [...s.evolucoes, row] })),
      onUpdate: (row) => set(s => ({ evolucoes: s.evolucoes.map(e => e.id === row.id ? row : e) })),
      onDelete: (row) => set(s => ({ evolucoes: s.evolucoes.filter(e => e.id !== row.id) })),
    });
    subscribeTable<Prescricao>('prescricoes', CLINICA_ID, {
      onInsert: (row) => set(s => ({ prescricoes: [...s.prescricoes, row] })),
      onUpdate: (row) => set(s => ({ prescricoes: s.prescricoes.map(p => p.id === row.id ? row : p) })),
      onDelete: (row) => set(s => ({ prescricoes: s.prescricoes.filter(p => p.id !== row.id) })),
    });
    subscribeTable<SecaoProntuario>('secoes_prontuario', CLINICA_ID, {
      onInsert: (row) => set(s => ({ secoes: [...s.secoes, row] })),
      onUpdate: (row) => set(s => ({ secoes: s.secoes.map(sec => sec.id === row.id ? row : sec) })),
      onDelete: (row) => set(s => ({ secoes: s.secoes.filter(sec => sec.id !== row.id) })),
    });
  },

  addAnamnese: async (a) => {
    const id = generateId(); const now = nowISO();
    await supabase.from('anamneses').insert({ ...a, id, criadoEm: now, atualizadoEm: now, clinicaId: CLINICA_ID });
    return id;
  },
  updateAnamnese: async (id, data) => {
    await supabase.from('anamneses').update({ ...data, atualizadoEm: nowISO() }).eq('id', id);
  },
  getAnamnese: (pid) => get().anamneses.find(a => a.pacienteId === pid),

  addEvolucao: async (e) => {
    const id = generateId();
    await supabase.from('evolucoes').insert({ ...e, id, criadoEm: nowISO(), clinicaId: CLINICA_ID });
    return id;
  },
  updateEvolucao: async (id, data) => { await supabase.from('evolucoes').update(data).eq('id', id); },
  removeEvolucao: async (id) => { await supabase.from('evolucoes').delete().eq('id', id); },
  getEvolucoesByPaciente: (pid) => get().evolucoes.filter(e => e.pacienteId === pid).sort((a,b) => b.data.localeCompare(a.data)),

  addPrescricao: async (p) => {
    const id = generateId();
    await supabase.from('prescricoes').insert({ ...p, id, criadoEm: nowISO(), clinicaId: CLINICA_ID });
    return id;
  },
  getPrescricoesByPaciente: (pid) => get().prescricoes.filter(p => p.pacienteId === pid),

  addExame: async (e) => {
    const id = generateId();
    // exames não têm tabela dedicada — armazenar inline ou criar tabela futuramente
    set(s => ({ exames: [...s.exames, { ...e, id, criadoEm: nowISO() } as SolicitacaoExame] }));
    return id;
  },
  getExamesByPaciente: (pid) => get().exames.filter(e => e.pacienteId === pid),

  addSecao: async (sec) => {
    const id = generateId(); const now = nowISO();
    await supabase.from('secoes_prontuario').insert({ ...sec, id, criadoEm: now, atualizadoEm: now, clinicaId: CLINICA_ID });
    return id;
  },
  updateSecao: async (id, data) => {
    await supabase.from('secoes_prontuario').update({ ...data, atualizadoEm: nowISO() }).eq('id', id);
  },
  removeSecao: async (id) => { await supabase.from('secoes_prontuario').delete().eq('id', id); },
  getSecoesByAtendimento: (aid) => get().secoes.filter(s => s.atendimentoId === aid).sort((a,b) => a.criadoEm.localeCompare(b.criadoEm)),
  getSecoesByPaciente: (pid) => get().secoes.filter(s => s.pacienteId === pid).sort((a,b) => b.criadoEm.localeCompare(a.criadoEm)),
}));
```

---

### Task 14: Migrar useFaturamentoStore → Supabase

**Files:**
- Modify: `src/stores/useFaturamentoStore.ts`

```typescript
import { create } from 'zustand';
import type { Fatura, Pagamento } from '../types';
import { generateId } from '../utils/generateId';
import { nowISO } from '../utils/formatters';
import { supabase, CLINICA_ID } from '../lib/supabase';
import { subscribeTable } from '../lib/realtimeStore';

interface FaturamentoState {
  faturas: Fatura[];
  pagamentos: Pagamento[];
  init: () => Promise<void>;
  addFatura: (f: Omit<Fatura, 'id' | 'criadoEm' | 'atualizadoEm'>) => Promise<string>;
  updateFatura: (id: string, data: Partial<Fatura>) => Promise<void>;
  removeFatura: (id: string) => Promise<void>;
  getFatura: (id: string) => Fatura | undefined;
  getFaturasByPaciente: (pacienteId: string) => Fatura[];
  addPagamento: (p: Omit<Pagamento, 'id' | 'criadoEm'>) => Promise<string>;
  getPagamentosByFatura: (faturaId: string) => Pagamento[];
}

export const useFaturamentoStore = create<FaturamentoState>()((set, get) => ({
  faturas: [], pagamentos: [],

  init: async () => {
    const [{ data: f }, { data: p }] = await Promise.all([
      supabase.from('faturas').select('*').eq('clinicaId', CLINICA_ID),
      supabase.from('pagamentos').select('*').eq('clinicaId', CLINICA_ID),
    ]);
    set({ faturas: (f ?? []) as Fatura[], pagamentos: (p ?? []) as Pagamento[] });

    subscribeTable<Fatura>('faturas', CLINICA_ID, {
      onInsert: (row) => set(s => ({ faturas: [...s.faturas, row] })),
      onUpdate: (row) => set(s => ({ faturas: s.faturas.map(f => f.id === row.id ? row : f) })),
      onDelete: (row) => set(s => ({ faturas: s.faturas.filter(f => f.id !== row.id) })),
    });
    subscribeTable<Pagamento>('pagamentos', CLINICA_ID, {
      onInsert: (row) => set(s => ({ pagamentos: [...s.pagamentos, row] })),
      onUpdate: (row) => set(s => ({ pagamentos: s.pagamentos.map(p => p.id === row.id ? row : p) })),
      onDelete: (row) => set(s => ({ pagamentos: s.pagamentos.filter(p => p.id !== row.id) })),
    });
  },

  addFatura: async (f) => {
    const id = generateId(); const now = nowISO();
    await supabase.from('faturas').insert({ ...f, id, criadoEm: now, atualizadoEm: now, clinicaId: CLINICA_ID });
    return id;
  },
  updateFatura: async (id, data) => {
    await supabase.from('faturas').update({ ...data, atualizadoEm: nowISO() }).eq('id', id);
  },
  removeFatura: async (id) => {
    await supabase.from('faturas').update({ status: 'cancelado' }).eq('id', id);
  },
  getFatura: (id) => get().faturas.find(f => f.id === id),
  getFaturasByPaciente: (pid) => get().faturas.filter(f => f.pacienteId === pid).sort((a,b) => b.data.localeCompare(a.data)),

  addPagamento: async (p) => {
    const id = generateId();
    await supabase.from('pagamentos').insert({ ...p, id, criadoEm: nowISO(), clinicaId: CLINICA_ID });

    // Atualizar status da fatura
    const fatura = get().faturas.find(f => f.id === p.faturaId);
    if (fatura) {
      const totalPago = get().pagamentos.filter(pg => pg.faturaId === p.faturaId)
        .reduce((sum, pg) => sum + pg.valor, 0) + p.valor;
      const newStatus = totalPago >= fatura.valorFinal ? 'pago' : 'parcial';
      await get().updateFatura(p.faturaId, { status: newStatus });
    }
    return id;
  },
  getPagamentosByFatura: (fid) => get().pagamentos.filter(p => p.faturaId === fid),
}));
```

---

### Task 15: Migrar useFinanceiroStore → Supabase

**Files:**
- Modify: `src/stores/useFinanceiroStore.ts`

```typescript
import { create } from 'zustand';
import type { ContaPagarReceber, Caixa, MovimentoCaixa } from '../types';
import { nowISO } from '../utils/formatters';
import { todayISO } from '../utils/formatters';
import { supabase, CLINICA_ID } from '../lib/supabase';
import { subscribeTable } from '../lib/realtimeStore';

interface FinanceiroState {
  contas: ContaPagarReceber[];
  caixas: Caixa[];
  movimentos: MovimentoCaixa[];
  init: () => Promise<void>;
  addConta: (conta: Omit<ContaPagarReceber, 'id' | 'criadoEm' | 'atualizadoEm'>) => Promise<void>;
  updateConta: (id: string, dados: Partial<ContaPagarReceber>) => Promise<void>;
  removeConta: (id: string) => Promise<void>;
  abrirCaixa: (saldoInicial: number, responsavelId: string) => Promise<void>;
  fecharCaixa: (caixaId: string, saldoFinal: number) => Promise<void>;
  addMovimento: (mov: Omit<MovimentoCaixa, 'id' | 'criadoEm'>) => Promise<void>;
}

export const useFinanceiroStore = create<FinanceiroState>()((set) => ({
  contas: [], caixas: [], movimentos: [],

  init: async () => {
    const [{ data: c }, { data: cx }, { data: m }] = await Promise.all([
      supabase.from('contas').select('*').eq('clinicaId', CLINICA_ID),
      supabase.from('caixas').select('*').eq('clinicaId', CLINICA_ID),
      supabase.from('movimentos_caixa').select('*').eq('clinicaId', CLINICA_ID),
    ]);
    set({ contas: (c ?? []) as ContaPagarReceber[], caixas: (cx ?? []) as Caixa[], movimentos: (m ?? []) as MovimentoCaixa[] });

    subscribeTable<ContaPagarReceber>('contas', CLINICA_ID, {
      onInsert: (row) => set(s => ({ contas: [...s.contas, row] })),
      onUpdate: (row) => set(s => ({ contas: s.contas.map(c => c.id === row.id ? row : c) })),
      onDelete: (row) => set(s => ({ contas: s.contas.filter(c => c.id !== row.id) })),
    });
    subscribeTable<Caixa>('caixas', CLINICA_ID, {
      onInsert: (row) => set(s => ({ caixas: [...s.caixas, row] })),
      onUpdate: (row) => set(s => ({ caixas: s.caixas.map(c => c.id === row.id ? row : c) })),
      onDelete: (row) => set(s => ({ caixas: s.caixas.filter(c => c.id !== row.id) })),
    });
    subscribeTable<MovimentoCaixa>('movimentos_caixa', CLINICA_ID, {
      onInsert: (row) => set(s => ({ movimentos: [...s.movimentos, row] })),
      onUpdate: (row) => set(s => ({ movimentos: s.movimentos.map(m => m.id === row.id ? row : m) })),
      onDelete: (row) => set(s => ({ movimentos: s.movimentos.filter(m => m.id !== row.id) })),
    });
  },

  addConta: async (conta) => {
    await supabase.from('contas').insert({
      ...conta, id: crypto.randomUUID(),
      criadoEm: nowISO(), atualizadoEm: nowISO(), clinicaId: CLINICA_ID,
    });
  },
  updateConta: async (id, dados) => {
    await supabase.from('contas').update({ ...dados, atualizadoEm: nowISO() }).eq('id', id);
  },
  removeConta: async (id) => {
    await supabase.from('contas').delete().eq('id', id);
  },

  abrirCaixa: async (saldoInicial, responsavelId) => {
    await supabase.from('caixas').insert({
      id: crypto.randomUUID(), clinicaId: CLINICA_ID,
      dataAbertura: todayISO(), saldoInicial, status: 'aberto',
      responsavelId, observacoes: '', criadoEm: nowISO(),
    });
  },
  fecharCaixa: async (caixaId, saldoFinal) => {
    await supabase.from('caixas').update({ status: 'fechado', saldoFinal, dataFechamento: todayISO() }).eq('id', caixaId);
  },

  addMovimento: async (mov) => {
    await supabase.from('movimentos_caixa').insert({
      ...mov, id: crypto.randomUUID(), criadoEm: nowISO(), clinicaId: CLINICA_ID,
    });
  },
}));
```

---

### Task 16: Criar hook useInitStores + loading screen

**Files:**
- Create: `src/hooks/useInitStores.ts`
- Modify: `src/App.tsx`

**Step 1: Criar o hook**

```typescript
// src/hooks/useInitStores.ts
import { useState, useEffect } from 'react';
import { usePacienteStore } from '../stores/usePacienteStore';
import { useProfissionalStore } from '../stores/useProfissionalStore';
import { useCatalogoStore } from '../stores/useCatalogoStore';
import { useAgendaStore } from '../stores/useAgendaStore';
import { useAtendimentoStore } from '../stores/useAtendimentoStore';
import { useProntuarioStore } from '../stores/useProntuarioStore';
import { useFaturamentoStore } from '../stores/useFaturamentoStore';
import { useFinanceiroStore } from '../stores/useFinanceiroStore';

export function useInitStores() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      usePacienteStore.getState().init(),
      useProfissionalStore.getState().init(),
      useCatalogoStore.getState().init(),
      useAgendaStore.getState().init(),
      useAtendimentoStore.getState().init(),
      useProntuarioStore.getState().init(),
      useFaturamentoStore.getState().init(),
      useFinanceiroStore.getState().init(),
    ])
      .then(() => setReady(true))
      .catch((e) => setError(e.message ?? 'Erro ao conectar ao servidor'));
  }, []);

  return { ready, error };
}
```

**Step 2: Atualizar App.tsx para usar o hook**

Localizar onde o app renderiza o AppShell após login bem-sucedido e adicionar:

```typescript
// No App.tsx, após verificar que currentSession é válida:
const { ready, error } = useInitStores();

if (!ready) return (
  <div className="flex items-center justify-center h-screen bg-background">
    <div className="text-center space-y-3">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
      <p className="text-sm text-muted-foreground">Carregando dados...</p>
    </div>
  </div>
);

if (error) return (
  <div className="flex items-center justify-center h-screen bg-background">
    <div className="text-center space-y-3 max-w-sm p-6">
      <p className="text-destructive font-medium">Erro de conexão</p>
      <p className="text-sm text-muted-foreground">{error}</p>
      <button onClick={() => window.location.reload()} className="text-sm text-accent underline">
        Tentar novamente
      </button>
    </div>
  </div>
);
```

---

### Task 17: Deploy no Vercel

**Step 1: Instalar Vercel CLI**

```bash
npm install -g vercel
```

**Step 2: Build do projeto**

```bash
cd C:\PROJETOS\clinica
npm run build
```

Verificar: pasta `dist/` gerada sem erros.

**Step 3: Deploy**

```bash
vercel --prod
```

Seguir o wizard:
- Set up and deploy? `Y`
- Which scope? Escolher conta pessoal
- Link to existing project? `N`
- Project name: `clinica-mbai`
- Directory: `./`
- Override settings? `N`

**Step 4: Configurar variáveis de ambiente no Vercel**

```bash
vercel env add VITE_SUPABASE_URL production
# colar: https://xzcgnbhzqzwcrmsoaytw.supabase.co

vercel env add VITE_SUPABASE_ANON_KEY production
# colar: eyJ... (a chave anon)
```

**Step 5: Re-deploy com as variáveis**

```bash
vercel --prod
```

**Step 6: Verificar URL**

Acessar a URL gerada (ex: `clinica-mbai.vercel.app`) no navegador. O login deve funcionar.

---

### Task 18: Testar PWA no iPhone

**Step 1: Abrir no iPhone**

No iPhone, abrir o Safari e acessar a URL do Vercel.

**Step 2: Instalar como app**

Safari → ícone de Compartilhar (□↑) → "Adicionar à Tela de Início" → "Adicionar"

**Step 3: Verificar**

O ícone do app deve aparecer na tela inicial. Ao abrir, deve estar em tela cheia sem barra do Safari.

**Step 4: Testar sync**

1. No iPhone: fazer login e cadastrar um paciente de teste
2. No PC (Electron ou Chrome): verificar se o paciente aparece em < 2 segundos
3. No PC: atualizar o paciente
4. No iPhone: verificar se a atualização aparece

---

### Task 19: Remover licença na versão web

**Files:**
- Modify: `src/stores/useLicenseStore.ts`

O store atual já detecta `window.electronAPI` e pula a verificação quando não está no Electron. Verificar que isso continua funcionando:

```typescript
// No useLicenseStore.ts, confirmar que o check é:
if (!window.electronAPI) {
  set({ checked: true, licensed: true });
  return;
}
```

Se estiver correto, nenhuma mudança necessária.

---

## Resumo das tarefas

| # | Tarefa | Arquivos afetados |
|---|--------|-------------------|
| 1 | Instalar @supabase/supabase-js + .env | package.json, .env |
| 2 | Criar cliente Supabase | src/lib/supabase.ts |
| 3 | Executar SQL migration | Supabase SQL Editor |
| 4 | Corrigir base no vite.config.ts | vite.config.ts |
| 5 | Criar ícones PWA 192/512 | public/icons/ |
| 6 | Migrar useAuthStore | src/stores/useAuthStore.ts |
| 7 | Criar helper subscribeTable | src/lib/realtimeStore.ts |
| 8 | Migrar usePacienteStore | src/stores/usePacienteStore.ts |
| 9 | Migrar useProfissionalStore | src/stores/useProfissionalStore.ts |
| 10 | Migrar useCatalogoStore | src/stores/useCatalogoStore.ts |
| 11 | Migrar useAgendaStore | src/stores/useAgendaStore.ts |
| 12 | Migrar useAtendimentoStore | src/stores/useAtendimentoStore.ts |
| 13 | Migrar useProntuarioStore | src/stores/useProntuarioStore.ts |
| 14 | Migrar useFaturamentoStore | src/stores/useFaturamentoStore.ts |
| 15 | Migrar useFinanceiroStore | src/stores/useFinanceiroStore.ts |
| 16 | Hook useInitStores + loading screen | src/hooks/, src/App.tsx |
| 17 | Deploy no Vercel | — |
| 18 | Testar PWA no iPhone | — |
| 19 | Verificar licença web | src/stores/useLicenseStore.ts |
