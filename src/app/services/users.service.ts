import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable, of }from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YmY1NGYyZjViMWRhYzE2NDhkZTI5YTkiLCJpYXQiOjE1NDI4MDMyNjJ9.zdgz0EHtPLhqrw0gya08hUmB5ekhS1Sw0C-R7jL4ntw'})
};
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private uri = 'http://localhost:4000/users/';
  constructor(private http: HttpClient) { }

  add (user: User): Observable<User> {
    return this.http.post<User>(this.uri, user, httpOptions).pipe(
      tap((user: User) => this.log('Added user with id ' + user._id)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  delete (user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user._id;
    const url = `${this.uri}/${id}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => this.log('Deleted user with id ' + id)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  update(user: User): Observable<User>{
    return this.http.put<User>(this.uri + '/' + user._id, user, httpOptions).pipe(
      tap((user: User) => this.log('Updated user with id ' + user._id)),
      catchError(this.handleError<User>('updateReward'))
    );
  }

  getAll(): Observable<User[]> {

    return this.http.get<User[]>(this.uri, httpOptions).pipe(
      tap(_ => this.log('Fetched all users')),
      catchError(this.handleError('getAllUsers', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
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
  }
}


