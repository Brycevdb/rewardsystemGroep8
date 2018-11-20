import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reward } from '../interfaces/reward';
import { Observable, of }from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  private uri = 'http://localhost:3000/rewards';
  constructor(private http: HttpClient) { }

  add (reward: Reward): Observable<Reward> {
    return this.http.post<Reward>(this.uri, reward, httpOptions).pipe(
      tap((reward: Reward) => this.log('Added reward with id ' + reward._id)),
      catchError(this.handleError<Reward>('addReward'))
    );
  }

  delete (reward: Reward | string): Observable<Reward> {
    const id = typeof reward === 'string' ? reward : reward._id;
    const url = `${this.uri}/${id}`;

    return this.http.delete<Reward>(url, httpOptions).pipe(
      tap(_ => this.log('Deleted reward with id ' + id)),
      catchError(this.handleError<Reward>('deleteReward'))
    );
  }

  getAll(): Observable<Reward[]> {

    return this.http.get<Reward[]>(this.uri).pipe(
      tap(_ => this.log('Fetched all rewards')),
      catchError(this.handleError('getAllRewards', []))
    );
  }

  get(id: string): Observable<Reward> {
    return this.http.get<Reward>(this.uri + '/' + id).pipe(
      tap((reward: Reward) => this.log('Fetched reward with id ' + id)),
      catchError(this.handleError<Reward>('addReward'))
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


