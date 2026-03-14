import { useEffect } from 'react';
import AppShell from './components/layout/AppShell';
import LoginPage from './components/auth/LoginPage';
import LicensePage from './components/license/LicensePage';
import { useAppStore } from './stores/useAppStore';
import { useAuthStore } from './stores/useAuthStore';
import { useLicenseStore } from './stores/useLicenseStore';

export default function App() {
  const theme = useAppStore(s => s.theme);
  const currentSession = useAuthStore(s => s.currentSession);
  const isSessionExpired = useAuthStore(s => s.isSessionExpired);
  const logout = useAuthStore(s => s.logout);
  const { checked, licensed, check } = useLicenseStore();

  // Verificar licença na inicialização
  useEffect(() => { check(); }, [check]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Auto-logout on session expiry (check every 60s)
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSession && isSessionExpired()) {
        logout();
      }
    }, 60_000);
    return () => clearInterval(interval);
  }, [currentSession, isSessionExpired, logout]);

  // Aguarda verificação da licença
  if (!checked) return null;

  // Sem licença válida → tela de ativação
  // // if (!licensed) return <LicensePage />;

  // if (!currentSession || isSessionExpired()) {
  //   return <LoginPage />;
  // }

  return <AppShell />;
}
