import { IEvento } from './IEvento';

export const HEROES: IEvento[] = [
  {
    id: 17,
    dataEfetivacao:
    {
      isRange: false,
      singleDate: {
        date: {
          year: 2022,
          month: 5,
          day: 14
        }
      }
    },
    dataOriginal:
    {
      isRange: false,
      singleDate: {
        date: {
          year: 2022,
          month: 5,
          day: 14
        }
      }
    },
    dataLiquidacao:
    {
      isRange: false,
      singleDate: {
        date: {
          year: 2022,
          month: 5,
          day: 14
        }
      }
    }
    ,
    tipoIf: 'CDB',
    codigoIf: 'CDB120014M7',
    tipoEvento: { id: 3, descricao: 'VENCIMENTO (RESGATE)' },
    incorporaJuros: false,
    taxa: 0,
    pu: 0,
    puJurosSobreAmortizacao: 0,
    valorResidualUnitario: 0,
    registradorOuEmissor: 'MAXIMABC',
    agentePagamento: 'MAXIMABC'
  }
];
