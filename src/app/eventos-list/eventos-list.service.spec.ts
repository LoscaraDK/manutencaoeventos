import { TestBed } from '@angular/core/testing';

import { EventosListService } from './eventos-list.service';

describe('EventosListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventosListService = TestBed.get(EventosListService);
    expect(service).toBeTruthy();
  });
});