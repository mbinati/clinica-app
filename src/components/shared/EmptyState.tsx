import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  icon?: React.ElementType;
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
}

export default function EmptyState({ icon: Icon = Inbox, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
      <Icon size={48} className="text-gray-300 dark:text-gray-600 mb-4" />
      <h3 className="text-lg font-medium text-gray-600 dark:text-text-secondary mb-1">{title}</h3>
      {description && <p className="text-sm text-gray-400 dark:text-gray-500 mb-4 max-w-sm">{description}</p>}
      {action && (
        <button
          onClick={action.onClick}
          className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
