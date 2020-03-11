
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosListComponent } from './eventos-list/eventos-list.component';
import { EventosEditComponent } from './eventos-edit/eventos-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: EventosListComponent, data: {modoEdicao: false}},
  { path: 'edit', component: EventosEditComponent ,  data: {modoEdicao: true}}
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
