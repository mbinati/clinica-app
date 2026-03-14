import { useState, useEffect } from 'react';
import Modal from '../shared/Modal';
import FormField, { inputClass, selectClass } from '../shared/FormField';
import MaskedInput from '../shared/MaskedInput';
import { usePacienteStore } from '../../stores/usePacienteStore';
import { useCatalogoStore } from '../../stores/useCatalogoStore';
import type { Paciente } from '../../types';

type TabId = 'dados' | 'convenio' | 'complementar' | 'marketing';

const tabs: { id: TabId; label: string }[] = [
  { id: 'dados', label: 'Dados Pessoais' },
  { id: 'convenio', label: 'Convênio' },
  { id: 'complementar', label: 'Complementar' },
  { id: 'marketing', label: 'Marketing' },
];

const emptyPaciente = (): Omit<Paciente, 'id' | 'criadoEm' | 'atualizadoEm' | 'ativo'> => ({
  nome: '',
  cpf: '',
  rg: '',
  dataNascimento: '',
  sexo: 'F',
  telefone: '',
  telefone2: '',
  email: '',
  endereco: { logradouro: '', numero: '', complemento: '', bairro: '', cidade: '', uf: '', cep: '' },
  convenioId: null,
  numeroCarteirinha: '',
  observacoes: '',
  // Campos expandidos
  nomeSocial: '',
  genero: '',
  estrangeiro: false,
  orgaoExpedidorRg: '',
  nacionalidade: '',
  telefoneResidencial: '',
  telefoneComercial: '',
  telefoneRecados: '',
  fatorSanguineo: '',
  etnia: '',
  estadoCivil: '',
  nomeConjuge: '',
  nomeMae: '',
  nomePai: '',
  responsavel: '',
  hobby: '',
  escolaridade: '',
  profissao: '',
  responsavelFinanceiro: '',
  indicacao: '',
  origemPaciente: '',
  cns: '',
});

interface PacienteFormProps {
  editId: string | null;
  onClose: () => void;
}

