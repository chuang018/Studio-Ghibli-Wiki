import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './film';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { People } from './people';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private studioUrl = "https://ghibliapi.herokuapp.com"

  constructor( private http: HttpClient, private messageService: MessageService ) { }

  getFilms() : Observable<Film[]>{
    return this.http.get<Film[]>(this.studioUrl+'/films')
    .pipe(
      tap(_ => this.log('fetched films')),
      catchError(this.handleError<Film[]>('getFilms',[]))
    );
  }
  

  getID(cat:String, id: String): Observable<any>{
    return this.http.get<any>(this.studioUrl+'/'+cat+'/'+id);
  }

  getPeoples() : Observable<People[]>{
    return this.http.get<People[]>(this.studioUrl+'/people');
  }

  getArray(cat: String) : Observable<any[]>{
    return this.http.get<any[]>(this.studioUrl+'/'+cat);
  }

  getLocations() : Observable<Location[]>{
    return this.http.get<Location[]>(this.studioUrl+'/locations');
  }
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


  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
