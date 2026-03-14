import Modal from './Modal';

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  danger?: boolean;
}

export default function ConfirmDialog({ open, onClose, onConfirm, title, message, confirmLabel = 'Confirmar', danger }: ConfirmDialogProps) {
  return (
    <Modal open={open} onClose={onClose} title={title}>
      <p className="text-sm text-gray-600 dark:text-text-secondary mb-6">{message}</p>
      <div className="flex gap-3 justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary hover:bg-gray-200 dark:hover:bg-bg-hover text-gray-600 dark:text-text-secondary transition-colors"
        >
          Cancelar
        </button>
        <button
          onClick={() => { onConfirm(); onClose(); }}
          className={`px-4 py-2 rounded-lg text-sm text-white transition-colors
            ${danger ? 'bg-red-500 hover:bg-red-600' : 'bg-accent hover:bg-accent-hover'}`}
        >
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
}
