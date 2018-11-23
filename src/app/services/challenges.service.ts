import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Challenge} from '../interfaces/challenge';
import { Observable, of }from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YmY1NGYyZjViMWRhYzE2NDhkZTI5YTkiLCJpYXQiOjE1NDI4MDMyNjJ9.zdgz0EHtPLhqrw0gya08hUmB5ekhS1Sw0C-R7jL4ntw'
  }
  )
};
@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  private challengeUrl = 'http://localhost:4000/challenges/';
  constructor(private http: HttpClient) { }

  /** POST: add a new hero to the server */
  addChallenge (challenge: Challenge): Observable<Challenge> {
    return this.http.post<Challenge>(this.challengeUrl, challenge, httpOptions).pipe(
      tap((challenge: Challenge) => this.log(`added challenge w/ id=${challenge._id}`)),
      catchError(this.handleError<Challenge>('addChallenge'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteChallenge (challenge: Challenge | number): Observable<Challenge> {
    const id = typeof challenge === 'number' ? challenge : challenge._id;
    const url = `${this.challengeUrl}/${id}`;

    return this.http.delete<Challenge>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted challenge id=${id}`)),
      catchError(this.handleError<Challenge>('deleteChallenge'))
    );
  }

  getChallenges(): Observable<Challenge[]> {

    return this.http.get<Challenge[]>(this.challengeUrl, httpOptions)
    .pipe(
      tap(),
      catchError(this.handleError('getChallenges', []))
    );
  }

  get(id: string): Observable<Challenge> {
    return this.http.get<Challenge>(this.challengeUrl + '/' + id).pipe(
      tap((challenge: Challenge) => this.log('Fetched challenge with id ' + id)),
      catchError(this.handleError<Challenge>('getChallenge'))
    );
  }

  update(challenge: Challenge): Observable<Challenge>{
    return this.http.put<Challenge>(this.challengeUrl + '/' + challenge._id, challenge, httpOptions).pipe(
      tap((challenge: Challenge) => this.log('Updated challenge with id ' + challenge._id)),
      catchError(this.handleError<Challenge>('updateChallenge'))
    );
  }

  delete (key: string): Observable<Challenge> {
    return this.http.delete<Challenge>(this.challengeUrl + '/' + key, httpOptions).pipe(
      tap(_ => this.log('Deleted challenge with id ' + key)),
      catchError(this.handleError<Challenge>('deleteChallenge'))
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


