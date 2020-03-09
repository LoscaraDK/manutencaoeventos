import { TestBed } from '@angular/core/testing';

import { ListaEventosService } from './lista-eventos.service';

describe('ListaEventosService', () => {
  let service: ListaEventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaEventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
