import { Component, OnInit} from '@angular/core';

import { IEvento, Evento } from '../IEvento';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
import { ActivatedRoute } from '@angular/router'
import { EventosListService } from '../eventos-list/eventos-list.service';
import { EventosEditService } from './eventos-edit.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventos-edit',
  templateUrl: './eventos-edit.component.html',
  styleUrls: ['./eventos-edit.component.styl']
})
export class EventosEditComponent implements OnInit {
  eventos: IEvento[] = [];
  selecedEvento: IEvento;
  modoEdicao: boolean = false;
  
  locale: string = 'pt-br';
  myDpOptions: IAngularMyDpOptions = {dateRange: false,
                                      dateFormat: 'dd/mm/yyyy',
                                      alignSelectorRight: false,
                                      openSelectorTopOfInput: false,
                                      inline: false,
                                      stylesData: {
                                        selector: 'dpefetivacao',
                                        styles: `
                                        .dpefetivacao .myDpIconLeftArrow,
                                        .myDpIconRightArrow {
                                                color: red;
                                            }
                                        `
                                    } 
                                    };
  
  tiposEvento = [{tipoEvento: {id:1,descricao:'JUROS'}}, {tipoEvento: {id:2,descricao:'AMORTIZACAO'}} , {tipoEvento: {id:3,descricao:'VENCIMENTO(RESGATE)'}}];

  codigoIF: string;
  codigoTipoIF: string;
  registrador: string;
  agPagto: string;

  constructor(private eventosListService: EventosListService,
              private eventosEditService: EventosEditService,
              private route: ActivatedRoute) {}

  selectFormControl: FormControl;            
  ngOnInit(): void {
    console.log(this.route.snapshot.data.modoEdicao);
    this.modoEdicao = this.route.snapshot.data.modoEdicao;
    this.getEventos();

    this.selectFormControl = new FormControl('',[Validators.required]);
  }

  getEventos(): void {
    this.eventosListService.getEventos().subscribe(eventos => this.eventos = eventos);
  }

  delete(evento: IEvento): void {
    this.eventos = this.eventos.filter(h => h !== evento);
    this.eventosEditService.deleteEvento(evento).subscribe();
  }

  add(): void {
    if(this.eventos.length > 0){
      this.codigoIF = this.eventos[0].codigoIf;
      this.codigoTipoIF = this.eventos[0].tipoIf;
      this.registrador = this.eventos[0].registradorOuEmissor;
      this.agPagto = this.eventos[0].agentePagamento;
    }

    var novoEvento = new Evento();
    novoEvento.codigoIf = this.codigoIF;
    novoEvento.tipoIf = this.codigoTipoIF;
    novoEvento.registradorOuEmissor = this.registrador;
    novoEvento.agentePagamento = this.agPagto;
    
    
    this.eventosEditService.addEvento(novoEvento).subscribe(evento => {
      this.eventos.push(evento);
    });
  }

  formatDateToString(dateParam: IMyDateModel): string {
    return dateParam.singleDate.date.day.toString() + '/' + dateParam.singleDate.date.month.toString() + '/' + dateParam.singleDate.date.year.toString();
  }

}

