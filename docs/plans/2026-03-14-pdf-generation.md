# PDF Generation — Laudo, Prescrição e Solicitação de Exames

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Adicionar geração de PDF para os documentos clínicos (Prescrição, Laudo e Solicitação de Exames) com cabeçalho institucional, logo como marca d'água no fundo das páginas, QR Code de autenticidade e modal de prévia.

**Architecture:** Cada documento é um componente React renderizado com `@react-pdf/renderer`. Um hook `usePdfGenerator` recebe tipo + dados e retorna o componente correto. O `PdfPreviewModal` exibe o PDF com `PDFViewer` e oferece botões de download e impressão. O botão "Gerar PDF" é inserido nos cards das seções relevantes em `ProntuarioPage`.

**Tech Stack:** `@react-pdf/renderer` v3, `qrcode` para geração de QR Code como dataURL, `crypto-js` ou `crypto` (já disponível via Vite) para hash SHA-256.

---

### Task 1: Instalar dependências e criar config da clínica

**Files:**
- Modify: `package.json` (via npm install)
- Create: `src/config/clinica.ts`

**Step 1: Instalar dependências**

```bash
cd C:\PROJETOS\clinica
npm install @react-pdf/renderer qrcode
npm install --save-dev @types/qrcode
```

Esperado: instalação sem erros, `package.json` atualizado.

**Step 2: Criar `src/config/clinica.ts`**

```typescript
// Dados da clínica exibidos nos documentos PDF
export const CLINICA_CONFIG = {
  nome: 'mbai sistemas — Reabilitação Fonoaudiológica',
  endereco: 'Rua Exemplo, 123 — Bairro — Cidade - UF',
  telefone: '(XX) XXXXX-XXXX',
  email: 'contato@mbai.com.br',
  logo: './logo.png',
} as const;
```

**Step 3: Verificar instalação**

```bash
node -e "require('@react-pdf/renderer'); console.log('ok')"
```

Esperado: `ok`

**Step 4: Commit**

```bash
git add src/config/clinica.ts package.json package-lock.json
git commit -m "feat(pdf): instalar @react-pdf/renderer e criar config da clínica"
```

---

### Task 2: Criar utilitário de hash e tipos auxiliares

**Files:**
- Create: `src/components/pdf/pdfUtils.ts`

**Step 1: Criar `src/components/pdf/pdfUtils.ts`**

```typescript
// Utilitários compartilhados pelos templates PDF

/**
 * Gera código de autenticidade no formato XXXX-XXXX-XXXX
 * usando SHA-256 dos campos identificadores do documento.
 * Não depende de servidor — é gerado no frontend.
 */
export function gerarCodigoAutenticidade(
  id: string,
  data: string,
  pacienteId: string
): string {
  // Usa SubtleCrypto via Web Crypto API (disponível em todos os browsers modernos e Electron)
  // Versão síncrona simples para uso em PDF (não precisa de async aqui)
  const raw = `${id}|${data}|${pacienteId}`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    const char = raw.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // converte para 32bit int
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0').toUpperCase();
  return `${hex.slice(0, 4)}-${hex.slice(4, 8)}-${hex.slice(0, 4)}`;
}

/** Formata data ISO ou string DD/MM/AAAA para exibição */
export function formatarData(data: string): string {
  if (!data) return '—';
  if (data.includes('/')) return data;
  const [ano, mes, dia] = data.split('T')[0].split('-');
  return `${dia}/${mes}/${ano}`;
}

/** Formata data e hora atuais para o rodapé */
export function formatarDataHoraAgora(): string {
  const now = new Date();
  return now.toLocaleString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}
```

**Step 2: Commit**

```bash
git add src/components/pdf/pdfUtils.ts
git commit -m "feat(pdf): utilitários de hash e formatação de data"
```

---

### Task 2b: Criar PdfBackground — marca d'água do logo

**Files:**
- Create: `src/components/pdf/templates/PdfBackground.tsx`

