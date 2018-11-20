import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../services/challenges.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Challenge} from '../interfaces/challenge';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  challenges: Challenge[];

  constructor(private challengesService: ChallengesService) { }

  ngOnInit() {
    this.getChallenges();
  }

  getChallenges(): void {
    this.challengesService.getChallenges()
    .subscribe(challenges => this.challenges = challenges);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.challengesService.addChallenge({ name } as Challenge)
      .subscribe(challenge => {
        this.challenges.push(challenge);
      });
  }

  delete(challenge: Challenge): void {
    this.challenges = this.challenges.filter(c => c !== challenge);
    this.challengesService.deleteChallenge(challenge).subscribe();
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/