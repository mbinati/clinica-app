import type { Procedimento } from '../types';

export const defaultProcedimentos: Procedimento[] = [
  { id: 'proc-1', codigo: '10101012', nome: 'Consulta em consultorio', categoria: 'Consulta', valorParticular: 250, ativo: true },
  { id: 'proc-2', codigo: '10101020', nome: 'Consulta de retorno', categoria: 'Consulta', valorParticular: 150, ativo: true },
  { id: 'proc-3', codigo: '10102019', nome: 'Consulta de urgencia', categoria: 'Consulta', valorParticular: 350, ativo: true },
  { id: 'proc-4', codigo: '20101015', nome: 'Hemograma completo', categoria: 'Exame', valorParticular: 35, ativo: true },
  { id: 'proc-5', codigo: '20101023', nome: 'Glicose', categoria: 'Exame', valorParticular: 15, ativo: true },
  { id: 'proc-6', codigo: '20101031', nome: 'Colesterol total', categoria: 'Exame', valorParticular: 20, ativo: true },
  { id: 'proc-7', codigo: '20101040', nome: 'Triglicerides', categoria: 'Exame', valorParticular: 20, ativo: true },
  { id: 'proc-8', codigo: '30101012', nome: 'Eletrocardiograma', categoria: 'Procedimento', valorParticular: 80, ativo: true },
  { id: 'proc-9', codigo: '30101020', nome: 'Raio-X de torax', categoria: 'Procedimento', valorParticular: 90, ativo: true },
  { id: 'proc-10', codigo: '30101039', nome: 'Ultrassonografia abdominal', categoria: 'Procedimento', valorParticular: 200, ativo: true },
  { id: 'proc-11', codigo: '40101010', nome: 'Curativo simples', categoria: 'Procedimento', valorParticular: 60, ativo: true },
  { id: 'proc-12', codigo: '40101029', nome: 'Retirada de pontos', categoria: 'Procedimento', valorParticular: 50, ativo: true },
];
