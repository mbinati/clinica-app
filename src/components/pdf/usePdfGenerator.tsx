import { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import QRCode from 'qrcode';
import React from 'react';
import type { SecaoProntuario, Paciente, Profissional, PrescricaoItem, ExameItem } from '../../types';
import { useCatalogoStore } from '../../stores/useCatalogoStore';
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

const TIPOS_PDF = ['prescricao', 'laudo', 'solicitacao_exames'] as const;

/** Busca imagem da URL e retorna data URL base64 — necessário para @react-pdf/renderer */
async function fetchImageAsDataUrl(url: string): Promise<string> {
  try {
    const resp = await fetch(url);
    const blob = await resp.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch {
    return ''; // sem logo se falhar
  }
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
  const convenios = useCatalogoStore(s => s.convenios);

  useEffect(() => {
    if (!secao || !paciente) return;
    if (!TIPOS_PDF.includes(secao.tipo as typeof TIPOS_PDF[number])) return;

    let cancelado = false;
    setLoading(true);
    setErro(null);
    setBlob(null);
    setComponente(null);

    async function gerar() {
      try {
        // Buscar logo como data URL para o @react-pdf/renderer conseguir carregá-la
        const logoDataUrl = await fetchImageAsDataUrl('./logo.png');

        const codigo = gerarCodigoAutenticidade(
          secao!.id,
          secao!.criadoEm,
          secao!.pacienteId
        );
        const qrDataUrl = await QRCode.toDataURL(
          `MBAI-CLINICA | ${codigo} | ${secao!.id}`,
          { width: 100, margin: 1 }
        );
        const dataHora = formatarDataHoraAgora();

        // Profissional pode ser null — usa valores padrão se não encontrado
        const nomeProfissional = profissional?.nome ?? 'Profissional não identificado';
        const crfa = profissional
          ? `${profissional.tipoRegistro} ${profissional.registro}`.trim()
          : '';

        let doc: React.ReactElement;

        if (secao!.tipo === 'prescricao') {
          const dados = (secao!.dados ?? {}) as {
            itens?: PrescricaoItem[];
            observacoes?: string;
          };
          doc = React.createElement(PrescricaoPdf, {
            pacienteNome: paciente!.nome,
            data: secao!.criadoEm,
            itens: dados.itens ?? [],
            observacoes: dados.observacoes ?? secao!.conteudo ?? '',
            nomeProfissional,
            crfa,
            qrCodeDataUrl: qrDataUrl,
            codigoAutenticidade: codigo,
            dataHoraGeracao: dataHora,
            logoDataUrl,
          });
        } else if (secao!.tipo === 'laudo') {
          const dados = (secao!.dados ?? {}) as {
            cid?: string;
            conclusao?: string;
          };
          doc = React.createElement(LaudoPdf, {
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
            logoDataUrl,
          });
        } else {
          const dados = (secao!.dados ?? {}) as {
            exames?: ExameItem[];
            indicacaoClinica?: string;
          };
          doc = React.createElement(SolicitacaoExamesPdf, {
            pacienteNome: paciente!.nome,
            data: secao!.criadoEm,
            exames: dados.exames ?? [],
            indicacaoClinica: dados.indicacaoClinica ?? secao!.conteudo ?? '',
            convenioNome: (paciente!.convenioId ? convenios.find(c => c.id === paciente!.convenioId)?.nome : undefined),
            convenioCarteirinha: paciente!.numeroCarteirinha,
            nomeProfissional,
            crfa,
            qrCodeDataUrl: qrDataUrl,
            codigoAutenticidade: codigo,
            dataHoraGeracao: dataHora,
            logoDataUrl,
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
