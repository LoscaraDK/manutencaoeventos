
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/consulta-eventos', pathMatch: 'full' },
  { path: 'consulta-eventos', component: ListaEventosComponent },
  { path: 'edicao-eventos', component: ListaEventosComponent ,  data: {id: '1', modoEdicao: true} ,resolve: ListaEventosComponent}
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
