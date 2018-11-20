import { Component, OnInit } from '@angular/core';
import { Reward } from '../../interfaces/reward';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { RewardsService } from 'src/app/services/rewards.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private rewardsservice: RewardsService, private usersservice: UsersService) {}

  rewards: Reward[];
  users: User[];

  private getData(){
    this.rewardsservice.getAll().subscribe(rewards => this.rewards = rewards);
    this.usersservice.getAll().subscribe(users => this.users = users);
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
}
