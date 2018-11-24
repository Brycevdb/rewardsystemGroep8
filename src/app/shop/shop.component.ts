import { Component, OnInit } from '@angular/core';
import { RewardsService } from '../services/rewards.service';
import { UsersService } from '../services/users.service';
import { ChallengesService } from '../services/challenges.service';
import { Reward } from '../interfaces/reward';
import { User } from '../interfaces/user';
import { Event } from '../interfaces/event';
import { Challenge } from '../interfaces/challenge';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private rewardsservice: RewardsService, private authService: AuthService, private Usersservice: UsersService) {
    this.authService.userData$.subscribe(data => {
      if(data != null){
        this.Usersservice.get(data._id).subscribe(user => {
          this.user = user;
        });
      }
    });
  }

  rewards: Reward[];
  user: User;

  ngOnInit() {
    this.rewardsservice.getAll().subscribe(rewards => this.rewards = rewards);
  }

  getUserPoints(): number{
    var points: number = 0;

    // Get obtained
    this.user.events.forEach(event => {
      if(event.revisor != null){
        points += event.points;
      }
    });

    // Process used
    this.user.chest.forEach(chest => {
      points -= chest.reward.cost;
    });

    return points;
  }

  addReward(reward: Reward){
    this.user.chest.push({ stamp: new Date().getTime(), reward });

    // Update db
    this.Usersservice.update(this.user).subscribe(user => {
       
    });
  }
}
