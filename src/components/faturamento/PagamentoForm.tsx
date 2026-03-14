import { useState, useMemo } from 'react';
import Modal from '../shared/Modal';
import FormField, { inputClass, selectClass } from '../shared/FormField';
import { useFaturamentoStore } from '../../stores/useFaturamentoStore';
import { todayISO, formatCurrency } from '../../utils/formatters';
import type { MetodoPagamento } from '../../types';

interface Props {
  faturaId: string;
  onClose: () => void;
}

export default function PagamentoForm({ faturaId, onClose }: Props) {
  const faturas = useFaturamentoStore(s => s.faturas);
  const allPagamentos = useFaturamentoStore(s => s.pagamentos);
  const addPagamento = useFaturamentoStore(s => s.addPagamento);

  const fatura = useMemo(() => faturas.find(f => f.id === faturaId), [faturas, faturaId]);
  const pagamentos = useMemo(() => allPagamentos.filter(p => p.faturaId === faturaId), [allPagamentos, faturaId]);

  const totalPago = pagamentos.reduce((s, p) => s + p.valor, 0);
  const restante = (fatura?.valorFinal || 0) - totalPago;

  const [valor, setValor] = useState(restante);
  const [metodo, setMetodo] = useState<MetodoPagamento>('dinheiro');
  const [data, setData] = useState(todayISO());
  const [observacoes, setObservacoes] = useState('');

  const handleSave = () => {
    if (valor <= 0) return;
    addPagamento({ faturaId, data, valor, metodo, observacoes });
    onClose();
  };

  if (!fatura) return null;

  return (
    <Modal open onClose={onClose} title="Registrar Pagamento">
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-bg-primary/50 rounded-lg p-3 text-sm">
          <div className="flex justify-between"><span className="text-gray-500">Valor total:</span><span className="font-medium">{formatCurrency(fatura.valorFinal)}</span></div>
          <div className="flex justify-between"><span className="text-gray-500">Ja pago:</span><span className="font-medium text-green-600">{formatCurrency(totalPago)}</span></div>
          <div className="flex justify-between border-t border-gray-200 dark:border-border pt-1 mt-1"><span className="text-gray-500 font-medium">Restante:</span><span className="font-bold text-accent">{formatCurrency(restante)}</span></div>
        </div>

        <FormField label="Valor" required>
          <input type="number" value={valor} onChange={e => setValor(Number(e.target.value))} className={inputClass} step="0.01" min={0} max={restante} />
        </FormField>

        <FormField label="Metodo de Pagamento" required>
          <select value={metodo} onChange={e => setMetodo(e.target.value as MetodoPagamento)} className={selectClass}>
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao_credito">Cartao de Credito</option>
            <option value="cartao_debito">Cartao de Debito</option>
            <option value="pix">PIX</option>
            <option value="convenio">Convenio</option>
            <option value="outro">Outro</option>
          </select>
        </FormField>

        <FormField label="Data">
          <input type="date" value={data} onChange={e => setData(e.target.value)} className={inputClass} />
        </FormField>

        <FormField label="Observacoes">
          <textarea value={observacoes} onChange={e => setObservacoes(e.target.value)} className={`${inputClass} resize-none`} rows={2} />
        </FormField>

        <div className="flex gap-3 justify-end pt-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary text-gray-600 dark:text-text-secondary transition-colors">Cancelar</button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm bg-green-500 hover:bg-green-600 text-white transition-colors">Confirmar Pagamento</button>
        </div>
      </div>
    </Modal>
  );
}
