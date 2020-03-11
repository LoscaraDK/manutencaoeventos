
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/consulta-eventos', pathMatch: 'full' },
  { path: 'consulta-eventos', component: ListaEventosComponent, data: {modoEdicao: false}},
  { path: 'edicao-eventos', component: ListaEventosComponent ,  data: {modoEdicao: true}}
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
