import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServConfig } from '../servconfig';
import { ErrorHandling } from './errorHandling';

@Injectable()
export class UserService extends ErrorHandling {
  path = ServConfig.ApiPath + '/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':'Token'
    }),
  };

  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path).pipe(
      tap((data) => {
        return this.tapIntercepter(data);
      }),
      catchError(this.handleError)
    );
  }

  deleteUser(user: User): Observable<User> {
    return this.http
      .delete<User>(this.path + '/' + user.id.toString(), this.httpOptions)
      .pipe(
        tap((data) => {
          return this.tapIntercepter(data);
        }),
        catchError(this.handleError)
      );
  }
  updateUser(user: User): Observable<User> {
    return this.http
      .put<User>(this.path + '/' + user.id, user, this.httpOptions)
      .pipe(
        tap((data) => {
          return this.tapIntercepter(data);
        }),
        catchError(this.handleError)
      );
  }

  getUserById(Id: number): Observable<User> {
    return this.http.get<User>(this.path + '/' + Id.toString()).pipe(
      tap((data) => {
        return this.tapIntercepter(data);
      }),
      catchError(this.handleError)
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.path, user, this.httpOptions).pipe(
      tap((data) => {
        return this.tapIntercepter(data);
      }),
      catchError(this.handleError)
    );
  }
}
