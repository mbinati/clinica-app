import Sidebar from './Sidebar';
import Header from './Header';
import BottomNav from './BottomNav';
import MobileHeader from './MobileHeader';
import { useAppStore } from '../../stores/useAppStore';
import { lazy, Suspense } from 'react';
import type { PageId } from '../../types';
const DashboardPage = lazy(() => import('../dashboard/DashboardPage'));
const AgendaPage = lazy(() => import('../agenda/AgendaPage'));
const PacientesPage = lazy(() => import('../pacientes/PacientesPage'));
const ProntuarioPage = lazy(() => import('../prontuario/ProntuarioPage'));
const FaturamentoPage = lazy(() => import('../faturamento/FaturamentoPage'));
const ProfissionaisPage = lazy(() => import('../profissionais/ProfissionaisPage'));
const CatalogoPage = lazy(() => import('../faturamento/CatalogoPage'));
const UsuariosPage = lazy(() => import('../auth/UsuariosPage'));
const AtendimentosPage = lazy(() => import('../atendimento/AtendimentosPage'));
const PagarReceberPage = lazy(() => import('../financeiro/PagarReceberPage'));
const CaixaPage = lazy(() => import('../financeiro/CaixaPage'));
const IndicadoresPage = lazy(() => import('../financeiro/IndicadoresPage'));

const pages: Record<PageId, React.LazyExoticComponent<() => JSX.Element>> = {
  dashboard: DashboardPage,
  agenda: AgendaPage,
  pacientes: PacientesPage,
  prontuario: ProntuarioPage,
  faturamento: FaturamentoPage,
  profissionais: ProfissionaisPage,
  catalogo: CatalogoPage,
  usuarios: UsuariosPage,
  atendimentos: AtendimentosPage,
  pagar_receber: PagarReceberPage,
  caixa: CaixaPage,
  indicadores: IndicadoresPage,
};

function LoadingFallback() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function AppShell() {
  const activePage = useAppStore(s => s.activePage);
  const PageComponent = pages[activePage];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-bg-primary text-gray-900 dark:text-text-primary">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <MobileHeader />
        <main className="flex-1 overflow-auto p-4 md:p-6 pb-20 md:pb-6 relative">
          {/* Logo marca d'água de fundo */}
          <img
            src="./logo.png"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none select-none fixed inset-0 w-full h-full object-cover opacity-[0.12] dark:opacity-[0.15]"
            style={{ zIndex: 0 }}
          />
          <Suspense fallback={<LoadingFallback />}>
            <div className="relative" style={{ zIndex: 1 }}>
              <PageComponent />
            </div>
          </Suspense>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
