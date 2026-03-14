import { useState } from 'react';
import { useAuthStore } from '../../stores/useAuthStore';
import { LogIn, Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const login = useAuthStore(s => s.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password) return;
    setError('');
    setLoading(true);
    try {
      const result = await login(username.trim(), password);
      if (!result.ok) setError(result.error || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 p-4 relative overflow-hidden">
      {/* Logo como fundo com transparência */}
      <img
        src="./logo.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain opacity-10 dark:opacity-5 pointer-events-none select-none scale-110"
      />

      <div className="w-full max-w-sm relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src="./logo.png" alt="aimê" className="h-20 mx-auto mb-3" />
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-bg-secondary rounded-2xl shadow-xl border border-gray-200 dark:border-border p-6 space-y-4"
        >
          <h2 className="text-lg font-semibold text-gray-800 dark:text-text-primary text-center">
            Entrar no Sistema
          </h2>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
              <AlertCircle size={16} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-text-secondary mb-1">
              Usuário
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              autoFocus
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-border bg-white dark:bg-bg-card text-sm text-gray-800 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-text-secondary mb-1">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full px-3 py-2.5 pr-10 rounded-lg border border-gray-300 dark:border-border bg-white dark:bg-bg-card text-sm text-gray-800 dark:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !username.trim() || !password}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <LogIn size={18} />
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">
          v1.0.0 &nbsp;·&nbsp; desenvolvido por{' '}
          <span className="font-semibold text-accent">mbai sistemas</span>
        </p>
      </div>
    </div>
  );
}
