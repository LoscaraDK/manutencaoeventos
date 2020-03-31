import { FiltroManutencaoEventosService } from './filtro-manutencao-eventos.service';
import { IAngularMyDpOptions } from 'angular-mydatepicker';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FIELDS } from '../formfields';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-filtro-manutencao-eventos',
  templateUrl: './filtro-manutencao-eventos.component.html',
  styleUrls: ['./filtro-manutencao-eventos.component.styl']
})
export class FiltroManutencaoEventosComponent implements OnInit {
  fields: any = FIELDS;
  formFiltro: FormGroup;
  
  locale: string = 'pt-br';
  myDpOptions: IAngularMyDpOptions = {
    dateRange: true,
    dateFormat: 'dd/mm/yyyy',
    alignSelectorRight: false,
    openSelectorTopOfInput: false,
    inline: false,
  };

  constructor(private router: Router, 
              private http: HttpClient, 
              private filtroService: FiltroManutencaoEventosService,
              private formBuilder: FormBuilder) { }
  ngOnInit() {
    let group = {};

    this.fields.forEach(input_template => {
      group[input_template.id] = new FormControl('',input_template.validator);
    });

    this.formFiltro = this.formBuilder.group(group);

    
    //let group = {};

    // this.fields.forEach(input_template => {
    //   group[input_template.id] = new FormControl('',[Validators.required]);
    // }
    // );

   // this.formFiltro = new FormGroup(group);
  }

  onSubmit(): void { //se usar post tem que retornar um observable
    // console.log('valor => '+JSON.stringify(this.formFiltro.value));
    
    //Para retornar o objeto todo mas usa get
    const navigationExtras: NavigationExtras = {
      queryParams: {
          "data": JSON.stringify(this.formFiltro.value)
      }
    };
    
    console.log('valid?' + this.formFiltro.valid);
    //enviar para a pagina mapeada
    if(this.formFiltro.valid){
      this.router.navigate(['list', this.formFiltro.value],navigationExtras);
      //console.log(this.formFiltro.value);
    } 
    // this.router.navigate(['list', this.formFiltro.value]);

    //so faz post pro backend , pagina para pagina utilizar 
    // let httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    // return this.http.post<any>('api/eventos', {_data: JSON.stringify(this.formFiltro.value)}, httpOptions).subscribe(()=>{
    //   this.router.navigate(['list', this.formFiltro.value]);
    // });

    
  }  
} //fim
