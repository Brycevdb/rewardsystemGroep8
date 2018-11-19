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
    let r1 : Reward = {id: 1, name: 'Bak bier', description: 'Lekker genieten van een frisse bak bier met vrienden of alleen??', cost: 15 };
    let r2 : Reward = {id: 2, name: 'Fles cava', description: 'Lekker genieten van een frisse fles cava of wijn met vrienden of alleen??', cost: 25 };
    let r3 : Reward = {id: 3, name: 'Bak fristi', description: 'Waarom sterk gaan als je ook kan fristigaan??', cost: 10 };
    let r4 : Reward = {id: 4, name: 'Bak cece', description: 'Voor de echte straffe manne een goei bak chocomelk, zelfs nog de mogelijkheid om iets warms te voorzien thuis om de straffe wintermaanden door te geraken.', cost: 10 };

    return [
      r1,
      r2,
      r3,
      r4
    ]
  }

}
