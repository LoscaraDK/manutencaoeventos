import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEvento } from '../IEvento';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventosEditService {
  private eventosURL = 'api/eventos';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {}

  /** DELETE: delete the Evento from the server */
  deleteEvento (evento: IEvento | number): Observable<IEvento> {
    const id = typeof evento === 'number' ? evento : evento.numEvento;
    const url = `${this.eventosURL}/${id}`;

    return this.http.delete<IEvento>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted evento id=${id}`)),
      catchError(this.handleError<IEvento>('deleteEvento'))
    );
  }

   /** POST: add a new Evento to the server */
   addEvento (evento: IEvento): Observable<IEvento> {
    return this.http.post<IEvento>(this.eventosURL, evento, this.httpOptions).pipe(
      tap((newEvento: IEvento) => this.log(`added Evento w/ id=${newEvento.numEvento}`)),
      catchError(this.handleError<IEvento>('addEvento'))
    );
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

  /** Log a ListaEventoService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
