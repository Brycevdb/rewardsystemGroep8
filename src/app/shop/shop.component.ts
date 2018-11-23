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

  constructor(private rewardsservice: RewardsService, public authService: AuthService, private challengesservice: ChallengesService) {
    this.authService.userData$.subscribe(data => {
      this.user = data;

      let event: Event = {id: 0, name: 'eventdinges', description: 'bschrijving', revisor: this.user, points: 200, stamp: new Date(), challenge: null};

      this.user.events.push(event);
    });
  }

  rewards: Reward[];
  user: User;

  private getData(){
    this.rewardsservice.getRewards().subscribe(rewards => this.rewards = rewards);
  }

  ngOnInit() {
    this.getData();
  }

  getUserPoints(): number{
    var points: number = 0;

    this.user.events.forEach(event => {
      if(event.revisor != null){
        points += event.points;
      }
    });

    return points;
  }

  addReward(reward: Reward){
    console.log(reward);

    this.user.chest.push({stamp: new Date(), reward, cost: reward.cost});

    
  }
}
