import { Validators } from '@angular/forms';
export const FIELDS = [
    {
        id: 'nomeAgentePagamento',
        label: 'Agente de Pagamento (Nome Simplificado):',
        type: 'string',
        defaultValue: null,
    },
    {
        id: 'contaAgentePagamento',
        label: 'Agente de Pagamento (Código):',
        type: 'string',
        defaultValue: null,
    },
    {
        id: 'nomeEmissor',
        label: 'Registrador/Emissor (Nome Simplificado):',
        type: 'string',
        defaultValue: null,
    },
    {
        id: 'contaEmissor',
        label: 'Registrador/Emissor (Código):',
        type: 'string',
        defaultValue: null,
    },
    {
        id: 'tipoIF',
        label: 'Tipo IF:',
        type: 'select',
        options:  [{ id: 1, descricao: 'CDB' }, { id: 1, descricao: 'LF' }] ,
    },
    {
        id: 'situacaoIF',
        label: 'Situação do Instrumento Financeiro:',
        type: 'select',
        options: [{ id: 1, descricao: 'CONFIRMACAO' }, { id: 1, descricao: 'PENDENTE' }] ,
    },
    {
        id: 'codigoIF',
        label: 'Cofigo IF:',
        type: 'string',
        defaultValue: null,
        validator: {validators: [Validators.required, Validators.minLength(11)]}
    },
    {
        id: 'tipoEvento',
        label: 'Tipo Evento:',
        type: 'select',
        options: [{ id: 1, descricao: 'JUROS' }, { id: 2, descricao: 'AMORTIZACAO' }, { id: 3, descricao: 'VENCIMENTO(RESGATE)' }]
    },
    {
        id: 'situacaoEvento',
        label: 'Situacao Evento:',
        type: 'select',
        options: [{ id: 0, descricao: 'EVENTO NAO PROCESSADO' }, { id: 1, descricao: 'EVENTO FINALIZADO' }, { id: 9, descricao: 'INFORMAR PU' }] 
    },
    {
        id: 'dataDeAteEvento',
        label: 'Data do Evento:',
        type: 'IMyDateModel',
        date: {
            isRange: true, 
            singleDate: null, 
            dateRange: {
              beginJsDate: {begin: new Date()},
              endJsDate: {end: new Date()}
            }
          }
    },
];
