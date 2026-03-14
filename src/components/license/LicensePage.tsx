import { useState } from 'react';
import { ShieldCheck, Copy, Check, KeyRound, AlertCircle } from 'lucide-react';
import { useLicenseStore } from '../../stores/useLicenseStore';

export default function LicensePage() {
  const { machineId, activate } = useLicenseStore();
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(machineId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleActivate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!key.trim()) return;
    setError('');
    setLoading(true);
    try {
      const result = await activate(key.trim());
      if (!result.ok) setError(result.error || 'Chave inválida');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src="./logo.png" alt="mbai sistemas" className="h-16 mx-auto mb-3" />
        </div>

        <div className="bg-white dark:bg-bg-secondary rounded-2xl shadow-xl border border-gray-200 dark:border-border p-6 space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
              <ShieldCheck size={22} className="text-accent" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-800 dark:text-text-primary">
                Ativação de Licença
              </h2>
              <p className="text-xs text-gray-500 dark:text-text-secondary">
                Esta cópia precisa ser ativada
              </p>
            </div>
          </div>

          {/* Machine ID */}
          <div>
            <p className="text-xs font-medium text-gray-500 dark:text-text-secondary mb-1.5">
              ID desta máquina — envie ao suporte para obter sua chave
            </p>
            <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-bg-card rounded-lg border border-gray-200 dark:border-border">
              <code className="flex-1 text-sm font-mono text-gray-700 dark:text-text-primary tracking-widest select-all">
                {machineId || '...'}
              </code>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-md text-gray-400 hover:text-accent hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                title="Copiar ID"
              >
                {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
              </button>
            </div>
          </div>

          {/* Chave de licença */}
          <form onSubmit={handleActivate} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-text-secondary mb-1.5">
                Chave de licença
              </label>
              <textarea
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Cole aqui a chave fornecida pelo suporte..."
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-border bg-white dark:bg-bg-card text-xs font-mono text-gray-800 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent resize-none transition-colors"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
                <AlertCircle size={15} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !key.trim()}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <KeyRound size={16} />
              {loading ? 'Verificando...' : 'Ativar licença'}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          desenvolvido por <span className="font-semibold text-accent">mbai sistemas</span>
        </p>
      </div>
    </div>
  );
}
