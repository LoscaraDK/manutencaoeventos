import { Component, OnInit} from '@angular/core';
import { ListaEventosService } from './lista-eventos.service';
import { Evento } from '../evento';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.styl']
})
export class ListaEventosComponent implements OnInit {
  eventos: Evento[] = [];
  selecedEvento: Evento;
  modoEdicao: boolean = false;
  
  locale: string = 'pt-br';
  myDpOptions: IAngularMyDpOptions = {dateRange: false,dateFormat: 'dd/mm/yyyy'};
  
  constructor(private eventosService: ListaEventosService,private route : ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.data.modoEdicao);
    this.modoEdicao = this.route.snapshot.data.modoEdicao;
    this.getEventos();
  }

  getEventos(): void {
    this.eventosService.getEventos().subscribe(eventos => this.eventos = eventos);
  }
}
