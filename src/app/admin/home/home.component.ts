import { Component, OnInit } from '@angular/core';
import { Reward } from '../../interfaces/reward';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { RewardsService } from 'src/app/services/rewards.service';
import { UsersService } from 'src/app/services/users.service';
import { ChallengesService } from 'src/app/services/challenges.service';
import { Challenge } from 'src/app/interfaces/challenge';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private rewardsservice: RewardsService, private usersservice: UsersService, private challengesservice: ChallengesService, public authService: AuthService) {
    this.authService.userData$.subscribe(data => {
      this.user = data;
      this.user.events = [];
      this.user.chest = [];
    });
  }

  user: User;
  rewards: Reward[];
  users: User[];
  challenges: Challenge[];

  private getData(){
    this.rewardsservice.getAll().subscribe(rewards => this.rewards = rewards);
    this.usersservice.getAll().subscribe(users => {this.users = users; console.log(users)});
    this.challengesservice.getAll().subscribe(challenges => this.challenges = challenges);
  }

  ngOnInit() {
    this.getData();
  }

  addReward(name: string, description: string, cost: number) {
    name = name.trim();
    description = description.trim();

    this.rewardsservice.add({ name, description, cost } as Reward).subscribe(reward => {
      this.rewards.push(reward);

      this.getData();
    });
  }

  addChallenge(name: string, description: string, basepoints: number) {
    name = name.trim();
    description = description.trim();

    this.challengesservice.add({ name, description, basepoints } as Challenge).subscribe(challenge => {
      this.challenges.push(challenge);

      this.getData();
    });
  }

  sendChallenge(user: User, index: number, points: number){
    user.events[index].points = points;
    user.events[index].revisor = this.user;

    this.usersservice.update(user).subscribe(user => { });
  }
}
