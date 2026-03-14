import { formatCPF, formatPhone, formatCEP } from '../../utils/formatters';
import { inputClass } from './FormField';

type MaskType = 'cpf' | 'phone' | 'cep';

interface MaskedInputProps {
  value: string;
  onChange: (value: string) => void;
  mask: MaskType;
  placeholder?: string;
  className?: string;
}

const formatters: Record<MaskType, (v: string) => string> = {
  cpf: formatCPF,
  phone: formatPhone,
  cep: formatCEP,
};

const placeholders: Record<MaskType, string> = {
  cpf: '000.000.000-00',
  phone: '(00) 00000-0000',
  cep: '00000-000',
};

export default function MaskedInput({ value, onChange, mask, placeholder, className }: MaskedInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    onChange(raw);
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      value={formatters[mask](value)}
      onChange={handleChange}
      placeholder={placeholder || placeholders[mask]}
      className={className || inputClass}
    />
  );
}