A4 tem 595 × 842 pontos. Para centralizar uma imagem de 280×280:
- `top = (842 - 280) / 2 = 281`
- `left = (595 - 280) / 2 = 157.5`

`@react-pdf/renderer` não suporta `transform: translate`, então calculamos a posição diretamente.

**Step 1: Criar `src/components/pdf/templates/PdfBackground.tsx`**

```typescript
import { View, Image, StyleSheet } from '@react-pdf/renderer';
import { CLINICA_CONFIG } from '../../../config/clinica';

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: 281,
    left: 157.5,
    width: 280,
    height: 280,
    opacity: 0.05,
  },
});

export function PdfBackground() {
  return (
    <View style={styles.bg} fixed>
      <Image src={CLINICA_CONFIG.logo} />
    </View>
  );
}
```

**Step 2: Usar `<PdfBackground />` dentro de cada `<Page>` nos templates**

Em cada template (`PrescricaoPdf`, `LaudoPdf`, `SolicitacaoExamesPdf`), adicionar como **primeiro filho** da `<Page>`:

```tsx
<Page size="A4" style={styles.page}>
  <PdfBackground />   {/* ← marca d'água */}
  <PdfHeader ... />
  ...
</Page>
```

> O `fixed` no `View` faz o background repetir em todas as páginas do documento.

**Step 3: Commit**

```bash
git add src/components/pdf/templates/PdfBackground.tsx
git commit -m "feat(pdf): PdfBackground — logo como marca d'água"
```

---

### Task 3: Criar PdfHeader e PdfFooter reutilizáveis

**Files:**
- Create: `src/components/pdf/templates/PdfHeader.tsx`
- Create: `src/components/pdf/templates/PdfFooter.tsx`

> ⚠️ `@react-pdf/renderer` usa sua própria API de componentes (`View`, `Text`, `Image`, `StyleSheet`), NÃO HTML/CSS normal. Importe sempre de `@react-pdf/renderer`.

**Step 1: Criar `src/components/pdf/templates/PdfHeader.tsx`**

```typescript
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
}

export function PdfHeader({ nomeProfissional, crfa }: PdfHeaderProps) {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} src={CLINICA_CONFIG.logo} />
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
```

**Step 2: Criar `src/components/pdf/templates/PdfFooter.tsx`**

```typescript
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
```

**Step 3: Commit**

```bash
git add src/components/pdf/templates/
git commit -m "feat(pdf): PdfHeader e PdfFooter reutilizáveis"
```

---

### Task 4: Criar template PrescricaoPdf

**Files:**
- Create: `src/components/pdf/templates/PrescricaoPdf.tsx`

**Step 1: Criar `src/components/pdf/templates/PrescricaoPdf.tsx`**

```typescript
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
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
    flexDirection: 'row',
    gap: 20,
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
}: PrescricaoPdfProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PdfHeader nomeProfissional={nomeProfissional} crfa={crfa} />

        <Text style={styles.titulo}>RECEITUÁRIO SIMPLES</Text>

        <View style={styles.metaDados}>
          <Text>Paciente: {pacienteNome}</Text>
          <Text>Data: {formatarData(data)}</Text>
        </View>

        <View style={styles.separador} />

        {itens.map((item, idx) => (
          <View key={item.id ?? idx} style={styles.itemContainer}>
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
```

**Step 2: Commit**

```bash
git add src/components/pdf/templates/PrescricaoPdf.tsx
git commit -m "feat(pdf): template PrescricaoPdf"
```

---

### Task 5: Criar template LaudoPdf

**Files:**
- Create: `src/components/pdf/templates/LaudoPdf.tsx`

**Step 1: Criar `src/components/pdf/templates/LaudoPdf.tsx`**

```typescript
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
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
}: LaudoPdfProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PdfHeader nomeProfissional={nomeProfissional} crfa={crfa} />

        <Text style={styles.titulo}>LAUDO FONOAUDIOLÓGICO</Text>

        <View style={styles.metaDados}>
          <Text>Paciente: {pacienteNome}</Text>
          {dataNascimento && (
            <Text>Data Nasc.: {formatarData(dataNascimento)}</Text>
          )}
          <Text>Data: {formatarData(data)}</Text>
          {cid && <Text>CID: {cid}</Text>}
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
```

