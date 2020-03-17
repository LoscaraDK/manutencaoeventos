import { forEach } from '@angular/router/src/utils/collection';
import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { ActivatedRoute } from '@angular/router';
import { EventosListService } from '../eventos-list/eventos-list.service';
import { EventosEditService } from './eventos-edit.service';
import { FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { IEvento, Evento } from '../IEvento';
import { ExportToCsv } from 'export-to-csv';


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
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy',
    alignSelectorRight: false,
    openSelectorTopOfInput: false,
    inline: false,
  };

  col = ["Id",
    "Data Efetivaçãp",
    "Data Original",
    "Data Liquidação",
    "Tipo IF",
    "Codigo IF",
    "Evento",
    "Incorpora Juros",
    "Taxa",
    "P.U.",
    "P.U. de Juros sobre Amort.",
    "Valor Residual Unitário",
    "Registrador/Emissor (Nome Simplificado)",
    "Agente de Pagamento (Nome Simplificado)"];

  tiposEvento = [{ tipoEvento: { id: 1, descricao: 'JUROS' } },
  { tipoEvento: { id: 2, descricao: 'AMORTIZACAO' } },
  { tipoEvento: { id: 3, descricao: 'VENCIMENTO(RESGATE)' } }];

  codigoIF: string;
  codigoTipoIF: string;
  registrador: string;
  agPagto: string;

  order: string = 'asc';

  constructor(private eventosListService: EventosListService,
    private eventosEditService: EventosEditService,
    private route: ActivatedRoute) { }

  selectFormControl: FormControl;

  ngOnInit(): void {
    console.log(this.route.snapshot.data.modoEdicao);
    this.modoEdicao = this.route.snapshot.data.modoEdicao;
    this.getEventos();
  }

  getEventos(): void {
    this.eventosListService.getEventos().subscribe(eventos => this.eventos = eventos);
  }

  delete(evento: IEvento): void {
    this.eventos = this.eventos.filter(h => h !== evento);
    this.eventosEditService.deleteEvento(evento).subscribe();
  }

  add(): void {
    if (this.eventos.length > 0) {
      this.codigoIF = this.eventos[0].codigoIf;
      this.codigoTipoIF = this.eventos[0].tipoIf;
      this.registrador = this.eventos[0].registradorOuEmissor;
      this.agPagto = this.eventos[0].agentePagamento;
    }

    const novoEvento = new Evento();
    novoEvento.codigoIf = this.codigoIF;
    novoEvento.tipoIf = this.codigoTipoIF;
    novoEvento.registradorOuEmissor = this.registrador;
    novoEvento.agentePagamento = this.agPagto;

    this.eventosEditService.addEvento(novoEvento).subscribe(evento => {
      this.eventos.push(evento);
    });


  }
  //faz sort de um array
  // tslint:disable-next-line: max-line-length
  //this.eventos = _.sortByOrder(this.eventos, ['dataOriginal.singleDate.date.day','dataOriginal.singleDate.date.month','dataOriginal.singleDate.date.year']);
  sort(a): void {
    this.order = this.order === 'asc' ? 'desc' : 'asc';
    this.eventos = _.orderBy(this.eventos, a, [this.order]);
  }

  formatDateToString(dateParam: IMyDateModel): string {
    // tslint:disable-next-line: max-line-length
    return dateParam.singleDate.date.day.toString() + '/' + dateParam.singleDate.date.month.toString() + '/' + dateParam.singleDate.date.year.toString();
  }

  gerarPdf(): void {

    const doc = new jsPDF({ orientation: 'l', format: 'a4', unit: 'mm', });
    const rows = this.parseAll(this.eventos);
    doc.autoTable(this.col, rows, {
      bodyStyles: {
        cellWidth: 'wrap',
        cellPadding: 1,
        fontSize: 8,
      },
      columnStyles: {
        cellWidth: 'auto',
        cellPadding: 1,
        fontSize: 3,
      },
      headStyles: {
        cellWidth: 'auto',
        cellPadding: 1,
        fontSize: 8,

      },
      margin: 2,
    });

    doc.save('manutencaoeventos.pdf');
  }

  gerarCSV(): void {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      filename: 'manutencaoeventos',
      //showTitle: true,
      //title: 'My Awesome CSV',
      useTextFile: false,
      useBom: true,
      //useKeysAsHeaders: true,
      headers: null, //<-- Won't work with useKeysAsHeaders present!-->
    };
    options.headers = this.col;


    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(this.parseAll(this.eventos));
  }

  parseAll(obj) {
    let parentArray = [];
    const keys = Object.keys(this.eventos);
    console.log('tamenho' + keys.length);
    keys.forEach((key) => {
      const linha = JSON.stringify(this.eventos[key]);
      const linhakeys = Object.keys(JSON.parse(linha));
      let childrenArray = [];
      linhakeys.forEach((keyAux) => {
        console.log('keyAux => ' + keyAux);
        console.log('valor' + JSON.stringify(JSON.parse(linha)[keyAux]));
        if (JSON.parse(linha)[keyAux].hasOwnProperty('singleDate')) {
          console.log('tem propriedade? ' + true);
          childrenArray.push(this.formatDateToString(JSON.parse(linha)[keyAux]));
        } else if (JSON.parse(linha)[keyAux].hasOwnProperty('id') && JSON.parse(linha)[keyAux].hasOwnProperty('descricao')) {
          console.log('tem propriedade? ' + true);
          childrenArray.push(JSON.parse(linha)[keyAux].descricao);
        } else {
          let strValor = JSON.stringify(JSON.parse(linha)[keyAux]);
          childrenArray.push(eval(strValor));
        }

      });
      parentArray.push(childrenArray);
    });
    console.log(parentArray);
    return parentArray;
  }



}

