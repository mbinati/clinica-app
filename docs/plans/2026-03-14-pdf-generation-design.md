# Design: Geração de PDF — Laudo, Prescrição e Solicitação de Exames

**Data:** 14/03/2026
**Status:** Aprovado

---

## Objetivo

Adicionar geração de PDF para os três tipos de documento clínico já existentes no prontuário:
- Prescrição (`prescricao`)
- Laudo (`laudo`)
- Solicitação de Exames (`solicitacao_exames`)

---

## Abordagem Escolhida

**`@react-pdf/renderer`** — renderização de PDF vetorial no browser/Electron.
**`qrcode`** — geração de QR Code como data URL para autenticidade.

### Por quê `@react-pdf/renderer`?
- Controle total do layout (sem depender do CSS do browser)
- PDF vetorial (texto pesquisável, QR Code nítido)
- Funciona offline (Electron) e na web (iPhone via PWA)
- Sem servidor necessário

---

## Estrutura de Arquivos

```
src/components/pdf/
├── PdfPreviewModal.tsx          ← modal com PDFViewer + botões Baixar/Imprimir
├── templates/
│   ├── PdfHeader.tsx            ← cabeçalho reutilizável (logo + clínica + profissional)
│   ├── PdfFooter.tsx            ← rodapé reutilizável (QR Code + hash + CRFa)
│   ├── PrescricaoPdf.tsx        ← layout Prescrição (borda azul, lista medicamentos)
│   ├── LaudoPdf.tsx             ← layout Laudo (formal, serifado, parágrafos)
│   └── SolicitacaoExamesPdf.tsx ← layout Solicitação (tabela de exames)
└── usePdfGenerator.ts           ← hook: recebe tipo + dados → retorna componente PDF

src/config/clinica.ts            ← dados da clínica (nome, endereço, logo, telefone)
```

---

## Layouts

### Cabeçalho (comum)
- Logo da clínica (à esquerda)
- Nome da clínica, endereço, telefone, email (à direita)
- Linha separadora
- Nome do profissional + CRFa

### Prescrição — visual azul/formal
- Título: "RECEITUÁRIO SIMPLES" com borda azul
- Data + nome do paciente
- Lista numerada: medicamento, dosagem, posologia, quantidade, via
- Campo de uso e indicação clínica

### Laudo — formal/clínico, fonte serifada
- Título: "LAUDO FONOAUDIOLÓGICO" com borda cinza-escura
- Paciente, data de nascimento, CID
- Conteúdo livre em parágrafos
- Campo de conclusão

### Solicitação de Exames — tabela limpa
- Título: "SOLICITAÇÃO DE EXAMES"
- Convênio + carteirinha (opcional — só aparece se cadastrado)
- Indicação clínica
- Tabela: Exame | Tipo | Observações

### Rodapé (comum)
- QR Code (esquerda) — contém código de autenticidade em texto
- Código de autenticidade: `SHA256(id + data + pacienteId).slice(0, 16)` em formato `XXXX-XXXX-XXXX`
- "Assinado por: Dr(a). [Nome] — CRFa [Número]"
- Data/hora de geração

---

## Dados

| Campo | Fonte |
|-------|-------|
| Logo, nome, endereço | `src/config/clinica.ts` |
| Nome e CRFa do profissional | `useProfissionalStore` → `profissionalId` da seção |
| Nome, nascimento, convênio | `usePacienteStore` → `pacienteId` |
| Itens da prescrição | `SecaoProntuario.dados` (tipo `prescricao`) |
| Conteúdo do laudo | `SecaoProntuario.dados` (tipo `laudo`) |
| Lista de exames | `SecaoProntuario.dados` (tipo `solicitacao_exames`) |
| Código de autenticidade | `SHA256(id + data + pacienteId).slice(0,16)` |

---

## UX — Fluxo do Usuário

1. No `ProntuarioPage`, cada seção do tipo `prescricao`, `laudo` ou `solicitacao_exames` exibe um botão `<IconPrinter size={16} />` no canto superior direito do card
2. Ao clicar, abre `PdfPreviewModal` com prévia do documento (PDFViewer iframe nativo)
3. Modal tem dois botões: **Baixar PDF** (download `.pdf`) e **Imprimir** (`window.print()`)
4. Modal fecha com ESC ou clicando fora

---

## Configurações da Clínica

Arquivo `src/config/clinica.ts` com valores editáveis:
```ts
export const CLINICA_CONFIG = {
  nome: 'mbai sistemas — Reabilitação Fonoaudiológica',
  endereco: 'Rua ..., Nº ..., Bairro, Cidade - UF',
  telefone: '(XX) XXXXX-XXXX',
  email: 'contato@mbai.com.br',
  logo: './logo.png',
}
```

---

## Dependências a Instalar

```bash
npm install @react-pdf/renderer qrcode
npm install --save-dev @types/qrcode
```

---

## Fora do Escopo (YAGNI)

- Tela de configurações de clínica (usar `clinica.ts` por ora)
- Assinatura digital ICP-Brasil
- Envio por e-mail/WhatsApp direto
- Histórico de PDFs gerados