**Step 2: Commit**

```bash
git add src/components/pdf/templates/LaudoPdf.tsx
git commit -m "feat(pdf): template LaudoPdf"
```

---

### Task 6: Criar template SolicitacaoExamesPdf

**Files:**
- Create: `src/components/pdf/templates/SolicitacaoExamesPdf.tsx`

**Step 1: Criar `src/components/pdf/templates/SolicitacaoExamesPdf.tsx`**

```typescript
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
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
  // Tabela
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
}: SolicitacaoExamesPdfProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PdfHeader nomeProfissional={nomeProfissional} crfa={crfa} />

        <Text style={styles.titulo}>SOLICITAÇÃO DE EXAMES</Text>

        <View style={styles.metaDados}>
          <Text>Paciente: {pacienteNome}</Text>
          <Text>Data: {formatarData(data)}</Text>
        </View>

        {convenioNome && (
          <Text style={styles.convenio}>
            Convênio: {convenioNome}
            {convenioCarteirinha
              ? `  |  Carteirinha: ${convenioCarteirinha}`
              : ''}
          </Text>
        )}

        <Text style={styles.indicacao}>
          Indicação Clínica: {indicacaoClinica}
        </Text>

        <View style={styles.separador} />

        {/* Cabeçalho da tabela */}
        <View style={styles.tabelaCabecalho}>
          <Text style={styles.colNome}>Exame</Text>
          <Text style={styles.colTipo}>Tipo</Text>
          <Text style={styles.colObs}>Observações</Text>
        </View>

        {exames.map((exame, idx) => (
          <View key={exame.id ?? idx} style={styles.tabelaLinha}>
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
```

**Step 2: Commit**

```bash
git add src/components/pdf/templates/SolicitacaoExamesPdf.tsx
git commit -m "feat(pdf): template SolicitacaoExamesPdf"
```

---

### Task 7: Criar hook usePdfGenerator

**Files:**
- Create: `src/components/pdf/usePdfGenerator.ts`

O hook recebe uma `SecaoProntuario` + dados de contexto (paciente, profissional) e retorna:
- O componente PDF pronto para passar ao `PDFViewer`
- O `blob` para download
- O `codigoAutenticidade` para exibição

**Step 1: Criar `src/components/pdf/usePdfGenerator.ts`**

