import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  logedInUser: User;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.authService.userData$.subscribe(data => this.logedInUser = data);
    if (!this.logedInUser) {
      this.router.navigate(['login']);
    } else {
      if (this.logedInUser.role !== 1) {
        console.log('Huidige gebruiker heeft niet de juiste rechten!');
        this.router.navigate(['login']);
      }
    }
    return true;
  }
}
