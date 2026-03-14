interface TabsProps {
  tabs: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
}

export default function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div className="flex gap-1 bg-gray-100 dark:bg-bg-primary rounded-lg p-1 overflow-x-auto">
      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors
            ${active === t.id
              ? 'bg-white dark:bg-bg-card text-gray-800 dark:text-text-primary shadow-sm'
              : 'text-gray-500 dark:text-text-secondary hover:text-gray-700 dark:hover:text-text-primary'}`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
