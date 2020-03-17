import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {EventosListComponent} from './eventos-list/eventos-list.component';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { EventosEditComponent } from './eventos-edit/eventos-edit.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material';
import { FiltroManutencaoEventosComponent } from './filtro-manutencao-eventos/filtro-manutencao-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosListComponent,
    EventosEditComponent,
    FiltroManutencaoEventosComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatSelectModule,ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMyDatePickerModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
