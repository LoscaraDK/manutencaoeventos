import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Evento } from './evento';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const eventos = [
      { id: 1, 
        dataEfetivacao: new Date(Date.UTC(2020,2,9,3,0,0)).toLocaleDateString('pt-BR'), 
        dataOriginal: new Date(Date.UTC(2020,2,9,3,0,0)).toLocaleDateString('pt-BR'), 
        dataLiquidacao: new Date(Date.UTC(2020,2,9,3,0,0)).toLocaleDateString('pt-BR'),
        tipoIf: 'CDB',
        codigoIf: 'CDB120014M7',
        evento: 'JUROS',
        incorporaJuros: false,
        taxa: 0,
        pu: 0,
        puJurosSobreAmortizacao: 0,
        valorResidualUnitario: 0,
        registradorOuEmissor: 'MAXIMABC',
        agentePagamento: 'MAXIMABC'
      },
      { id: 2, 
        dataEfetivacao: new Date(Date.UTC(2020,2,9,3,0,0)).toLocaleDateString('pt-BR'), 
        dataOriginal: new Date(Date.UTC(2020,2,9,3,0,0)).toLocaleDateString('pt-BR'), 
        dataLiquidacao: new Date(Date.UTC(2020,2,9,3,0,0)).toLocaleDateString('pt-BR'),
        tipoIf: 'CDB',
        codigoIf: 'CDB120014M7',
        evento: 'AMORTIZACAO',
        incorporaJuros: false,
        taxa: '10.0000',
        pu: 0,
        puJurosSobreAmortizacao: 0,
        valorResidualUnitario: 0,
        registradorOuEmissor: 'MAXIMABC',
        agentePagamento: 'MAXIMABC'
      },
      { id: 3, 
        dataEfetivacao: new Date(Date.UTC(2022,2,9,3,0,0)).toLocaleDateString('pt-BR'), 
        dataOriginal: new Date(Date.UTC(2022,2,9,3,0,0)).toLocaleDateString('pt-BR'), 
        dataLiquidacao: new Date(Date.UTC(2022,2,9,3,0,0)).toLocaleDateString('pt-BR'), 
        tipoIf: 'CDB',
        codigoIf: 'CDB120014M7',
        evento: 'VENCIMENTO (RESGATE)',
        incorporaJuros: false,
        taxa: 0,
        pu: 0,
        puJurosSobreAmortizacao: 0,
        valorResidualUnitario: 0,
        registradorOuEmissor: 'MAXIMABC',
        agentePagamento: 'MAXIMABC'
      }
      
    ];
    return {eventos};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(eventos: Evento[]): number {
    return eventos.length > 0 ? Math.max(...eventos.map(evento => evento.id)) + 1 : 11;
  }
}

