import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Evento } from './evento';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const eventos = [
      { id: 1, name: 'juros' },
      { id: 2, name: 'amortizacao' },
      { id: 3, name: 'vencimento' },
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

