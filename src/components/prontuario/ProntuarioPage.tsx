import { useState, useMemo } from 'react';
import {
  Search, Plus, FileText, Pill, TestTube, ChevronDown, X,
  ClipboardList, Stethoscope, FileCheck, Syringe, ListChecks, AlertCircle, ScrollText,
} from 'lucide-react';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { useProntuarioStore } from '../../stores/useProntuarioStore';
import { useProfissionalStore } from '../../stores/useProfissionalStore';
import { useAtendimentoStore } from '../../stores/useAtendimentoStore';
import { useAppStore } from '../../stores/useAppStore';
import { matchSearch } from '../../utils/searchUtils';
import { formatDate, calcularIdade } from '../../utils/formatters';
import EmptyState from '../shared/EmptyState';
import EvolucaoForm from './EvolucaoForm';
import PrescricaoForm from './PrescricaoForm';
import AnamneseForm from './AnamneseForm';
import type { SecaoProntuarioTipo, SecaoProntuario, Prescricao } from '../../types';
import { PdfPreviewModal } from '../pdf/PdfPreviewModal';

/** Converte uma Prescricao estruturada em SecaoProntuario para o gerador de PDF */
function prescricaoParaSecao(p: Prescricao): SecaoProntuario {
  return {
    id: p.id,
    atendimentoId: '',
    pacienteId: p.pacienteId,
    profissionalId: p.profissionalId,
    tipo: 'prescricao',
    titulo: 'Prescrição',
    conteudo: p.observacoes || '',
    dados: { itens: p.itens, observacoes: p.observacoes },
    criadoEm: p.data,
    atualizadoEm: p.data,
  };
}

// Tipos de seção disponíveis
const SECAO_TIPOS: { tipo: SecaoProntuarioTipo; label: string; icon: React.ElementType }[] = [
  { tipo: 'queixa_principal', label: 'Queixa Principal', icon: AlertCircle },
  { tipo: 'anamnese', label: 'Anamnese', icon: FileText },
  { tipo: 'exame_fisico', label: 'Exame Físico', icon: Stethoscope },
  { tipo: 'conduta', label: 'Conduta', icon: ClipboardList },
  { tipo: 'prescricao', label: 'Prescrição', icon: Pill },
  { tipo: 'solicitacao_exames', label: 'Solicitação de Exames', icon: TestTube },
  { tipo: 'atestado', label: 'Atestado', icon: FileCheck },
  { tipo: 'plano_tratamento', label: 'Plano de Tratamento', icon: ListChecks },
  { tipo: 'laudo', label: 'Laudo', icon: ScrollText },
];

