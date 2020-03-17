import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroManutencaoEventosComponent } from './filtro-manutencao-eventos.component';

describe('FiltroManutencaoEventosComponent', () => {
  let component: FiltroManutencaoEventosComponent;
  let fixture: ComponentFixture<FiltroManutencaoEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroManutencaoEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroManutencaoEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
