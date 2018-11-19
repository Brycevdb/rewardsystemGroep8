import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../services/challenges.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  allChallenges$: Observable<any>;

  constructor(private data: ChallengesService) {}

  ngOnInit() {
    this.allChallenges$ = this.data.getChallenges();
  }

}
