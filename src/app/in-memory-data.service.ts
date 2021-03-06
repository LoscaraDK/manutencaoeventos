import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { IEvento } from './IEvento';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const eventos: IEvento[] = [
      {
        id: 1,
        dataEfetivacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataOriginal:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataLiquidacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        tipoIf: 'CDB',
        codigoIf: 'CDB120014M7',
        tipoEvento: { id: 1, descricao: 'JUROS' },
        incorporaJuros: false,
        taxa: 0,
        pu: 0,
        puJurosSobreAmortizacao: 0,
        valorResidualUnitario: 0,
        registradorOuEmissor: 'MAXIMABC',
        agentePagamento: 'MAXIMABC'
      },
      {
        id: 2,
        dataEfetivacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataOriginal:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataLiquidacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        tipoIf: 'CDB',
        codigoIf: 'CDB120014M7',
        tipoEvento: { id: 2, descricao: 'AMORTIZACAO' },
        incorporaJuros: true,
        taxa: 10.0000,
        pu: 0,
        puJurosSobreAmortizacao: 0,
        valorResidualUnitario: 0,
        registradorOuEmissor: 'MAXIMABC',
        agentePagamento: 'MAXIMABC'
      },
      {
        id: 3,
        dataEfetivacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataOriginal:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataLiquidacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        tipoIf: 'CDB',
        codigoIf: 'CDB120014M7',
        tipoEvento: { id: 1, descricao: 'JUROS' },
        incorporaJuros: false,
        taxa: 0,
        pu: 0,
        puJurosSobreAmortizacao: 0,
        valorResidualUnitario: 0,
        registradorOuEmissor: 'MAXIMABC',
        agentePagamento: 'MAXIMABC'
      },
      {
        id: 4,
        dataEfetivacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataOriginal:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataLiquidacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        tipoIf: 'CDB',
        codigoIf: 'CDB120014M7',
        tipoEvento: { id: 2, descricao: 'AMORTIZACAO' },
        incorporaJuros: true,
        taxa: 10.0000,
        pu: 0,
        puJurosSobreAmortizacao: 0,
        valorResidualUnitario: 0,
        registradorOuEmissor: 'MAXIMABC',
        agentePagamento: 'MAXIMABC'
      },
      {
        id: 5,
        dataEfetivacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataOriginal:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataLiquidacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        tipoIf: 'CDB',
        codigoIf: 'CDB120014M7',
        tipoEvento: { id: 1, descricao: 'JUROS' },
        incorporaJuros: false,
        taxa: 0,
        pu: 0,
        puJurosSobreAmortizacao: 0,
        valorResidualUnitario: 0,
        registradorOuEmissor: 'MAXIMABC',
        agentePagamento: 'MAXIMABC'
      },
      {
        id: 6,
        dataEfetivacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataOriginal:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataLiquidacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        tipoIf: 'CDB',
        codigoIf: 'CDB120014M7',
        tipoEvento: { id: 2, descricao: 'AMORTIZACAO' },
        incorporaJuros: true,
        taxa: 10.0000,
        pu: 0,
        puJurosSobreAmortizacao: 0,
        valorResidualUnitario: 0,
        registradorOuEmissor: 'MAXIMABC',
        agentePagamento: 'MAXIMABC'
      },
      {
        id: 7,
        dataEfetivacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataOriginal:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataLiquidacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        tipoIf: 'CDB',
        codigoIf: 'CDB120014M7',
        tipoEvento: { id: 1, descricao: 'JUROS' },
        incorporaJuros: false,
        taxa: 0,
        pu: 0,
        puJurosSobreAmortizacao: 0,
        valorResidualUnitario: 0,
        registradorOuEmissor: 'MAXIMABC',
        agentePagamento: 'MAXIMABC'
      },
      {
        id: 8,
        dataEfetivacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataOriginal:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        dataLiquidacao:
        {
          isRange:false,
          singleDate: {
            date: {
              year: 2019,
              month: 5,
              day: 14
            }
          }
        },
        tipoIf: 'CDB',
        codigoIf: 'CDB120014M7',
        tipoEvento: { id: 2, descricao: 'AMORTIZACAO' },
        incorporaJuros: true,
        taxa: 10.0000,
        pu: 0,
        puJurosSobreAmortizacao: 0,
        valorResidualUnitario: 0,
        registradorOuEmissor: 'MAXIMABC',
        agentePagamento: 'MAXIMABC'
      },
      {
        id: 9,
        dataEfetivacao:
        {
          isRange:false,
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
          isRange:false,
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
          isRange:false,
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
    return { eventos };
  }

  // Overrides the genId method to ensure that a evento always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(eventos: IEvento[]): number {
    return eventos.length > 0 ? Math.max(...eventos.map(evento => evento.id)) + 1 : 11;
  }

  
}

