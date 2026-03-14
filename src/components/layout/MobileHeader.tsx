import { useAppStore } from '../../stores/useAppStore';
import { Moon, Sun } from 'lucide-react';
import type { PageId } from '../../types';

const pageTitles: Record<PageId, string> = {
  dashboard: 'Dashboard',
  agenda: 'Agenda',
  pacientes: 'Pacientes',
  prontuario: 'Prontuário',
  faturamento: 'Faturamento',
  profissionais: 'Profissionais',
  catalogo: 'Catálogo',
  usuarios: 'Usuários',
  atendimentos: 'Atendimentos',
  pagar_receber: 'Pagar e Receber',
  caixa: 'Caixa',
  indicadores: 'Indicadores',
};

export default function MobileHeader() {
  const activePage = useAppStore(s => s.activePage);
  const theme = useAppStore(s => s.theme);
  const toggleTheme = useAppStore(s => s.toggleTheme);

  return (
    <header className="md:hidden h-12 border-b border-gray-200 dark:border-border bg-white dark:bg-bg-secondary flex items-center justify-between px-4 pt-safe">
      <div className="flex items-center gap-2">
        <img src="./logo.png" alt="aimê" className="h-8 w-auto object-contain" />
        <h1 className="text-base font-semibold text-gray-800 dark:text-text-primary">
          {pageTitles[activePage]}
        </h1>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-bg-hover text-gray-500 dark:text-text-secondary transition-colors"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </header>
  );
}
