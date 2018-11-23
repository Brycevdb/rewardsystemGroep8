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
  users: User[] = [
    {id: "5bf54f2f5b1dac1648de29a9", username: "Laurenz", password: "gatjas", role: 1, name: "Laurenz", chest: [], events: []},
    
  ];
  logedInUser: User;
  constructor(private userService: UserService, public authService: AuthService) { }
  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    //this.userService.getUsers().subscribe(users => this.users = users);
  }
  
  login(user) {
    this.authService.login(user);
    this.authService.userData$.subscribe(data => this.logedInUser = data);
    //console.log('ingelogde gebruiker:' + this.logedInUser.name);
    //console.log(this.logedInUser);
  }

}
