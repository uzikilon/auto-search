import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  loggedin = false;

  login(username: string, password: string) {
    return this.http.post(
      'http://localhost:3000/api/login',
      {username, password},
      {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    ).pipe(
      catchError(() => {
        alert('Invald credentials');
        return throwError('Invald credentials');
      }),
      map(() => {
        this.loggedin = true;
      })
    );
  }
}
