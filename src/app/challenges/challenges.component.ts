import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../services/challenges.service';
import { Observable } from 'rxjs';
import { Challenge} from '../interfaces/challenge';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  allChallenges$: Observable<any>;

  constructor(private data: ChallengesService) {}

  ngOnInit() {
    console.log('test');
    this.allChallenges$ = this.data.getChallenges();
    console.log(this.allChallenges$);
  }

}
