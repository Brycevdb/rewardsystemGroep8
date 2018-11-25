import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Challenge} from '../interfaces/challenge';
import { Observable, of }from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  private uri = 'http://localhost:4000/challenges/';
  constructor(private http: HttpClient) { }

  add(challenge: Challenge): Observable<Challenge> {
    return this.http.post<Challenge>(this.uri, challenge, httpOptions).pipe(
      tap((challenge: Challenge) => this.log("added challenge " + challenge._id)),
      catchError(this.handleError<Challenge>('addChallenge'))
    );
  }

  delete(key: string): Observable<Challenge> {
    return this.http.delete<Challenge>(this.uri + key, httpOptions).pipe(
      tap(_ => this.log("deleted challenge with id " + key)),
      catchError(this.handleError<Challenge>('deleteChallenge'))
    );
  }

  getAll(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.uri, httpOptions).pipe(
      tap(_ => this.log('Fetched all challenges')),
      catchError(this.handleError('getAllChallenges', []))
    );
  }

  get(id: string): Observable<Challenge> {
    return this.http.get<Challenge>(this.uri + id).pipe(
      tap((challenge: Challenge) => this.log('Fetched challenge with id ' + id)),
      catchError(this.handleError<Challenge>('getChallenge'))
    );
  }

  update(challenge: Challenge): Observable<Challenge>{
    return this.http.put<Challenge>(this.uri + challenge._id, challenge, httpOptions).pipe(
      tap((challenge: Challenge) => this.log('Updated challenge with id ' + challenge._id)),
      catchError(this.handleError<Challenge>('updateChallenge'))
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


