export type PerfilUsuario = 'admin' | 'profissional' | 'recepcao';

export interface Usuario {
  id: string;
  username: string;
  passwordHash: string;
  nomeCompleto: string;
  perfil: PerfilUsuario;
  ativo: boolean;
  criadoEm: string;
  atualizadoEm: string;
  ultimoLogin: string | null;
}

export interface SessaoUsuario {
  userId: string;
  username: string;
  nomeCompleto: string;
  perfil: PerfilUsuario;
  loginEm: string;
  expiraEm: string;
}

export const PERFIL_LABELS: Record<PerfilUsuario, string> = {
  admin: 'Administrador',
  profissional: 'Profissional',
  recepcao: 'Recepção',
};
