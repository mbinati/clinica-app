# Mapeamento Completo — Clínica nas Nuvens
## Capturado em 10/03/2026

---

## 1. HEADER (Global)
- Logo → link para /boas-vindas
- Toggle sidebar (hamburger)
- "Busca rápida" (modal de busca global)
- Chat de suporte (Intercom)
- Notificações (sino)
- Seletor de empresa: "AIME FONOAUDIOLOGIA LTDA" + unidade "Centro Médico Pescop - Riviera"
- Avatar/nome: "Bruna V. De Maria"
- Menu dropdown: Meu perfil, Minha clínica, Atividades agendadas, Sobre, Ajuda, Acesso de suporte, Sair

---

## 2. MENU LATERAL (SIDEBAR) — Agrupado por seções

### Indicadores (Dashboard)
- Atendimento, Financeiro, Orçamento, Plano de tratamento, Estoque

### Pacientes (link direto)

### Agenda
- Agendamentos, Agendas a confirmar, Lista de espera, Disponibilidade, Alterações em massa, Aniversariantes

### Atendimento
- Atendimentos do dia

### Caixa
- Abertura e fechamento, Faturamento, Pagar e receber, Movimentos, Caixas fechados

### Financeiro
- **Operações**: Atendimentos a faturar, Pagar e receber, Movimentações financeiras, Faturamento de comissões, Carteiras dos pacientes, Transferências entre contas, Renegociação de títulos
- **Conciliações**: Contas bancárias, Cartões e cheques, Antecipação de cartões
- **Boletos**: Remessas, Importação de retorno
- **Notas fiscais**: NFS-e, Inutilizar NFs, Pagamentos sem NFS-e
- **Análise financeira**: Fluxo de Caixa, DRE
- **Auditoria**: Estornos, Integração de pagamentos
- Clientes e fornecedores

### Comercial
- Orçamentos

### Plano de tratamento
- Monitoramento de tratamentos, Autorizações de tratamento

### Estoque
- Movimentos, Entrada via NF-e, Pedido de compras, Fechamento, Produtos

### Marketplace / Nuvem Educa

### Relatórios (extenso — 60+ submenus)
### Configurações (extenso — 80+ submenus)

---

## 3. AGENDA — /agenda/index

### Estrutura
- Título: "Agenda"
- Botão principal: **"Adicionar"** (novo agendamento)
- Calendário: FullCalendar (time grid)
- Horários: 00:00 a 23:30, intervalos de 30 min

### Visões
- **Hoje** (botão de reset)
- **Mês** / **Semana** / **Dia** (botões de toggle)
- **Agendas agrupadas** (toggle)
- **Lista por profissional** / **Lista por paciente** / **Lista por horário**

### Filtros
- Tipo: Paciente ou Profissional
- Autocomplete: Nome, Sobrenome, CPF/CNPJ, N° controle, Nome civil
- Unidade: select de clínicas
- Botão "Pesquisar"
- Datepicker inline (Março 2026)

### Formato do evento
- Horário: "09:00"
- Info: "Lurdes Zanotto / Bruna V. De Maria / Particular / Consulta"
- Visão expandida: "9:00 - 10:00" + nome do paciente

### Cores dos status
- `rgb(205, 250, 250)` = Confirmado / Presente (ciano claro)
- `rgb(231, 231, 231)` = Agendado / Pendente (cinza claro)
- `rgb(143, 239, 188)` = Finalizado (verde claro)

### Motivos de exclusão
- Erro de agendamento, Agendamento duplicado, Agendamento de teste, Reorganização

### Agendamentos de hoje (exemplo)
1. 09:00-10:00 — Lurdes Zanotto / Bruna V. De Maria / Particular / Consulta
2. 10:15-11:15 — Isabela dos Santos Lorenz / Bruna V. De Maria / Particular / Consulta
3. 11:30-13:00 — MAYSA COPPI MATHIAS / Bruna V. De Maria / Particular / Consulta
4. 13:30-14:30 — Sara / Bruna V. De Maria / Particular / Consulta

---

## 4. PACIENTES — /pacientes

