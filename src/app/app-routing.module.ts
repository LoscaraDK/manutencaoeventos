
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';

const routes: Routes = [
  { path: '', redirectTo: '/listaeventos', pathMatch: 'full' },
  { path: 'listaeventos', component: ListaEventosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
