interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color?: string;
  sub?: string;
}

export default function StatCard({ icon: Icon, label, value, color = 'text-accent', sub }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center ${color}`}>
          <Icon size={20} />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-gray-500 dark:text-text-secondary truncate">{label}</p>
          <p className="text-xl font-bold text-gray-800 dark:text-text-primary">{value}</p>
          {sub && <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{sub}</p>}
        </div>
      </div>
    </div>
  );
}
