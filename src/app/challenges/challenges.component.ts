import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../services/challenges.service';
import { Challenge} from '../interfaces/challenge';
import { Event } from '../interfaces/event';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  challenges: Challenge[];

  user: User;

  constructor(private challengesService: ChallengesService, private authService: AuthService, private usersservice: UsersService) {
    this.authService.userData$.subscribe(data => {
      this.user = data;
    });
  }

  ngOnInit() {
    this.challengesService.getChallenges().subscribe(challenges => this.challenges = challenges);
  }

  sendChallenge(challenge: Challenge, description: string){
    let event: Event = { description: description.trim(), revisor: null, points: 0, stamp: new Date().getTime(), challenge: challenge }
    this.user.events.push(event);

    // Update db
    this.usersservice.update(this.user).subscribe(user => { });
  }
}