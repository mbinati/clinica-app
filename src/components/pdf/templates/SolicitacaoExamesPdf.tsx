import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { PdfBackground } from './PdfBackground';
import { PdfHeader } from './PdfHeader';
import { PdfFooter } from './PdfFooter';
import { formatarData } from '../pdfUtils';
import type { ExameItem } from '../../../types';

const TIPO_LABEL: Record<string, string> = {
  laboratorio: 'Laboratório',
  imagem: 'Imagem',
  outro: 'Outro',
};

const styles = StyleSheet.create({
  page: {
    padding: 32,
    paddingBottom: 90,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#111827',
  },
  titulo: {
    backgroundColor: '#059669',
    color: 'white',
    padding: '8 12',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 12,
    borderRadius: 4,
  },
  metaDados: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    fontSize: 9,
    color: '#374151',
  },
  convenio: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 8,
  },
  indicacao: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 14,
    padding: 8,
    backgroundColor: '#f0fdf4',
    borderRadius: 4,
  },
  separador: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e7eb',
    marginBottom: 12,
  },
  tabelaCabecalho: {
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    borderWidth: 0.5,
    borderColor: '#e5e7eb',
    padding: '5 8',
    fontWeight: 'bold',
    fontSize: 9,
  },
  tabelaLinha: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e7eb',
    borderLeftWidth: 0.5,
    borderLeftColor: '#e5e7eb',
    borderRightWidth: 0.5,
    borderRightColor: '#e5e7eb',
    padding: '5 8',
    fontSize: 9,
  },
  colNome: { flex: 3 },
  colTipo: { flex: 1 },
  colObs: { flex: 3 },
});

interface SolicitacaoExamesPdfProps {
  pacienteNome: string;
  data: string;
  exames: ExameItem[];
  indicacaoClinica: string;
  convenioNome?: string;
  convenioCarteirinha?: string;
  nomeProfissional: string;
  crfa: string;
  qrCodeDataUrl: string;
  codigoAutenticidade: string;
  dataHoraGeracao: string;
  logoDataUrl: string;
}

export function SolicitacaoExamesPdf({
  pacienteNome,
  data,
  exames,
  indicacaoClinica,
  convenioNome,
  convenioCarteirinha,
  nomeProfissional,
  crfa,
  qrCodeDataUrl,
  codigoAutenticidade,
  dataHoraGeracao,
  logoDataUrl,
}: SolicitacaoExamesPdfProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PdfBackground logoDataUrl={logoDataUrl} />
        <PdfHeader nomeProfissional={nomeProfissional} crfa={crfa} logoDataUrl={logoDataUrl} />

        <Text style={styles.titulo}>SOLICITAÇÃO DE EXAMES</Text>

        <View style={styles.metaDados}>
          <Text>Paciente: {pacienteNome}</Text>
          <Text>Data: {formatarData(data)}</Text>
        </View>

        {convenioNome ? (
          <Text style={styles.convenio}>
            Convênio: {convenioNome}
            {convenioCarteirinha ? `  |  Carteirinha: ${convenioCarteirinha}` : ''}
          </Text>
        ) : null}

        <Text style={styles.indicacao}>
          Indicação Clínica: {indicacaoClinica}
        </Text>

        <View style={styles.separador} />

        <View style={styles.tabelaCabecalho}>
          <Text style={styles.colNome}>Exame</Text>
          <Text style={styles.colTipo}>Tipo</Text>
          <Text style={styles.colObs}>Observações</Text>
        </View>

        {exames.map((exame, idx) => (
          <View key={String(idx)} style={styles.tabelaLinha}>
            <Text style={styles.colNome}>{exame.nome}</Text>
            <Text style={styles.colTipo}>
              {TIPO_LABEL[exame.tipo] ?? exame.tipo}
            </Text>
            <Text style={styles.colObs}>{exame.observacoes || '—'}</Text>
          </View>
        ))}

        <PdfFooter
          qrCodeDataUrl={qrCodeDataUrl}
          codigoAutenticidade={codigoAutenticidade}
          nomeProfissional={nomeProfissional}
          crfa={crfa}
          dataHoraGeracao={dataHoraGeracao}
        />
      </Page>
    </Document>
  );
}
