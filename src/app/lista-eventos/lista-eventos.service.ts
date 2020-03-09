import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Evento } from '../evento';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaEventosService {
  private eventosURL = 'api/eventos';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    const eventos = this.http.get<Evento[]>(this.eventosURL).pipe(
      tap(_ => this.log('fetched eventos')),
      catchError(this.handleError<Evento[]>('getEventos', []))
    );

   // eventos.forEach(evento => {
    //  console.log(evento);
    //});

    return eventos;

  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
