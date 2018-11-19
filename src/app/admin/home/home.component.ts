import { Component, OnInit } from '@angular/core';

import { Reward } from '../../interfaces/reward';

@Component({
  selector: 'app-adminhome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRewards(){
    let r1 : Reward = {id: 1, name: 'bak bier', description: '', cost: 15 };
    let r2 : Reward = {id: 1, name: 'bak cava', description: '', cost: 25 };
    let r3 : Reward = {id: 1, name: 'bak fristi', description: '', cost: 10 };
    let r4 : Reward = {id: 1, name: 'bak cece', description: '', cost: 10 };

    return [
      r1,
      r2,
      r3,
      r4
    ]
  }

}
