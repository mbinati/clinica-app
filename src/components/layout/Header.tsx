import { useState, useMemo } from 'react';
import { useAppStore } from '../../stores/useAppStore';
import { useAuthStore } from '../../stores/useAuthStore';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { useProfissionalStore } from '../../stores/useProfissionalStore';
import { Moon, Sun, Search, X } from 'lucide-react';
import type { PageId } from '../../types';

const pageTitles: Record<PageId, string> = {
  dashboard: 'Dashboard',
  agenda: 'Agenda',
  pacientes: 'Pacientes',
  prontuario: 'Prontuário',
  faturamento: 'Faturamento',
  profissionais: 'Profissionais',
  catalogo: 'Catálogo de Serviços',
  usuarios: 'Gerenciamento de Usuários',
  atendimentos: 'Atendimentos do Dia',
  pagar_receber: 'Pagar e Receber',
  caixa: 'Caixa',
  indicadores: 'Indicadores Financeiros',
};

export default function Header() {
  const activePage = useAppStore(s => s.activePage);
  const theme = useAppStore(s => s.theme);
  const toggleTheme = useAppStore(s => s.toggleTheme);
  const setActivePage = useAppStore(s => s.setActivePage);
  const currentSession = useAuthStore(s => s.currentSession);
  const pacientes = usePacienteStore(s => s.pacientes);
  const profissionais = useProfissionalStore(s => s.profissionais);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  // Iniciais do avatar
  const initials = currentSession?.nomeCompleto
    ? currentSession.nomeCompleto.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : '?';

  // Resultados da busca
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    const q = searchQuery.toLowerCase();
    const results: { label: string; sublabel: string; page: PageId }[] = [];

    pacientes.forEach(p => {
      if (p.nome.toLowerCase().includes(q) || (p.cpf && p.cpf.includes(q))) {
        results.push({ label: p.nome, sublabel: 'Paciente', page: 'pacientes' });
      }
    });

    profissionais.forEach(p => {
      if (p.nome.toLowerCase().includes(q) || (p.especialidade && p.especialidade.toLowerCase().includes(q))) {
        results.push({ label: p.nome, sublabel: p.especialidade || 'Profissional', page: 'profissionais' });
      }
    });

    return results.slice(0, 8);
  }, [searchQuery, pacientes, profissionais]);

  const showDropdown = searchFocused && searchQuery.length >= 2 && searchResults.length > 0;

  const handleResultClick = (page: PageId) => {
    setActivePage(page);
    setSearchQuery('');
    setSearchFocused(false);
  };

  return (
    <header className="h-14 border-b border-gray-200 dark:border-border bg-white dark:bg-bg-secondary items-center justify-between px-6 hidden md:flex">
      {/* Esquerda: título + busca */}
      <div className="flex items-center gap-6 flex-1">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-text-primary whitespace-nowrap">
          {pageTitles[activePage]}
        </h1>

        {/* Busca global */}
        <div className="relative max-w-md w-full">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
            placeholder="Buscar paciente, profissional..."
            className="w-full pl-9 pr-8 py-1.5 rounded-lg border border-gray-200 dark:border-border bg-gray-50 dark:bg-bg-card text-sm text-gray-700 dark:text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent focus:bg-white dark:focus:bg-bg-card transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600"
            >
              <X size={14} />
            </button>
          )}

          {/* Dropdown de resultados */}
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-bg-secondary border border-gray-200 dark:border-border rounded-lg shadow-lg z-50 overflow-hidden">
              {searchResults.map((r, i) => (
                <button
                  key={i}
                  onMouseDown={() => handleResultClick(r.page)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-bg-hover text-left transition-colors"
                >
                  <div>
                    <p className="text-sm text-gray-800 dark:text-text-primary">{r.label}</p>
                    <p className="text-xs text-gray-400">{r.sublabel}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Direita: tema + avatar */}
      <div className="flex items-center gap-3 ml-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-bg-hover text-gray-500 dark:text-text-secondary transition-colors"
          title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Avatar */}
        {currentSession && (
          <div className="flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-border">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
              {initials}
            </div>
            <span className="text-sm text-gray-600 dark:text-text-secondary hidden lg:block">
              {currentSession.nomeCompleto}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
