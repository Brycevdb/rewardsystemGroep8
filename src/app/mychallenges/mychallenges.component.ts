import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ChallengesService } from '../services/challenges.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-mychallenges',
  templateUrl: './mychallenges.component.html',
  styleUrls: ['./mychallenges.component.scss']
})
export class MychallengesComponent implements OnInit {

  private user: User;

  constructor(public authService: AuthService, private challengesservice: ChallengesService) {
    this.authService.userData$.subscribe(data => {
      this.user = data;
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
