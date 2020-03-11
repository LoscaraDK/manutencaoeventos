import { TestBed } from '@angular/core/testing';

import { EventosEditService } from './eventos-edit.service';

describe('EventosEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventosEditService = TestBed.get(EventosEditService);
    expect(service).toBeTruthy();
  });
});
