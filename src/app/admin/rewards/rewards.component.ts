import { Component, OnInit, OnDestroy } from '@angular/core';
import { Reward } from 'src/app/interfaces/reward';
import { ActivatedRoute, Router } from '@angular/router';
import { RewardsService } from 'src/app/services/rewards.service';

@Component({
  selector: 'app-adminrewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class AdminRewardsComponent implements OnInit, OnDestroy {
  reward: Reward;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private rewardsservice: RewardsService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.rewardsservice.get(params['id']).subscribe(reward => this.reward = reward);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateReward(name: string, description: string, cost: number){
    this.reward.name = name;
    this.reward.description = description;
    this.reward.cost = cost;

    this.rewardsservice.update(this.reward).subscribe(reward => { 
      // Redirect
      this.router.navigate(['/admin']);
    });
  }

  deleteReward() {
    this.rewardsservice.delete(this.reward._id).subscribe(val => {
      // Redirect
      this.router.navigate(['/admin']);
    });
  }
}