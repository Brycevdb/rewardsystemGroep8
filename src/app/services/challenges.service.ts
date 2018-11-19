import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Challenge} from '../interfaces/challenge';
import { Observable, of }from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  private challengeUrl = 'http://localhost:3000/challenges';
  constructor(private http: HttpClient) { }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addChallenge (challenge: Challenge): Observable<Challenge> {
    return this.http.post<Challenge>(this.challengeUrl, challenge, httpOptions).pipe(
      tap((challenge: Challenge) => this.log(`added challenge w/ id=${challenge.id}`)),
      catchError(this.handleError<Challenge>('addChallenge'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteChallenge (challenge: Challenge | number): Observable<Challenge> {
    const id = typeof challenge === 'number' ? challenge : challenge.id;
    const url = `${this.challengeUrl}/${id}`;

    return this.http.delete<Challenge>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted challenge id=${id}`)),
      catchError(this.handleError<Challenge>('deleteChallenge'))
    );
  }

  getChallenges(): Observable<Challenge[]> {

    return this.http.get<Challenge[]>(this.challengeUrl)
    .pipe(
      tap(_ => this.log('fetched challenges')),
      catchError(this.handleError('getChallenges', []))
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


