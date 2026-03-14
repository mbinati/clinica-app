import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { PdfBackground } from './PdfBackground';
import { PdfHeader } from './PdfHeader';
import { PdfFooter } from './PdfFooter';
import { formatarData } from '../pdfUtils';
import type { PrescricaoItem } from '../../../types';

const styles = StyleSheet.create({
  page: {
    padding: 32,
    paddingBottom: 90,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#111827',
  },
  titulo: {
    backgroundColor: '#1d4ed8',
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
    marginBottom: 14,
    fontSize: 9,
    color: '#374151',
  },
  separador: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e7eb',
    marginBottom: 12,
  },
  itemContainer: {
    marginBottom: 10,
  },
  itemNumero: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#1d4ed8',
  },
  itemMedicamento: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  itemDetalhe: {
    fontSize: 9,
    color: '#374151',
    marginLeft: 10,
    marginBottom: 1,
  },
  observacoes: {
    marginTop: 14,
    padding: 8,
    backgroundColor: '#f9fafb',
    borderRadius: 4,
    fontSize: 9,
    color: '#374151',
  },
  uso: {
    marginTop: 10,
    fontSize: 9,
    color: '#6b7280',
  },
});

interface PrescricaoPdfProps {
  pacienteNome: string;
  data: string;
  itens: PrescricaoItem[];
  observacoes: string;
  nomeProfissional: string;
  crfa: string;
  qrCodeDataUrl: string;
  codigoAutenticidade: string;
  dataHoraGeracao: string;
  logoDataUrl: string;
}

export function PrescricaoPdf({
  pacienteNome,
  data,
  itens,
  observacoes,
  nomeProfissional,
  crfa,
  qrCodeDataUrl,
  codigoAutenticidade,
  dataHoraGeracao,
  logoDataUrl,
}: PrescricaoPdfProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PdfBackground logoDataUrl={logoDataUrl} />
        <PdfHeader nomeProfissional={nomeProfissional} crfa={crfa} logoDataUrl={logoDataUrl} />

        <Text style={styles.titulo}>RECEITUÁRIO SIMPLES</Text>

        <View style={styles.metaDados}>
          <Text>Paciente: {pacienteNome}</Text>
          <Text>Data: {formatarData(data)}</Text>
        </View>

        <View style={styles.separador} />

        {itens.map((item, idx) => (
          <View key={String(idx)} style={styles.itemContainer}>
            <Text style={styles.itemNumero}>{idx + 1}.</Text>
            <Text style={styles.itemMedicamento}>{item.medicamento}</Text>
            <Text style={styles.itemDetalhe}>Dosagem: {item.dosagem}</Text>
            <Text style={styles.itemDetalhe}>Posologia: {item.posologia}</Text>
            <Text style={styles.itemDetalhe}>
              Quantidade: {item.quantidade} · Via: {item.viaAdministracao}
            </Text>
          </View>
        ))}

        {observacoes ? (
          <View style={styles.observacoes}>
            <Text>Observações: {observacoes}</Text>
          </View>
        ) : null}

        <View style={styles.uso}>
          <Text>Uso: Conforme prescrição médica</Text>
        </View>

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
