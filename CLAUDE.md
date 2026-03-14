# Regras do Projeto - aimê Clínica

## Stack
- React 18 + TypeScript + Vite 5 + TailwindCSS + Zustand (persist)
- Charts: Recharts | Icons: Lucide React | Auth: bcryptjs
- PWA + Electron (desktop)

## Dev Server
- Porta: 5175
- Usa `dev-server.mjs` (wrapper que faz chdir antes de iniciar Vite)
- `preview_start` com name "dev" no `.claude/launch.json`

## NUNCA usar Preview Screenshot
Este ambiente Windows com nvm4w tem bug de PATH. Ver regras em `C:\PROJETOS\CLAUDE.md`.

## Estrutura de Stores (Zustand + persist)
- `useAppStore` — navegação, tema (key: clinica-app)
- `useAuthStore` — autenticação, sessões (key: clinica-auth)
- `usePacienteStore` — pacientes CRUD (key: clinica-pacientes)
- `useProfissionalStore` — profissionais (key: clinica-profissionais)
- `useAgendaStore` — agendamentos (key: clinica-agenda)
- `useProntuarioStore` — prontuário + seções modulares (key: clinica-prontuario)
- `useFaturamentoStore` — faturamento (key: clinica-faturamento)
- `useAtendimentoStore` — atendimentos do dia (key: clinica-atendimentos)
- `useFinanceiroStore` — contas + caixa + movimentos (key: clinica-financeiro)

## Padroes
- Login: admin / admin123
- Accent color: #10b981 (emerald)
- Dark mode via Tailwind class-based toggle
- Lazy loading de pages via React.lazy no AppShell
- PageId type define todas as rotas internas
