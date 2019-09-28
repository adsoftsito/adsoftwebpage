//import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entidades } from './entidades';
//import { Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";


import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { _throw as throwError } from 'rxjs/observable/throw';


@Injectable()
export class DataService {

// Define API
apiURL = 'https://upheld-castle-251021.appspot.com';
//apiURL = 'http://localhost:10010';
//apiURL = 'https://admin-proyectos-2019.appspot.com';
//apiURL = 'https://compact-booking-253415.appspot.com';

 constructor(private http: HttpClient) { }

 // Http Options
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin' : '*',
     'Accept' : 'application/json'

   })
 }  


 getEntidades(): Observable<Entidades> {
  return this.http.get<Entidades>(this.apiURL + '/gamesystems')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


postEntidades(body) {
  return this.http.post(this.apiURL + '/gamesystems', body, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}


deleteEntidades(id) {
  return this.http.delete(this.apiURL + '/gamesystems/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)  
  )
}


// Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}