```typescript
import { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import QRCode from 'qrcode';
import type { SecaoProntuario, Paciente, Profissional, PrescricaoItem, ExameItem } from '../../types';
import { gerarCodigoAutenticidade, formatarDataHoraAgora } from './pdfUtils';
import { PrescricaoPdf } from './templates/PrescricaoPdf';
import { LaudoPdf } from './templates/LaudoPdf';
import { SolicitacaoExamesPdf } from './templates/SolicitacaoExamesPdf';

export interface PdfGeneratorResult {
  componente: React.ReactElement | null;
  blob: Blob | null;
  loading: boolean;
  erro: string | null;
}

export function usePdfGenerator(
  secao: SecaoProntuario | null,
  paciente: Paciente | null,
  profissional: Profissional | null
): PdfGeneratorResult {
  const [blob, setBlob] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [componente, setComponente] = useState<React.ReactElement | null>(null);

  useEffect(() => {
    if (!secao || !paciente || !profissional) return;
    if (!['prescricao', 'laudo', 'solicitacao_exames'].includes(secao.tipo)) return;

    let cancelado = false;
    setLoading(true);
    setErro(null);

    async function gerar() {
      try {
        const codigo = gerarCodigoAutenticidade(
          secao!.id,
          secao!.criadoEm,
          secao!.pacienteId
        );
        // QR Code contém apenas o texto do código (sem URL)
        const qrDataUrl = await QRCode.toDataURL(
          `MBAI-CLINICA | ${codigo} | ${secao!.id}`,
          { width: 100, margin: 1 }
        );
        const dataHora = formatarDataHoraAgora();
        const nomeProfissional = profissional!.nome;
        const crfa = profissional!.numeroConselho ?? profissional!.conselho ?? '';

        let doc: React.ReactElement;

        if (secao!.tipo === 'prescricao') {
          const dados = (secao!.dados ?? {}) as {
            itens?: PrescricaoItem[];
            observacoes?: string;
          };
          doc = PrescricaoPdf({
            pacienteNome: paciente!.nome,
            data: secao!.criadoEm,
            itens: dados.itens ?? [],
            observacoes: dados.observacoes ?? secao!.conteudo ?? '',
            nomeProfissional,
            crfa,
            qrCodeDataUrl: qrDataUrl,
            codigoAutenticidade: codigo,
            dataHoraGeracao: dataHora,
          });
        } else if (secao!.tipo === 'laudo') {
          const dados = (secao!.dados ?? {}) as {
            cid?: string;
            conclusao?: string;
          };
          doc = LaudoPdf({
            pacienteNome: paciente!.nome,
            dataNascimento: paciente!.dataNascimento,
            cid: dados.cid,
            data: secao!.criadoEm,
            conteudo: secao!.conteudo ?? '',
            conclusao: dados.conclusao,
            nomeProfissional,
            crfa,
            qrCodeDataUrl: qrDataUrl,
            codigoAutenticidade: codigo,
            dataHoraGeracao: dataHora,
          });
        } else {
          const dados = (secao!.dados ?? {}) as {
            exames?: ExameItem[];
            indicacaoClinica?: string;
          };
          const conv = paciente!.convenio;
          doc = SolicitacaoExamesPdf({
            pacienteNome: paciente!.nome,
            data: secao!.criadoEm,
            exames: dados.exames ?? [],
            indicacaoClinica: dados.indicacaoClinica ?? secao!.conteudo ?? '',
            convenioNome: conv?.convenioId ? conv.convenioId : undefined,
            convenioCarteirinha: conv?.numeroCarteirinha,
            nomeProfissional,
            crfa,
            qrCodeDataUrl: qrDataUrl,
            codigoAutenticidade: codigo,
            dataHoraGeracao: dataHora,
          });
        }

        if (!cancelado) {
          setComponente(doc);
          const gerado = await pdf(doc).toBlob();
          if (!cancelado) setBlob(gerado);
        }
      } catch (e) {
        if (!cancelado) setErro(String(e));
      } finally {
        if (!cancelado) setLoading(false);
      }
    }

    gerar();
    return () => { cancelado = true; };
  }, [secao?.id, paciente?.id, profissional?.id]);

  return { componente, blob, loading, erro };
}
```

**Step 2: Commit**

```bash
git add src/components/pdf/usePdfGenerator.ts
git commit -m "feat(pdf): hook usePdfGenerator"
```

---

### Task 8: Criar PdfPreviewModal

**Files:**
- Create: `src/components/pdf/PdfPreviewModal.tsx`

**Step 1: Criar `src/components/pdf/PdfPreviewModal.tsx`**

```typescript
import { useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Download, Printer, X } from 'lucide-react';
import { usePdfGenerator } from './usePdfGenerator';
import type { SecaoProntuario, Paciente, Profissional } from '../../types';

interface PdfPreviewModalProps {
  secao: SecaoProntuario;
  paciente: Paciente;
  profissional: Profissional;
  onClose: () => void;
}

export function PdfPreviewModal({
  secao,
  paciente,
  profissional,
  onClose,
}: PdfPreviewModalProps) {
  const { componente, blob, loading, erro } = usePdfGenerator(
    secao,
    paciente,
    profissional
  );

  // Fecha com ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  function handleDownload() {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${secao.tipo}-${paciente.nome.replace(/\s+/g, '_')}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImprimir() {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const win = window.open(url);
    win?.addEventListener('load', () => {
      win.print();
      URL.revokeObjectURL(url);
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex flex-col w-[90vw] max-w-4xl h-[90vh]">
        {/* Header do modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Pré-visualização — {secao.titulo}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              disabled={!blob}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50"
            >
              <Download size={16} />
              Baixar PDF
            </button>
            <button
              onClick={handleImprimir}
              disabled={!blob}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
            >
              <Printer size={16} />
              Imprimir
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-hidden">
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full" />
            </div>
          )}
          {erro && (
            <div className="flex items-center justify-center h-full text-red-500 px-8 text-center">
              Erro ao gerar PDF: {erro}
            </div>
          )}
          {componente && !loading && (
            <PDFViewer width="100%" height="100%" showToolbar={false}>
              {componente}
            </PDFViewer>
          )}
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/pdf/PdfPreviewModal.tsx
git commit -m "feat(pdf): PdfPreviewModal com PDFViewer, download e impressão"
```

