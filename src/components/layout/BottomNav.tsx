import { useAppStore } from '../../stores/useAppStore';
import type { PageId } from '../../types';
import { LayoutDashboard, CalendarDays, Users, UserCheck, DollarSign } from 'lucide-react';

const navItems: { id: PageId; label: string; icon: React.ElementType }[] = [
  { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'agenda', label: 'Agenda', icon: CalendarDays },
  { id: 'atendimentos', label: 'Atendimento', icon: UserCheck },
  { id: 'pacientes', label: 'Pacientes', icon: Users },
  { id: 'faturamento', label: 'Financeiro', icon: DollarSign },
];

export default function BottomNav() {
  const activePage = useAppStore(s => s.activePage);
  const setActivePage = useAppStore(s => s.setActivePage);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-bg-secondary border-t border-gray-200 dark:border-border pb-safe">
      <div className="flex items-center justify-around h-16">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activePage === id;
          return (
            <button
              key={id}
              onClick={() => setActivePage(id)}
              className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 min-w-[56px] transition-colors
                ${isActive
                  ? 'text-accent'
                  : 'text-gray-400 dark:text-text-secondary'}`}
            >
              <Icon size={22} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
