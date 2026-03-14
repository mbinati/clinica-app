import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 32,
    right: 32,
    borderTopWidth: 0.5,
    borderTopColor: '#e5e7eb',
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  qrCode: {
    width: 52,
    height: 52,
  },
  footerTexto: {
    flex: 1,
  },
  footerLinha: {
    fontSize: 7,
    color: '#6b7280',
    marginBottom: 2,
  },
  footerCodigo: {
    fontSize: 8,
    color: '#374151',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  footerAssinatura: {
    fontSize: 8,
    color: '#374151',
    marginTop: 2,
  },
});

interface PdfFooterProps {
  qrCodeDataUrl: string;
  codigoAutenticidade: string;
  nomeProfissional: string;
  crfa: string;
  dataHoraGeracao: string;
}

export function PdfFooter({
  qrCodeDataUrl,
  codigoAutenticidade,
  nomeProfissional,
  crfa,
  dataHoraGeracao,
}: PdfFooterProps) {
  return (
    <View style={styles.footer} fixed>
      <Image style={styles.qrCode} src={qrCodeDataUrl} />
      <View style={styles.footerTexto}>
        <Text style={styles.footerLinha}>
          Documento gerado em {dataHoraGeracao}
        </Text>
        <Text style={styles.footerCodigo}>
          Código de autenticidade: {codigoAutenticidade}
        </Text>
        <Text style={styles.footerAssinatura}>
          Assinado por: {nomeProfissional} — CRFa {crfa}
        </Text>
      </View>
    </View>
  );
}
