import { Component, OnInit } from '@angular/core';
import { RewardsService } from '../services/rewards.service';
import { UsersService } from '../services/users.service';
import { ChallengesService } from '../services/challenges.service';
import { Reward } from '../interfaces/reward';
import { User } from '../interfaces/user';
import { Challenge } from '../interfaces/challenge';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private rewardsservice: RewardsService, private usersservice: UsersService, private challengesservice: ChallengesService) {}

  rewards: Reward[];
  users: User[];
  challenges: Challenge[];

  private getData(){
    this.rewardsservice.getRewards().subscribe(rewards => this.rewards = rewards);
    this.usersservice.getAll().subscribe(users => this.users = users);
    this.challengesservice.getChallenges().subscribe(challenges => this.challenges = challenges);
  }

  ngOnInit() {
    this.getData();
  }

  addReward(name: string, description: string, cost: number) {
    name = name.trim();
    description = description.trim();

    this.rewardsservice.add({ name, description, cost } as Reward).subscribe(reward => {
      this.rewards.push(reward);
    });

    this.getData();
  }

  addChallenge(name: string, description: string, basepoints: number) {
    name = name.trim();
    description = description.trim();

    this.challengesservice.addChallenge({ name, description, basepoints } as Challenge).subscribe(challenge => {
      this.challenges.push(challenge);
    });

    this.getData();
  }
}
