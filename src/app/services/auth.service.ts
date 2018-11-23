import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData$: BehaviorSubject<User> = new BehaviorSubject(null);
  constructor() {}
  login(user) {
    this.logout();
    this.setUserData(user);
}
  logout() {
    this.userData$.next(null);
  }
  private setUserData(user) {
    if (user !== null) {
      this.userData$.next({
        _id: user._id,
        name: user.name,
        role: user.role,
        username: user.username,
        password: '',
        chest: [],
        events: [],
      });
    } else {
      this.userData$.next(null);
    }
  }
}
