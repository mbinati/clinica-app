import { useState } from 'react';
import { useAuthStore } from '../../stores/useAuthStore';
import type { PerfilUsuario } from '../../types/auth';
import { PERFIL_LABELS } from '../../types/auth';
import Modal from '../shared/Modal';
import FormField, { inputClass, selectClass } from '../shared/FormField';
import EmptyState from '../shared/EmptyState';
import { Plus, Edit2, KeyRound, UserX, UserCheck, Shield, Search } from 'lucide-react';
import { formatDate } from '../../utils/formatters';

export default function UsuariosPage() {
  const usuarios = useAuthStore(s => s.usuarios);
  const addUsuario = useAuthStore(s => s.addUsuario);
  const updateUsuario = useAuthStore(s => s.updateUsuario);
  const resetPassword = useAuthStore(s => s.resetPassword);
  const currentSession = useAuthStore(s => s.currentSession);

  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [resetId, setResetId] = useState<string | null>(null);

  // Form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [perfil, setPerfil] = useState<PerfilUsuario>('profissional');
  const [newPassword, setNewPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [saving, setSaving] = useState(false);

  const filtered = search
    ? usuarios.filter(u =>
        u.nomeCompleto.toLowerCase().includes(search.toLowerCase()) ||
        u.username.toLowerCase().includes(search.toLowerCase())
      )
    : usuarios;

  const openCreate = () => {
    setEditId(null);
    setUsername('');
    setPassword('');
    setNomeCompleto('');
    setPerfil('profissional');
    setFormError('');
    setShowForm(true);
  };

  const openEdit = (id: string) => {
    const user = usuarios.find(u => u.id === id);
    if (!user) return;
    setEditId(id);
    setUsername(user.username);
    setPassword('');
    setNomeCompleto(user.nomeCompleto);
    setPerfil(user.perfil);
    setFormError('');
    setShowForm(true);
  };

  const openReset = (id: string) => {
    setResetId(id);
    setNewPassword('');
    setFormError('');
    setShowResetForm(true);
  };

  const handleSave = async () => {
    setFormError('');
    setSaving(true);
    try {
      if (editId) {
        updateUsuario(editId, { nomeCompleto, perfil });
        setShowForm(false);
      } else {
        const result = await addUsuario({ username, password, nomeCompleto, perfil });
        if (!result.ok) {
          setFormError(result.error || 'Erro ao criar usuário');
          return;
        }
        setShowForm(false);
      }
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (!resetId || newPassword.length < 4) {
      setFormError('Senha deve ter no mínimo 4 caracteres');
      return;
    }
    setSaving(true);
    try {
      await resetPassword(resetId, newPassword);
      setShowResetForm(false);
    } finally {
      setSaving(false);
    }
  };

  const toggleAtivo = (id: string) => {
    const user = usuarios.find(u => u.id === id);
    if (!user || user.id === currentSession?.userId) return;
    updateUsuario(id, { ativo: !user.ativo });
  };

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar usuário..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm text-gray-800 dark:text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
        </div>
        <button
          onClick={openCreate}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm transition-colors"
        >
          <Plus size={16} /> Novo Usuário
        </button>
      </div>

      {/* Lista */}
      {filtered.length === 0 ? (
        <EmptyState icon={Shield} title="Nenhum usuário" description="Crie o primeiro usuário do sistema" />
      ) : (
        <div className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-border bg-gray-50 dark:bg-bg-primary/50">
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Usuário</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary hidden sm:table-cell">Nome Completo</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Perfil</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary hidden md:table-cell">Status</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary hidden lg:table-cell">Último Login</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600 dark:text-text-secondary">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(u => (
                <tr key={u.id} className="border-b border-gray-100 dark:border-border/50 hover:bg-gray-50 dark:hover:bg-bg-hover transition-colors">
                  <td className="px-4 py-3">
                    <span className="font-medium text-gray-800 dark:text-text-primary">{u.username}</span>
                    <span className="sm:hidden block text-xs text-gray-500">{u.nomeCompleto}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-text-secondary hidden sm:table-cell">{u.nomeCompleto}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      u.perfil === 'admin'
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                        : u.perfil === 'profissional'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                    }`}>
                      {PERFIL_LABELS[u.perfil]}
                    </span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      u.ativo
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}>
                      {u.ativo ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 dark:text-text-secondary text-xs hidden lg:table-cell">
                    {u.ultimoLogin ? formatDate(u.ultimoLogin.split('T')[0]) : '—'}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button onClick={() => openEdit(u.id)} title="Editar" className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-bg-hover text-gray-500 transition-colors">
                        <Edit2 size={14} />
                      </button>
                      <button onClick={() => openReset(u.id)} title="Redefinir senha" className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-bg-hover text-gray-500 transition-colors">
                        <KeyRound size={14} />
                      </button>
                      {u.id !== currentSession?.userId && (
                        <button onClick={() => toggleAtivo(u.id)} title={u.ativo ? 'Desativar' : 'Ativar'} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-bg-hover text-gray-500 transition-colors">
                          {u.ativo ? <UserX size={14} /> : <UserCheck size={14} />}
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <Modal open onClose={() => setShowForm(false)} title={editId ? 'Editar Usuário' : 'Novo Usuário'}>
          <div className="space-y-4">
            {formError && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
                {formError}
              </div>
            )}

            {!editId && (
              <FormField label="Nome de Usuário" required>
                <input value={username} onChange={e => setUsername(e.target.value)} className={inputClass} placeholder="Ex: maria.silva" />
              </FormField>
            )}

            {!editId && (
              <FormField label="Senha" required>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className={inputClass} placeholder="Mínimo 4 caracteres" />
              </FormField>
            )}

            <FormField label="Nome Completo" required>
              <input value={nomeCompleto} onChange={e => setNomeCompleto(e.target.value)} className={inputClass} placeholder="Nome completo" />
            </FormField>

            <FormField label="Perfil" required>
              <select value={perfil} onChange={e => setPerfil(e.target.value as PerfilUsuario)} className={selectClass}>
                <option value="admin">Administrador</option>
                <option value="profissional">Profissional</option>
                <option value="recepcao">Recepção</option>
              </select>
            </FormField>

            <div className="flex gap-3 justify-end pt-2">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary text-gray-600 dark:text-text-secondary transition-colors">
                Cancelar
              </button>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 rounded-lg text-sm bg-accent hover:bg-accent-hover text-white transition-colors disabled:opacity-50">
                {saving ? 'Salvando...' : 'Salvar'}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Reset Password Modal */}
      {showResetForm && resetId && (
        <Modal open onClose={() => setShowResetForm(false)} title="Redefinir Senha">
          <div className="space-y-4">
            {formError && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
                {formError}
              </div>
            )}

            <p className="text-sm text-gray-600 dark:text-text-secondary">
              Redefinir senha de: <strong>{usuarios.find(u => u.id === resetId)?.username}</strong>
            </p>

            <FormField label="Nova Senha" required>
              <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className={inputClass} placeholder="Mínimo 4 caracteres" />
            </FormField>

            <div className="flex gap-3 justify-end pt-2">
              <button onClick={() => setShowResetForm(false)} className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary text-gray-600 dark:text-text-secondary transition-colors">
                Cancelar
              </button>
              <button onClick={handleReset} disabled={saving} className="px-4 py-2 rounded-lg text-sm bg-accent hover:bg-accent-hover text-white transition-colors disabled:opacity-50">
                {saving ? 'Salvando...' : 'Redefinir'}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
