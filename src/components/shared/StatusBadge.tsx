import { statusLabel, statusColor } from '../../utils/formatters';

interface StatusBadgeProps {
  status: string;
  small?: boolean;
}

export default function StatusBadge({ status, small }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${statusColor(status)}
      ${small ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-0.5'}`}>
      {statusLabel(status)}
    </span>
  );
}
