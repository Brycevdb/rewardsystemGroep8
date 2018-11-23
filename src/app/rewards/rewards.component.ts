import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RewardsService } from 'src/app/services/rewards.service';
import { User } from 'src/app/interfaces/user';
import { Reward } from 'src/app/interfaces/reward';
import {Chest} from '../interfaces/chest';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {

  chest: Chest[];
  private user: User;
  rewards: Reward[];

  constructor( public authService: AuthService, private rewardsService: RewardsService,) {
    this.authService.userData$.subscribe(data => {
      this.user = data;
      this.chest = this.user.chest;
      
      console.log(data);
    });
  }

  ngOnInit() {}

}