### Lista
- Título: "Lista de pacientes"
- Botão: **"Adicionar paciente"**
- Busca: "Pesquisar..."
- Filtro sexo: Masculino, Feminino

### Colunas da tabela
| Nome do paciente / N° controle | Idade | Telefone | E-mail | Situação | Opções |
- Opções: Editar

### Formulário de cadastro (/paciente/novo) — 4 abas

#### Aba 1: Dados do paciente
**Dados pessoais:**
- Ativo na clínica? (toggle)
- Nome civil completo * (obrigatório)
- Nome social completo
- Data de nascimento * (obrigatório)
- Sexo * (Masculino / Feminino — obrigatório)
- Gênero
- Estrangeiro? (toggle → mostra NIF, País, etc.)
- CPF/CNPJ
- RG + Órgão expedidor
- Número de identificação
- Número de controle
- Nacionalidade

**Informações de contato:**
- E-mail
- Telefone celular
- Telefone residencial + Ramal
- Telefone comercial + Ramal
- Telefone para recados + Ramal
- Skype

**Endereço:**
- CEP → auto-preenche cidade/bairro
- Endereço, Número, Complemento, Bairro, Cidade

**Financeiro:**
- Responsável financeiro

#### Aba 2: Planos de convênio
- Plano de convênio (select)
- Carteirinha
- CNS (SUS)

#### Aba 3: Dados complementares
- Fator sanguíneo
- Etnia
- Estado civil
- Nome do cônjuge
- Nome da mãe
- Nome do pai
- Responsável
- Hobby
- Escolaridade
- Profissão / Ocupação

#### Aba 4: Informações de marketing
- Indicação
- Origem do paciente
- Notificações de aniversário (email, SMS, WhatsApp)

---

## 5. ATENDIMENTO / PRONTUÁRIO

### Tela "Atendimentos do dia" — /atendimento/listar
- Botão: **"Atender sem agendamento"**
- Botão: **"Hoje"** (data)
- Ordenação: Pelo agendamento, Pela espera, Pela situação
- Busca: Nome, Sobrenome, CPF/CNPJ, N° controle, Nome civil

### Cards de pacientes do dia
- Lista de pacientes agendados com botões: **Ir para prontuário**, **Transferir**, **Confirmar**
- Tempo de espera visível: "há 13min", "há 55d22h08min"

### Tela do Prontuário — /atendimento/{id}
- **Cabeçalho**: Nome do paciente, idade, data nascimento
- **Sidebar direita**: Anexos, Histórico completo

#### Seções do prontuário (modulares)
- **Anamnese** (questionários importáveis)
- **Atestado**
- **Conduta**
- **Exame físico** (inclui Tabela IMC: Infantil, Adulto, Idoso)
- **Prescrição** (integração Memed)
- **Proposta de plano de tratamento**
- **Queixa principal**
- **Solicitação de exames**
- **Laudo**
- **Históricos** (acessos anteriores)

Nota: "Adicione seções para atender o paciente" — as seções são modulares e configuráveis

---

## 6. FINANCEIRO

### Indicadores financeiros — /financeiro/indicadores
- Filtro por período (Data inicial / final)
- Cards KPI:
  - **Receitas** (valor total)
  - **Despesas** (valor total)
  - **Faturamento Top 10** (gráfico)
  - **Movimentação nos últimos 12 meses** (gráfico)
- 188 elementos de gráfico (ApexCharts)

### Atendimentos a faturar — /faturacao/lista
- Colunas: Situação/Origem | Paciente | Data | Profissional | Procedimentos | Valor Paciente | Valor Convênio | Opções
- Filtros: Pesquisar, Selecione o paciente

### Pagar e receber — /lancamentos/emAberto
- Botões: **"Adicionar nova conta"**, **"Exibir valores"**
- Colunas: Detalhes | Cód. fatur. | Origem | Categoria | Cliente/Fornecedor | Vencimento | Valor em aberto (R$) | Situação | Opções
- Filtros:
  - Tipo: Cliente/Fornecedor ou Cód. faturamento
  - Pesquisa: Nome, Sobrenome, CPF/CNPJ, N° Identificação
  - Filtro rápido: Todas, Vencidas
  - Tipo data: Vencimento, Emissão, Competência
  - Tipo: Todos, Pagar, Receber