export default function ProntuarioPage() {
  const pacientes = usePacienteStore(s => s.pacientes).filter(p => p.ativo);
  const selectedId = useAppStore(s => s.selectedPacienteId);
  const setSelected = useAppStore(s => s.setSelectedPaciente);
  const evolucoes = useProntuarioStore(s => s.evolucoes);
  const prescricoes = useProntuarioStore(s => s.prescricoes);
  const secoes = useProntuarioStore(s => s.secoes);
  const addSecao = useProntuarioStore(s => s.addSecao);
  const updateSecao = useProntuarioStore(s => s.updateSecao);
  const removeSecao = useProntuarioStore(s => s.removeSecao);
  const profissionais = useProfissionalStore(s => s.profissionais);

  const [search, setSearch] = useState('');
  const [secaoPdf, setSecaoPdf] = useState<SecaoProntuario | null>(null);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showEvolForm, setShowEvolForm] = useState(false);
  const [showPrescForm, setShowPrescForm] = useState(false);
  const [showAnamForm, setShowAnamForm] = useState(false);
  const [showHistorico, setShowHistorico] = useState(false);

  const filteredPacs = useMemo(() =>
    search.length >= 2
      ? pacientes.filter(p => matchSearch(p.nome, search) || matchSearch(p.cpf, search)).slice(0, 15)
      : pacientes.slice(0, 15),
    [pacientes, search]
  );

  const paciente = selectedId ? pacientes.find(p => p.id === selectedId) : null;
  const pacEvolucoes = selectedId ? evolucoes.filter(e => e.pacienteId === selectedId).sort((a, b) => b.data.localeCompare(a.data)) : [];
  const pacPrescricoes = selectedId ? prescricoes.filter(p => p.pacienteId === selectedId).sort((a, b) => b.data.localeCompare(a.data)) : [];
  const pacSecoes = selectedId ? secoes.filter(s => s.pacienteId === selectedId).sort((a, b) => b.criadoEm.localeCompare(a.criadoEm)) : [];

  const getProfName = (id: string) => profissionais.find(p => p.id === id)?.nome || '';
  const getSecaoIcon = (tipo: SecaoProntuarioTipo) => SECAO_TIPOS.find(s => s.tipo === tipo)?.icon || FileText;
  const getSecaoLabel = (tipo: SecaoProntuarioTipo) => SECAO_TIPOS.find(s => s.tipo === tipo)?.label || tipo;

  // Adicionar seção modular
  const handleAddSecao = (tipo: SecaoProntuarioTipo) => {
    if (!selectedId) return;
    const label = getSecaoLabel(tipo);
    addSecao({
      atendimentoId: '',
      pacienteId: selectedId,
      profissionalId: profissionais[0]?.id || '',
      tipo,
      titulo: label,
      conteudo: '',
    });
    setShowAddMenu(false);
  };

  // Seleção de paciente
  if (!paciente) {
    return (
      <div className="space-y-4 animate-fade-in">
        <div className="relative max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar paciente..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-bg-card text-sm text-gray-800 dark:text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50"
            autoFocus
          />
        </div>
        {filteredPacs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredPacs.map(p => (
              <button
                key={p.id}
                onClick={() => setSelected(p.id)}
                className="text-left bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-3 hover:border-accent/50 transition-colors"
              >
                <p className="font-medium text-gray-800 dark:text-text-primary">{p.nome}</p>
                <p className="text-xs text-gray-500 dark:text-text-secondary mt-0.5">
                  {p.dataNascimento ? calcularIdade(p.dataNascimento) : ''} · {evolucoes.filter(e => e.pacienteId === p.id).length} evoluções
                </p>
              </button>
            ))}
          </div>
        ) : (
          <EmptyState title="Selecione um paciente" description="Busque e selecione um paciente para ver o prontuário" />
        )}
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Cabeçalho do paciente */}
      <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <button onClick={() => setSelected(null)} className="text-xs text-accent hover:underline mb-1">
              ← Trocar paciente
            </button>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-text-primary">{paciente.nome}</h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-text-secondary mt-1">
              {paciente.dataNascimento && (
                <span>{calcularIdade(paciente.dataNascimento)} · {formatDate(paciente.dataNascimento)}</span>
              )}
              {paciente.sexo && <span>{paciente.sexo === 'M' ? 'Masculino' : paciente.sexo === 'F' ? 'Feminino' : 'Outro'}</span>}
              {paciente.telefone && <span>{paciente.telefone}</span>}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHistorico(!showHistorico)}
              className="px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-border hover:bg-gray-50 dark:hover:bg-bg-hover transition-colors text-gray-600 dark:text-text-secondary"
            >
              Histórico
            </button>
            {/* Menu adicionar seção */}
            <div className="relative">
              <button
                onClick={() => setShowAddMenu(!showAddMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm transition-colors"
              >
                <Plus size={14} /> Adicionar Seção <ChevronDown size={14} />
              </button>
              {showAddMenu && (
                <div className="absolute right-0 top-full mt-1 bg-white dark:bg-bg-secondary border border-gray-200 dark:border-border rounded-lg shadow-lg z-50 w-56 overflow-hidden">
                  {SECAO_TIPOS.map(({ tipo, label, icon: Icon }) => (
                    <button
                      key={tipo}
                      onClick={() => handleAddSecao(tipo)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-bg-hover text-left text-sm text-gray-700 dark:text-text-primary transition-colors"
                    >
                      <Icon size={16} className="text-gray-400 shrink-0" />
                      {label}
                    </button>
                  ))}
                  <div className="border-t border-gray-200 dark:border-border" />
                  <button
                    onClick={() => { setShowEvolForm(true); setShowAddMenu(false); }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-bg-hover text-left text-sm text-accent font-medium transition-colors"
                  >
                    <FileText size={16} className="shrink-0" /> Nova Evolução (SOAP)
                  </button>
                  <button
                    onClick={() => { setShowPrescForm(true); setShowAddMenu(false); }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-bg-hover text-left text-sm text-accent font-medium transition-colors"
                  >
                    <Pill size={16} className="shrink-0" /> Nova Prescrição
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Conteúdo principal */}
        <div className={`flex-1 min-w-0 space-y-3 ${showHistorico ? 'lg:pr-0' : ''}`}>
          {/* Seções modulares */}
          {pacSecoes.length === 0 && pacEvolucoes.length === 0 && pacPrescricoes.length === 0 ? (
            <EmptyState
              icon={ClipboardList}
              title="Prontuário vazio"
              description="Adicione seções para atender o paciente"
            />
          ) : (
            <>
              {/* Seções modulares */}
              {pacSecoes.map(secao => {
                const Icon = getSecaoIcon(secao.tipo);
                return (
                  <div key={secao.id} className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Icon size={16} className="text-accent" />
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-text-primary">{secao.titulo}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{formatDate(secao.criadoEm.split('T')[0])}</span>
                        {(['prescricao', 'laudo', 'solicitacao_exames'] as SecaoProntuarioTipo[]).includes(secao.tipo) && (
                          <button
                            onClick={() => setSecaoPdf(secao)}
                            title="Gerar PDF"
                            className="p-1.5 rounded hover:bg-accent/10 text-accent"
                          >
                            <FileText size={15} />
                          </button>
                        )}
                        <button
                          onClick={() => removeSecao(secao.id)}
                          className="p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors"
                          title="Remover seção"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                    <textarea
                      value={secao.conteudo}
                      onChange={e => updateSecao(secao.id, { conteudo: e.target.value })}
                      placeholder={`Preencha ${secao.titulo.toLowerCase()}...`}
                      className="w-full min-h-[100px] px-3 py-2 rounded-lg border border-gray-200 dark:border-border bg-gray-50 dark:bg-bg-secondary text-sm text-gray-700 dark:text-text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent resize-y"
                    />
                  </div>
                );
              })}

              {/* Prescrições estruturadas */}
              {pacPrescricoes.map(p => (
                <div key={p.id} className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Pill size={16} className="text-orange-500" />
                      <span className="text-sm font-semibold text-gray-800 dark:text-text-primary">Prescrição</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{formatDate(p.data)}</span>
                      <span className="text-xs text-gray-500 dark:text-text-secondary">{getProfName(p.profissionalId)}</span>
                      <button
                        onClick={() => setSecaoPdf(prescricaoParaSecao(p))}
                        title="Gerar PDF"
                        className="p-1.5 rounded hover:bg-accent/10 text-accent"
                      >
                        <FileText size={15} />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {p.itens.map((it, idx) => (
                      <div key={it.id} className="text-sm text-gray-700 dark:text-text-secondary">
                        <span className="font-medium text-gray-800 dark:text-text-primary">{idx + 1}. {it.medicamento}</span>
                        {it.dosagem && <span className="text-gray-500"> · {it.dosagem}</span>}
                        {it.posologia && <span className="text-gray-400 text-xs"> — {it.posologia}</span>}
                      </div>
                    ))}
                  </div>
                  {p.observacoes && (
                    <p className="text-xs text-gray-400 mt-2">{p.observacoes}</p>
                  )}
                </div>
              ))}

              {/* Evoluções SOAP existentes */}
              {pacEvolucoes.map(e => (
                <div key={e.id} className="bg-white dark:bg-bg-card rounded-xl border border-gray-200 dark:border-border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-teal-500" />
                      <span className="text-sm font-semibold text-gray-800 dark:text-text-primary">Evolução SOAP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{formatDate(e.data)}</span>
                      <span className="text-xs text-gray-500 dark:text-text-secondary">{getProfName(e.profissionalId)}</span>
                    </div>
                  </div>
                  {e.cidCodigos.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {e.cidCodigos.map((c, i) => (
                        <span key={i} className="text-[10px] px-1.5 py-0.5 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded-full">{c}</span>
                      ))}
                    </div>
                  )}
                  <div className="space-y-1 text-sm">
                    {e.subjetivo && <div><span className="font-semibold text-gray-500">S:</span> <span className="text-gray-700 dark:text-text-secondary">{e.subjetivo}</span></div>}
                    {e.objetivo && <div><span className="font-semibold text-gray-500">O:</span> <span className="text-gray-700 dark:text-text-secondary">{e.objetivo}</span></div>}
                    {e.avaliacao && <div><span className="font-semibold text-gray-500">A:</span> <span className="text-gray-700 dark:text-text-secondary">{e.avaliacao}</span></div>}
                    {e.plano && <div><span className="font-semibold text-gray-500">P:</span> <span className="text-gray-700 dark:text-text-secondary">{e.plano}</span></div>}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Sidebar Histórico */}
        {showHistorico && (
          <div className="hidden lg:block w-72 shrink-0">
            <div className="bg-white dark:bg-bg-card border border-gray-200 dark:border-border rounded-xl p-4 sticky top-4">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-text-primary mb-3">Histórico</h3>
              <div className="space-y-2 max-h-[60vh] overflow-y-auto">
                {pacEvolucoes.length === 0 && pacPrescricoes.length === 0 && pacSecoes.length === 0 ? (
                  <p className="text-xs text-gray-400 text-center py-4">Nenhum registro</p>
                ) : (
                  <>
                    {pacEvolucoes.map(e => (
                      <div key={e.id} className="p-2 rounded-lg bg-gray-50 dark:bg-bg-secondary">
                        <div className="flex items-center gap-2">
                          <FileText size={12} className="text-teal-500" />
                          <span className="text-xs font-medium text-gray-700 dark:text-text-primary">Evolução</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-0.5">{formatDate(e.data)} · {getProfName(e.profissionalId)}</p>
                      </div>
                    ))}
                    {pacPrescricoes.map(p => (
                      <div key={p.id} className="p-2 rounded-lg bg-gray-50 dark:bg-bg-secondary">
                        <div className="flex items-center gap-2">
                          <Pill size={12} className="text-orange-500" />
                          <span className="text-xs font-medium text-gray-700 dark:text-text-primary">Prescrição</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-0.5">{formatDate(p.data)} · {p.itens.length} itens</p>
                      </div>
                    ))}
                    {pacSecoes.map(s => (
                      <div key={s.id} className="p-2 rounded-lg bg-gray-50 dark:bg-bg-secondary">
                        <div className="flex items-center gap-2">
                          <ClipboardList size={12} className="text-accent" />
                          <span className="text-xs font-medium text-gray-700 dark:text-text-primary">{s.titulo}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-0.5">{formatDate(s.criadoEm.split('T')[0])}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Forms modais */}
      {showEvolForm && <EvolucaoForm pacienteId={selectedId!} onClose={() => setShowEvolForm(false)} />}
      {showPrescForm && <PrescricaoForm pacienteId={selectedId!} onClose={() => setShowPrescForm(false)} />}
      {showAnamForm && <AnamneseForm pacienteId={selectedId!} onClose={() => setShowAnamForm(false)} />}

      {/* Modal PDF */}
      {secaoPdf && paciente && (
        <PdfPreviewModal
          secao={secaoPdf}
          paciente={paciente}
          profissional={profissionais.find(p => p.id === secaoPdf.profissionalId) ?? profissionais[0]}
          onClose={() => setSecaoPdf(null)}
        />
      )}
    </div>
  );
}
