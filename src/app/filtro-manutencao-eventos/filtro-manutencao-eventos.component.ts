import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-manutencao-eventos',
  templateUrl: './filtro-manutencao-eventos.component.html',
  styleUrls: ['./filtro-manutencao-eventos.component.styl']
})
export class FiltroManutencaoEventosComponent implements OnInit {

  constructor() { }

  labels = [
    "Data Efetivação:",
    "Data Original:",
    "Data Liquidação:",
    "Tipo IF:",
    "Codigo IF:",
    "Evento:",
    "Incorpora Juros:",
    "Taxa:",
    "P.U.:",
    "P.U. de Juros sobre Amort.:",
    "Valor Residual Unitário:",
    "Registrador/Emissor (Nome Simplificado):",
    "Agente de Pagamento (Nome Simplificado):"];

  ngOnInit() {
  }

}