---

## 7. INDICADORES DE ATENDIMENTO — /indicador/atendimento/

### KPIs / Cards
- **Agendamentos por situação**: Gráfico pizza — Comparecimento 52.05%, No show 0.44%
- **Atendimento por convênio**: Particular vs Convênios (Total: 150)
- **Pacientes**: Masculino 51.8% vs Feminino 48.2% (Total: 83)
- **Agendamentos x Atendimentos**: Gráfico 12 meses (Agendamentos vs Finalizados)
- **Pós-consultas**: Em aberto
- **Aniversariantes**: Hoje
- **Lista de espera**: Total
- Filtro: Período ("Desde o início" ou Personalizado)

---

## 8. USUÁRIOS E PROFISSIONAIS — /usuarios

### Lista
- Botão: **"Adicionar usuário"**
- Filtros: Clínica (select), Situação (Todos, Ativo, Inativo)

### Tabela de Usuários
| Detalhes | Nome / E-mail | Profissão | Clínicas | Situação | Opções |

### Tabela de Profissionais
| Detalhes | Nome do profissional | Profissão | Conselho | Especialidade | Clínicas | Opções |

- Total: 9 registros

---

## 9. MOTOR DE TRABALHO (Fluxo principal)

### Fluxo de atendimento
1. **Agenda** → Criar agendamento (paciente + profissional + tipo + horário)
2. **Confirmação** → Status: Agendado → Confirmado (pode ser por SMS/WhatsApp)
3. **Check-in** → Paciente chega → Status: Presente (sala de espera com timer)
4. **Atendimento** → Profissional inicia → Abre prontuário
5. **Prontuário** → Preenche seções (anamnese, conduta, prescrição, etc.)
6. **Finalização** → Atendimento finalizado
7. **Faturamento** → Atendimento aparece em "Atendimentos a faturar"
8. **Pagamento** → Gera conta em "Pagar e receber"

### Status de agendamento (cores)
- Agendado (cinza) → Confirmado (ciano) → Presente → Em atendimento → Finalizado (verde)
- No show (vermelho) → Cancelado

### Modelo de dados simplificado
- **Paciente**: dados pessoais, contato, endereço, convênio, marketing
- **Profissional**: nome, profissão, conselho, especialidade, clínica
- **Agendamento**: paciente + profissional + data/hora + tipo + convênio + status
- **Atendimento**: agendamento → prontuário (seções modulares)
- **Faturamento**: atendimento → valor paciente + valor convênio → conta
- **Financeiro**: contas a pagar/receber, categorias, vencimento, situação

---

## 10. COMPARAÇÃO COM AIMÊ ATUAL

### Módulos que JÁ temos implementados:
- Dashboard (básico)
- Agenda (FullCalendar)
- Pacientes (CRUD + busca)
- Prontuário (Anamnese)
- Faturamento (básico)
- Profissionais (CRUD)
- Catálogo de Serviços
- Usuários (auth + CRUD)

### O que FALTA para igualar ao Clínica nas Nuvens:
1. **Agenda**: Visões lista (por profissional/paciente/horário), cores de status, motivos de exclusão
2. **Pacientes**: Abas (convênio, dados complementares, marketing), mais campos (estrangeiro, responsável financeiro)
3. **Prontuário**: Seções modulares (conduta, exame físico, prescrição, laudo, solicitação exames)
4. **Financeiro**: Pagar/Receber completo, indicadores com gráficos, fluxo de caixa, DRE
5. **Atendimento**: Tela de "Atendimentos do dia" com check-in, timer de espera
6. **Indicadores**: Dashboard com gráficos ApexCharts (agendamentos, convênios, pacientes)
7. **Caixa**: Abertura/fechamento, movimentos
8. **Relatórios**: Sistema de relatórios (futuro)
9. **Configurações**: Tipos de atendimento, modelos de prontuário, formas de pagamento
