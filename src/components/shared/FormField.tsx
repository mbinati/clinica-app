interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

export default function FormField({ label, children, required, className = '' }: FormFieldProps) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 dark:text-text-secondary mb-1">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

// Reusable input style
export const inputClass = `w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-border
  bg-white dark:bg-bg-card text-sm text-gray-800 dark:text-text-primary
  placeholder-gray-400 dark:placeholder-gray-500
  focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors`;

export const selectClass = inputClass;

export const textareaClass = `${inputClass} resize-none`;
