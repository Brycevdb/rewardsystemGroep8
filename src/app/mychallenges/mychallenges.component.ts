import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ChallengesService } from '../services/challenges.service';
import { User } from '../interfaces/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-mychallenges',
  templateUrl: './mychallenges.component.html',
  styleUrls: ['./mychallenges.component.scss']
})
export class MychallengesComponent implements OnInit {

  private user: User;

  constructor(public authService: AuthService, private challengesservice: ChallengesService, private usersservice: UsersService) {
    this.authService.userData$.subscribe(data => {
      if(data != null){
        this.usersservice.get(data._id).subscribe(user => {
          this.user = user;
        });
      }
    });
  }

  ngOnInit() { }

  getIcon(revisor: User): string{
    if(revisor == null){
      return 'assignment_ind';
    }

    return 'assignment_turned_in';
  }
}
