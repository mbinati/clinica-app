import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { CLINICA_CONFIG } from '../../../config/clinica';

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  logo: {
    width: 56,
    height: 56,
    marginRight: 12,
  },
  clinicaInfo: {
    flex: 1,
  },
  clinicaNome: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  clinicaDetalhe: {
    fontSize: 8,
    color: '#6b7280',
    marginBottom: 1,
  },
  profissionalRow: {
    marginTop: 8,
    paddingTop: 6,
    borderTopWidth: 0.5,
    borderTopColor: '#e5e7eb',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profissionalNome: {
    fontSize: 9,
    color: '#374151',
    fontWeight: 'bold',
  },
  profissionalConselho: {
    fontSize: 9,
    color: '#6b7280',
  },
});

interface PdfHeaderProps {
  nomeProfissional: string;
  crfa: string;
  logoDataUrl: string;
}

export function PdfHeader({ nomeProfissional, crfa, logoDataUrl }: PdfHeaderProps) {
  return (
    <View style={styles.header}>
      {logoDataUrl ? <Image style={styles.logo} src={logoDataUrl} /> : null}
      <View style={styles.clinicaInfo}>
        <Text style={styles.clinicaNome}>{CLINICA_CONFIG.nome}</Text>
        <Text style={styles.clinicaDetalhe}>{CLINICA_CONFIG.endereco}</Text>
        <Text style={styles.clinicaDetalhe}>
          {CLINICA_CONFIG.telefone} · {CLINICA_CONFIG.email}
        </Text>
        <View style={styles.profissionalRow}>
          <Text style={styles.profissionalNome}>{nomeProfissional}</Text>
          <Text style={styles.profissionalConselho}>CRFa: {crfa}</Text>
        </View>
      </View>
    </View>
  );
}
