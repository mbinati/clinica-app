import { useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Download, Printer, X } from 'lucide-react';
import { usePdfGenerator } from './usePdfGenerator';
import type { SecaoProntuario, Paciente, Profissional } from '../../types';

interface PdfPreviewModalProps {
  secao: SecaoProntuario;
  paciente: Paciente;
  profissional: Profissional | undefined;
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
    profissional ?? null
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
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Pré-visualização — {secao.titulo}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              disabled={!blob}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download size={16} />
              Baixar PDF
            </button>
            <button
              onClick={handleImprimir}
              disabled={!blob}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
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
            <div className="flex items-center justify-center h-full gap-3">
              <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full" />
              <span className="text-sm text-gray-500">Gerando PDF...</span>
            </div>
          )}
          {erro && !loading && (
            <div className="flex items-center justify-center h-full text-red-500 px-8 text-center text-sm">
              Erro ao gerar PDF: {erro}
            </div>
          )}
          {componente && !loading && !erro && (
            <PDFViewer width="100%" height="100%" showToolbar={false}>
              {componente}
            </PDFViewer>
          )}
        </div>
      </div>
    </div>
  );
}