export default function PacienteForm({ editId, onClose }: PacienteFormProps) {
  const addPaciente = usePacienteStore(s => s.addPaciente);
  const updatePaciente = usePacienteStore(s => s.updatePaciente);
  const pacientes = usePacienteStore(s => s.pacientes);
  const convenios = useCatalogoStore(s => s.convenios).filter(c => c.ativo);

  const existing = editId ? pacientes.find(p => p.id === editId) : null;
  const [form, setForm] = useState(emptyPaciente);
  const [activeTab, setActiveTab] = useState<TabId>('dados');

  useEffect(() => {
    if (existing) {
      const { id, criadoEm, atualizadoEm, ativo, ...rest } = existing;
      setForm({ ...emptyPaciente(), ...rest });
    }
  }, [existing]);

  const set = (field: string, value: any) => {
    setForm(prev => {
      if (field.startsWith('endereco.')) {
        const key = field.split('.')[1];
        return { ...prev, endereco: { ...prev.endereco, [key]: value } };
      }
      return { ...prev, [field]: value };
    });
  };

  const handleSave = () => {
    if (!form.nome.trim()) return;
    if (editId) {
      updatePaciente(editId, form);
    } else {
      addPaciente(form);
    }
    onClose();
  };

  return (
    <Modal open onClose={onClose} title={editId ? 'Editar Paciente' : 'Novo Paciente'} wide>
      <div className="space-y-4">
        {/* Abas */}
        <div className="flex border-b border-gray-200 dark:border-border overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-gray-500 dark:text-text-secondary hover:text-gray-700 dark:hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Conteúdo das abas */}
        {activeTab === 'dados' && <TabDadosPessoais form={form} set={set} />}
        {activeTab === 'convenio' && <TabConvenio form={form} set={set} convenios={convenios} />}
        {activeTab === 'complementar' && <TabComplementar form={form} set={set} />}
        {activeTab === 'marketing' && <TabMarketing form={form} set={set} />}

        {/* Botões */}
        <div className="flex gap-3 justify-end pt-2 border-t border-gray-200 dark:border-border">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-bg-primary hover:bg-gray-200 dark:hover:bg-bg-hover text-gray-600 dark:text-text-secondary transition-colors">
            Cancelar
          </button>
          <button onClick={handleSave} className="px-4 py-2 rounded-lg text-sm bg-accent hover:bg-accent-hover text-white transition-colors">
            {editId ? 'Salvar' : 'Cadastrar'}
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ─── Aba 1: Dados Pessoais ───
function TabDadosPessoais({ form, set }: { form: any; set: (f: string, v: any) => void }) {
  return (
    <div className="space-y-4">
      {/* Dados pessoais */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dados pessoais</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormField label="Nome completo" required className="sm:col-span-2">
          <input value={form.nome} onChange={e => set('nome', e.target.value)} className={inputClass} placeholder="Nome civil completo" autoFocus />
        </FormField>
        <FormField label="Nome social" className="sm:col-span-2">
          <input value={form.nomeSocial || ''} onChange={e => set('nomeSocial', e.target.value)} className={inputClass} placeholder="Nome social (opcional)" />
        </FormField>
        <FormField label="Data de nascimento" required>
          <input type="date" value={form.dataNascimento} onChange={e => set('dataNascimento', e.target.value)} className={inputClass} />
        </FormField>
        <FormField label="Sexo" required>
          <select value={form.sexo} onChange={e => set('sexo', e.target.value)} className={selectClass}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </FormField>
        <FormField label="Gênero">
          <input value={form.genero || ''} onChange={e => set('genero', e.target.value)} className={inputClass} placeholder="Gênero" />
        </FormField>
        <FormField label="Nacionalidade">
          <input value={form.nacionalidade || ''} onChange={e => set('nacionalidade', e.target.value)} className={inputClass} placeholder="Brasileiro(a)" />
        </FormField>
        <FormField label="CPF">
          <MaskedInput value={form.cpf} onChange={v => set('cpf', v)} mask="cpf" />
        </FormField>
        <FormField label="RG">
          <input value={form.rg} onChange={e => set('rg', e.target.value)} className={inputClass} placeholder="RG" />
        </FormField>
        <FormField label="Órgão expedidor">
          <input value={form.orgaoExpedidorRg || ''} onChange={e => set('orgaoExpedidorRg', e.target.value)} className={inputClass} placeholder="SSP/SP" />
        </FormField>
      </div>

      {/* Contato */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider pt-2">Contato</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormField label="Telefone celular" required>
          <MaskedInput value={form.telefone} onChange={v => set('telefone', v)} mask="phone" />
        </FormField>
        <FormField label="Telefone 2">
          <MaskedInput value={form.telefone2} onChange={v => set('telefone2', v)} mask="phone" />
        </FormField>
        <FormField label="Tel. residencial">
          <MaskedInput value={form.telefoneResidencial || ''} onChange={v => set('telefoneResidencial', v)} mask="phone" />
        </FormField>
        <FormField label="Tel. comercial">
          <MaskedInput value={form.telefoneComercial || ''} onChange={v => set('telefoneComercial', v)} mask="phone" />
        </FormField>
        <FormField label="Email" className="sm:col-span-2">
          <input type="email" value={form.email} onChange={e => set('email', e.target.value)} className={inputClass} placeholder="email@exemplo.com" />
        </FormField>
      </div>

      {/* Endereço */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider pt-2">Endereço</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <FormField label="CEP">
          <MaskedInput value={form.endereco.cep} onChange={v => set('endereco.cep', v)} mask="cep" />
        </FormField>
        <FormField label="Logradouro" className="sm:col-span-2">
          <input value={form.endereco.logradouro} onChange={e => set('endereco.logradouro', e.target.value)} className={inputClass} placeholder="Rua, Av..." />
        </FormField>
        <FormField label="Número">
          <input value={form.endereco.numero} onChange={e => set('endereco.numero', e.target.value)} className={inputClass} />
        </FormField>
        <FormField label="Complemento">
          <input value={form.endereco.complemento} onChange={e => set('endereco.complemento', e.target.value)} className={inputClass} />
        </FormField>
        <FormField label="Bairro">
          <input value={form.endereco.bairro} onChange={e => set('endereco.bairro', e.target.value)} className={inputClass} />
        </FormField>
        <FormField label="Cidade">
          <input value={form.endereco.cidade} onChange={e => set('endereco.cidade', e.target.value)} className={inputClass} />
        </FormField>
        <FormField label="UF">
          <input value={form.endereco.uf} onChange={e => set('endereco.uf', e.target.value)} className={inputClass} maxLength={2} placeholder="SP" />
        </FormField>
      </div>

      {/* Financeiro */}
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider pt-2">Financeiro</p>
      <FormField label="Responsável financeiro">
        <input value={form.responsavelFinanceiro || ''} onChange={e => set('responsavelFinanceiro', e.target.value)} className={inputClass} placeholder="Nome do responsável financeiro" />
      </FormField>

      {/* Observações */}
      <FormField label="Observações">
        <textarea value={form.observacoes} onChange={e => set('observacoes', e.target.value)} className={`${inputClass} resize-none`} rows={3} />
      </FormField>
    </div>
  );
}

// ─── Aba 2: Convênio ───
function TabConvenio({ form, set, convenios }: { form: any; set: (f: string, v: any) => void; convenios: any[] }) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Plano de convênio</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormField label="Convênio">
          <select value={form.convenioId || ''} onChange={e => set('convenioId', e.target.value || null)} className={selectClass}>
            <option value="">Particular</option>
            {convenios.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
          </select>
        </FormField>
        <FormField label="Número da carteirinha">
          <input value={form.numeroCarteirinha} onChange={e => set('numeroCarteirinha', e.target.value)} className={inputClass} placeholder="Número da carteirinha" />
        </FormField>
        <FormField label="CNS (Cartão SUS)">
          <input value={form.cns || ''} onChange={e => set('cns', e.target.value)} className={inputClass} placeholder="Número do Cartão Nacional de Saúde" />
        </FormField>
      </div>
    </div>
  );
}

// ─── Aba 3: Dados Complementares ───
function TabComplementar({ form, set }: { form: any; set: (f: string, v: any) => void }) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dados complementares</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormField label="Fator sanguíneo">
          <select value={form.fatorSanguineo || ''} onChange={e => set('fatorSanguineo', e.target.value)} className={selectClass}>
            <option value="">Selecione</option>
            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(f => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Etnia">
          <select value={form.etnia || ''} onChange={e => set('etnia', e.target.value)} className={selectClass}>
            <option value="">Selecione</option>
            {['Branca', 'Preta', 'Parda', 'Amarela', 'Indígena', 'Outra'].map(e => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Estado civil">
          <select value={form.estadoCivil || ''} onChange={e => set('estadoCivil', e.target.value)} className={selectClass}>
            <option value="">Selecione</option>
            {['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável', 'Separado(a)'].map(ec => (
              <option key={ec} value={ec}>{ec}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Escolaridade">
          <select value={form.escolaridade || ''} onChange={e => set('escolaridade', e.target.value)} className={selectClass}>
            <option value="">Selecione</option>
            {['Fundamental incompleto', 'Fundamental completo', 'Médio incompleto', 'Médio completo', 'Superior incompleto', 'Superior completo', 'Pós-graduação', 'Mestrado', 'Doutorado'].map(esc => (
              <option key={esc} value={esc}>{esc}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Profissão / Ocupação">
          <input value={form.profissao || ''} onChange={e => set('profissao', e.target.value)} className={inputClass} placeholder="Profissão" />
        </FormField>
        <FormField label="Nome do cônjuge">
          <input value={form.nomeConjuge || ''} onChange={e => set('nomeConjuge', e.target.value)} className={inputClass} />
        </FormField>
        <FormField label="Nome da mãe">
          <input value={form.nomeMae || ''} onChange={e => set('nomeMae', e.target.value)} className={inputClass} />
        </FormField>
        <FormField label="Nome do pai">
          <input value={form.nomePai || ''} onChange={e => set('nomePai', e.target.value)} className={inputClass} />
        </FormField>
        <FormField label="Responsável">
          <input value={form.responsavel || ''} onChange={e => set('responsavel', e.target.value)} className={inputClass} placeholder="Responsável pelo paciente" />
        </FormField>
        <FormField label="Hobby">
          <input value={form.hobby || ''} onChange={e => set('hobby', e.target.value)} className={inputClass} />
        </FormField>
      </div>
    </div>
  );
}

// ─── Aba 4: Marketing ───
function TabMarketing({ form, set }: { form: any; set: (f: string, v: any) => void }) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Informações de marketing</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormField label="Indicação">
          <input value={form.indicacao || ''} onChange={e => set('indicacao', e.target.value)} className={inputClass} placeholder="Quem indicou o paciente" />
        </FormField>
        <FormField label="Origem do paciente">
          <select value={form.origemPaciente || ''} onChange={e => set('origemPaciente', e.target.value)} className={selectClass}>
            <option value="">Selecione</option>
            {['Google', 'Instagram', 'Facebook', 'Indicação', 'Convênio', 'Outros'].map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </FormField>
      </div>
    </div>
  );
}
