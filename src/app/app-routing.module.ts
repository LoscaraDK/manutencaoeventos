
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosListComponent } from './eventos-list/eventos-list.component';
import { EventosEditComponent } from './eventos-edit/eventos-edit.component';
import { FiltroManutencaoEventosComponent } from './filtro-manutencao-eventos/filtro-manutencao-eventos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/filter', pathMatch: 'full' },
  { path: 'filter', component: FiltroManutencaoEventosComponent, data: {modoEdicao: false}},
  { path: 'list', component: EventosListComponent, data: {modoEdicao: false}},
  { path: 'edit', component: EventosEditComponent ,  data: {modoEdicao: true}}
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
