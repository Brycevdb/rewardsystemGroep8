import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../interfaces/user';
import {AuthService} from '../services/auth.service';
import { ChallengesService } from '../services/challenges.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users = [
    {username: "Laurenz", password: "gatjas"},
    {username: "daan", password: "gatjas"},
  ];
  loggedInUser: User;
  constructor(public userService: UsersService, public authService: AuthService) {
  }
  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }
  getUsers(): void {
    //this.userService.getAll().subscribe(users => this.users = users);
  }
  
  login(user) {
    this.authService.login(user);
    this.authService.userData$.subscribe(data => this.loggedInUser = data);
    //console.log('ingelogde gebruiker:' + this.logedInUser.name);
    //console.log(this.logedInUser);
  }

}