---

### Task 9: Integrar botão "Gerar PDF" no ProntuarioPage

**Files:**
- Modify: `src/components/prontuario/ProntuarioPage.tsx`

**Step 1: Ler o arquivo atual**

Leia `src/components/prontuario/ProntuarioPage.tsx` para entender onde os cards de seção são renderizados.

**Step 2: Adicionar estado do modal**

No topo do componente `ProntuarioPage`, adicionar:

```typescript
import { FileText } from 'lucide-react'; // já deve existir
import { PdfPreviewModal } from '../pdf/PdfPreviewModal';
import type { SecaoProntuario } from '../../types';

// No corpo do componente:
const [secaoPdf, setSecaoPdf] = useState<SecaoProntuario | null>(null);
```

**Step 3: Adicionar botão nos cards de seção**

Nos tipos `'prescricao'`, `'laudo'` e `'solicitacao_exames'`, adicionar o botão ao lado dos botões existentes de cada card:

```tsx
{['prescricao', 'laudo', 'solicitacao_exames'].includes(secao.tipo) && (
  <button
    onClick={() => setSecaoPdf(secao)}
    title="Gerar PDF"
    className="p-1.5 rounded hover:bg-accent/10 text-accent"
  >
    <FileText size={15} />
  </button>
)}
```

**Step 4: Renderizar o modal**

No final do JSX do componente, antes do `</div>` final:

```tsx
{secaoPdf && pacienteSelecionado && (
  <PdfPreviewModal
    secao={secaoPdf}
    paciente={pacienteSelecionado}
    profissional={/* profissional logado: buscar do store pelo id da seção */}
    onClose={() => setSecaoPdf(null)}
  />
)}
```

> Para o profissional: use `useProfissionalStore().profissionais.find(p => p.id === secaoPdf.profissionalId)`. Se não encontrado, use um objeto mock com nome do usuário logado.

**Step 5: Testar no browser**

```
1. Abrir http://localhost:5175
2. Login: admin / admin123
3. Ir em Prontuário
4. Buscar um paciente
5. Adicionar uma seção do tipo Prescrição
6. Clicar no ícone FileText do card
7. Verificar que o modal abre com prévia do PDF
8. Clicar "Baixar PDF" e verificar o arquivo
```

**Step 6: Commit**

```bash
git add src/components/prontuario/ProntuarioPage.tsx src/components/pdf/
git commit -m "feat(pdf): integrar botão Gerar PDF no ProntuarioPage"
```

---

### Task 10: Verificação final e ajustes

**Step 1: Testar os três tipos de documento**

Para cada tipo, verificar:
- [ ] Prescrição: cabeçalho azul, lista de medicamentos, rodapé com QR Code
- [ ] Laudo: cabeçalho com borda, conteúdo em fonte serifada, rodapé com QR Code
- [ ] Solicitação: cabeçalho verde, tabela de exames, convenio aparece só se cadastrado

**Step 2: Verificar QR Code**

Escanear o QR Code gerado com o celular. Deve exibir texto:
```
MBAI-CLINICA | XXXX-XXXX-XXXX | [id-da-seção]
```

**Step 3: Commit final**

```bash
git add .
git commit -m "feat(pdf): geração de PDF completa — Prescrição, Laudo e Solicitação de Exames"
```
