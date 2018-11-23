import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../interfaces/user';
import {AuthService} from '../services/auth.service';
import { ChallengesService } from '../services/challenges.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: User[];
  logedInUser: User;
  constructor(private userService: UserService, public authService: AuthService) { }
  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
  login(user) {
    this.authService.login(user);
    this.authService.userData$.subscribe(data => {
      this.logedInUser = data
      //this.logedInUser.events = this.challengesservice.getChallenges()
    });
    console.log('ingelogde gebruiker:' + this.logedInUser.name);
    console.log(this.logedInUser);
  }

}
