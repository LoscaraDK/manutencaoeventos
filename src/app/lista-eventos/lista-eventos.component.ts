import { Component, OnInit} from '@angular/core';

import { ListaEventosService } from './lista-eventos.service';
import { Evento } from '../evento';


@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.styl']
})
export class ListaEventosComponent implements OnInit {
  eventos: Evento[] = [];
  selecedEvento: Evento;

  constructor(private eventosService: ListaEventosService) {}

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos(): void {
    this.eventosService.getEventos().subscribe(eventos => this.eventos = eventos);
  }
}
