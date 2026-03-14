import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { PdfBackground } from './PdfBackground';
import { PdfHeader } from './PdfHeader';
import { PdfFooter } from './PdfFooter';
import { formatarData } from '../pdfUtils';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingBottom: 90,
    fontFamily: 'Times-Roman',
    fontSize: 11,
    color: '#111827',
    lineHeight: 1.6,
  },
  titulo: {
    borderWidth: 1.5,
    borderColor: '#374151',
    padding: '8 12',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 14,
    textAlign: 'center',
    letterSpacing: 1,
  },
  metaDados: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    fontSize: 9,
    color: '#374151',
    fontFamily: 'Helvetica',
  },
  separador: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#374151',
    marginBottom: 16,
  },
  conteudo: {
    fontSize: 11,
    textAlign: 'justify',
    marginBottom: 10,
    lineHeight: 1.7,
  },
  conclusaoLabel: {
    marginTop: 18,
    fontWeight: 'bold',
    fontSize: 11,
    marginBottom: 6,
    textDecoration: 'underline',
  },
  conclusaoTexto: {
    fontSize: 11,
    textAlign: 'justify',
    lineHeight: 1.7,
  },
});

interface LaudoPdfProps {
  pacienteNome: string;
  dataNascimento?: string;
  cid?: string;
  data: string;
  conteudo: string;
  conclusao?: string;
  nomeProfissional: string;
  crfa: string;
  qrCodeDataUrl: string;
  codigoAutenticidade: string;
  dataHoraGeracao: string;
  logoDataUrl: string;
}

export function LaudoPdf({
  pacienteNome,
  dataNascimento,
  cid,
  data,
  conteudo,
  conclusao,
  nomeProfissional,
  crfa,
  qrCodeDataUrl,
  codigoAutenticidade,
  dataHoraGeracao,
  logoDataUrl,
}: LaudoPdfProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PdfBackground logoDataUrl={logoDataUrl} />
        <PdfHeader nomeProfissional={nomeProfissional} crfa={crfa} logoDataUrl={logoDataUrl} />

        <Text style={styles.titulo}>LAUDO FONOAUDIOLÓGICO</Text>

        <View style={styles.metaDados}>
          <Text>Paciente: {pacienteNome}</Text>
          {dataNascimento ? (
            <Text>Data Nasc.: {formatarData(dataNascimento)}</Text>
          ) : null}
          <Text>Data: {formatarData(data)}</Text>
          {cid ? <Text>CID: {cid}</Text> : null}
        </View>

        <View style={styles.separador} />

        <Text style={styles.conteudo}>{conteudo}</Text>

        {conclusao ? (
          <>
            <Text style={styles.conclusaoLabel}>Conclusão:</Text>
            <Text style={styles.conclusaoTexto}>{conclusao}</Text>
          </>
        ) : null}

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
