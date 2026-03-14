import { View, Image, StyleSheet } from '@react-pdf/renderer';

// A4: 595 × 842 pt — logo ocupa a página toda como marca d'água
const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 595,
    height: 842,
    opacity: 0.10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 500,
    height: 500,
    objectFit: 'contain',
  },
});

interface PdfBackgroundProps {
  logoDataUrl: string;
}

export function PdfBackground({ logoDataUrl }: PdfBackgroundProps) {
  if (!logoDataUrl) return null;
  return (
    <View style={styles.bg} fixed>
      <Image style={styles.img} src={logoDataUrl} />
    </View>
  );
}
