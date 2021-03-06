import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { User} from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$: BehaviorSubject<User> = new BehaviorSubject(null);
  readonly URL = 'http://localhost:4000/users/login';

  constructor(private http: HttpClient) {
    this.setUserData(JSON.parse(localStorage.getItem('currentUser')));
  }

  login(user) {
    this.logout();
    this.http.post<any>('http://localhost:4000/users/login', user, httpOptions)
    .pipe(map(login => {
      if (login && login.token) {
        localStorage.setItem('currentUser', JSON.stringify(login));
      }
      this.setUserData(login);
    })
    ).subscribe();

}
  logout() {
    this.userData$.next(null);
    localStorage.removeItem('currentUser');
  }
  private setUserData(user) {
    if (user !== null) {

      if(user.chest == null){
        user.chest = [];
      }

      if(user.events == null){
        user.events = [];
      }

      this.userData$.next({
        _id: user._id,
        name: user.name,
        role: user.role,
        username: user.username,
        password: '',
        chest: user.chest,
        events: user.events
      });
    } else {
      this.userData$.next(null);
    }
  }
}
