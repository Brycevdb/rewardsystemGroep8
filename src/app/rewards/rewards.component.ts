import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RewardsService } from 'src/app/services/rewards.service';
import { User } from 'src/app/interfaces/user';
import { Reward } from 'src/app/interfaces/reward';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {

  private user: User;
  rewards: Reward[];

  constructor( public authService: AuthService, private rewardsService: RewardsService) {
    this.authService.userData$.subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.getRewards();
  }

  getRewards(): void {
    this.rewardsService.getRewards()
    .subscribe(rewards => this.rewards = rewards);
    this.getRewardsByUserId();
  }

  getRewardsByUserId(): void {
    return null;
  }

}
