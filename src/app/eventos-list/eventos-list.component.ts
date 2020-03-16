import { Component, OnInit} from '@angular/core';
import { EventosListService } from './eventos-list.service';
import { IEvento } from '../IEvento';
import {IAngularMyDpOptions, IMyDateModel, IMySingleDateModel} from 'angular-mydatepicker';
import { ActivatedRoute } from '@angular/router'
import * as _ from 'lodash';
@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.styl']
})
export class EventosListComponent implements OnInit {
  eventos: IEvento[] = [];
  selecedEvento: IEvento;
  modoEdicao: boolean = false;
  
  locale: string = 'pt-br';
  myDpOptions: IAngularMyDpOptions = {dateRange: false,dateFormat: 'dd/mm/yyyy'};
  order: string = 'asc';
  constructor(private eventosService: EventosListService,private route : ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.data.modoEdicao);
    this.modoEdicao = this.route.snapshot.data.modoEdicao;
    this.getEventos();
  }

  getEventos(): void {
    this.eventosService.getEventos().subscribe(eventos => this.eventos = eventos);
  }

  formatDateToString(dateParam: IMyDateModel): string {
    return dateParam.singleDate.date.day.toString() + '/' + dateParam.singleDate.date.month.toString() + '/' + dateParam.singleDate.date.year.toString();
  }

  sort(a): void {
    this.order = this.order == 'asc' ? 'desc' : 'asc';
    this.eventos = _.orderBy(this.eventos, a, [this.order]);
  }
}
