import { Component, OnInit } from '@angular/core';
import { EventosListService } from './eventos-list.service';
import { IEvento } from '../IEvento';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { ExportToCsv } from 'export-to-csv';

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
  myDpOptions: IAngularMyDpOptions = { dateRange: false, dateFormat: 'dd/mm/yyyy' };
  order: string = 'asc';

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

  constructor(private eventosService: EventosListService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.data.modoEdicao);
    this.modoEdicao = this.activatedRoute.snapshot.data.modoEdicao; //pegar o valor do parametro mapeado no activatedRouter
    //console.log(this.activatedRoute.snapshot.paramMap.get('situacaoIF')); //pegar o parametro vindo da tela anterior se value for option.id
    //console.log(this.activatedRoute.snapshot.paramMap);
    //Para retornar o objeto todo mas usa get
    this.activatedRoute.queryParams.subscribe(params => {
      const data = JSON.parse(params["data"]);
      //console.log(data);
    });

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
      const childrenArray = [];
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
