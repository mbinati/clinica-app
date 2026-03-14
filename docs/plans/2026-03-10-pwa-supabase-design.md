# Design: PWA + Supabase — Multi-dispositivo (iPhone, PC, Web)

**Data:** 10/03/2026
**Status:** Aprovado

## Objetivo

Permitir que o sistema mbai clínica funcione em iPhone (como PWA instalável), sincronize dados em tempo real entre todos os dispositivos (PCs Windows e iPhones), mantendo o app Electron existente funcionando.

## Abordagem Escolhida

**Abordagem 1 — PWA + Supabase (mesma base de código)**

Mesma base React/TypeScript. O Supabase substitui o localStorage como banco de dados. O Vercel hospeda a versão web. O Electron continua gerando o .exe para Windows.

## Arquitetura

```
┌─────────────────────────────────────────────┐
│              BASE DE CÓDIGO ÚNICA            │
│         React + TypeScript + Vite            │
└──────────┬──────────────────┬───────────────┘
           │                  │
    ┌──────▼──────┐    ┌──────▼──────┐
    │  Electron   │    │   Vercel    │
    │  (Windows)  │    │   (Web)     │
    │  .exe local │    │  PWA/iPhone │
    └──────┬──────┘    └──────┬──────┘
           │                  │
           └────────┬─────────┘
                    │
             ┌──────▼──────┐
             │  Supabase   │
             │  (Postgres) │
             │  Real-time  │
             └─────────────┘
```

## Banco de Dados (Supabase)

| Tabela               | Store Zustand         |
|----------------------|-----------------------|
| usuarios             | useAuthStore          |
| pacientes            | usePacienteStore      |
| profissionais        | useProfissionalStore  |
| agendamentos         | useAgendaStore        |
| atendimentos         | useAtendimentoStore   |
| prontuarios          | useProntuarioStore    |
| secoes_prontuario    | useProntuarioStore    |
| evolucoes            | useProntuarioStore    |
| anamneses            | useProntuarioStore    |
| prescricoes          | useProntuarioStore    |
| faturas              | useFaturamentoStore   |
| catalogo_servicos    | useCatalogoStore      |
| contas               | useFinanceiroStore    |
| caixas               | useFinanceiroStore    |
| movimentos_caixa     | useFinanceiroStore    |

Todas as tabelas têm `clinica_id` para RLS (Row Level Security), permitindo múltiplas clínicas no futuro sem misturar dados.

## PWA no iPhone

- `vite-plugin-pwa` já instalado
- Configurar manifesto: nome "mbai sistemas", ícones, cor de tema
- iPhone: Safari → Compartilhar → Adicionar à Tela de Início
- Abre em tela cheia sem barra do browser

## Deploy (Vercel)

- Conta gratuita em vercel.com
- Variáveis de ambiente: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- URL: `clinica-mbai.vercel.app` (ou domínio próprio futuramente)

## Autenticação

- Mantém login atual (bcrypt) — usuários armazenados no Supabase
- Versão web: sem verificação de licença (login já protege)
- Versão Electron: licença por máquina continua como hoje
- Detecção automática via `window.electronAPI`

## Sincronização em Tempo Real

- Supabase Realtime notifica todos os clientes ao salvar qualquer registro
- Stores Zustand atualizam o estado React automaticamente
- Latência típica: < 1 segundo entre dispositivos
