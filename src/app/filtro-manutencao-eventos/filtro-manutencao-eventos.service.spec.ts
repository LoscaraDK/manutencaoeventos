import { TestBed } from '@angular/core/testing';

import { FiltroManutencaoEventosService } from './filtro-manutencao-eventos.service';

describe('FiltroManutencaoEventosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltroManutencaoEventosService = TestBed.get(FiltroManutencaoEventosService);
    expect(service).toBeTruthy();
  });
});
