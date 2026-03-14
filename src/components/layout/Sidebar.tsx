import { useAppStore } from '../../stores/useAppStore';
import { useAuthStore } from '../../stores/useAuthStore';
import type { PageId } from '../../types';
import {
  LayoutDashboard, CalendarDays, Users, ClipboardList, DollarSign, Stethoscope, Package,
  PanelLeftClose, PanelLeftOpen, Shield, LogOut, UserCheck, Wallet, Landmark, BarChart3,
} from 'lucide-react';

type NavSection = {
  label: string;
  items: { id: PageId; label: string; icon: React.ElementType }[];
};

const navSections: NavSection[] = [
  {
    label: 'Clínica',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'agenda', label: 'Agenda', icon: CalendarDays },
      { id: 'atendimentos', label: 'Atendimentos', icon: UserCheck },
      { id: 'pacientes', label: 'Pacientes', icon: Users },
      { id: 'prontuario', label: 'Prontuário', icon: ClipboardList },
    ],
  },
  {
    label: 'Financeiro',
    items: [
      { id: 'faturamento', label: 'Faturamento', icon: DollarSign },
      { id: 'pagar_receber', label: 'Pagar e Receber', icon: Wallet },
      { id: 'caixa', label: 'Caixa', icon: Landmark },
      { id: 'indicadores', label: 'Indicadores', icon: BarChart3 },
      { id: 'catalogo', label: 'Catálogo', icon: Package },
    ],
  },
  {
    label: 'Gestão',
    items: [
      { id: 'profissionais', label: 'Profissionais', icon: Stethoscope },
    ],
  },
];

export default function Sidebar() {
  const activePage = useAppStore(s => s.activePage);
  const collapsed = useAppStore(s => s.sidebarCollapsed);
  const setActivePage = useAppStore(s => s.setActivePage);
  const toggleSidebar = useAppStore(s => s.toggleSidebar);
  const currentSession = useAuthStore(s => s.currentSession);
  const logout = useAuthStore(s => s.logout);

  const isAdmin = currentSession?.perfil === 'admin';

  // Iniciais do usuário para o avatar
  const initials = currentSession?.nomeCompleto
    ? currentSession.nomeCompleto.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
    : '?';

  const renderNavButton = (id: PageId, label: string, Icon: React.ElementType) => {
    const isActive = activePage === id;
    return (
      <button
        key={id}
        onClick={() => setActivePage(id)}
        title={collapsed ? label : undefined}
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-r-lg text-sm transition-all
          ${isActive
            ? 'border-l-[3px] border-accent bg-accent/10 text-accent font-medium'
            : 'border-l-[3px] border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-bg-hover hover:text-gray-900 dark:hover:text-white'}`}
      >
        <Icon size={18} className="shrink-0" />
        {!collapsed && <span className="truncate">{label}</span>}
      </button>
    );
  };

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-56'} transition-all duration-200 flex-col
      bg-white dark:bg-bg-secondary border-r border-gray-200 dark:border-border h-full hidden md:flex`}>

      {/* Logo + Toggle */}
      <div className={`flex items-center gap-2 px-3 ${collapsed ? 'h-14' : 'h-16'} border-b border-gray-200 dark:border-border transition-all duration-200`}>
        {collapsed ? (
          <img src="./logo.png" alt="aimê" className="w-8 h-8 rounded-lg object-cover shrink-0" />
        ) : (
          <img src="./logo.png" alt="aimê" className="h-10 w-auto object-contain shrink-0" />
        )}
        {!collapsed && <div className="flex-1" />}
        <button
          onClick={toggleSidebar}
          title={collapsed ? 'Expandir menu' : 'Ocultar menu'}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-bg-hover transition-colors shrink-0"
        >
          {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </button>
      </div>

      {/* Nav agrupada */}
      <nav className="flex-1 py-3 overflow-y-auto">
        {navSections.map((section, idx) => (
          <div key={section.label}>
            {idx > 0 && <div className="border-t border-gray-100 dark:border-border/50 my-2 mx-3" />}
            {!collapsed && (
              <p className="px-4 pt-2 pb-1 text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                {section.label}
              </p>
            )}
            <div className="space-y-0.5 px-1">
              {section.items.map(({ id, label, icon: Icon }) => renderNavButton(id, label, Icon))}
            </div>
          </div>
        ))}

        {/* Admin section */}
        {isAdmin && (
          <div>
            <div className="border-t border-gray-100 dark:border-border/50 my-2 mx-3" />
            {!collapsed && (
              <p className="px-4 pt-2 pb-1 text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Admin
              </p>
            )}
            <div className="space-y-0.5 px-1">
              {renderNavButton('usuarios', 'Usuários', Shield)}
            </div>
          </div>
        )}
      </nav>

      {/* Footer - User + Logout */}
      <div className="px-3 py-3 border-t border-gray-200 dark:border-border">
        {!collapsed && currentSession ? (
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold shrink-0">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-gray-700 dark:text-text-primary font-medium truncate">{currentSession.nomeCompleto}</p>
              <p className="text-[10px] text-gray-400 dark:text-text-secondary truncate">{currentSession.username}</p>
            </div>
          </div>
        ) : collapsed && currentSession ? (
          <div className="flex justify-center mb-2">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold" title={currentSession.nomeCompleto}>
              {initials}
            </div>
          </div>
        ) : null}
        <button
          onClick={logout}
          title="Sair"
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 dark:hover:text-red-400 transition-colors ${collapsed ? 'justify-center' : ''}`}
        >
          <LogOut size={18} className="shrink-0" />
          {!collapsed && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
}
