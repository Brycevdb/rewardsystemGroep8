import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengesService } from 'src/app/services/challenges.service';
import { Challenge } from 'src/app/interfaces/challenge';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class AdminChallengesComponent implements OnInit, OnDestroy {
  challenge: Challenge;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private challengesservice: ChallengesService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.challengesservice.get(params['id']).subscribe(challenge => this.challenge = challenge);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateChallenge(name: string, description: string, basepoints: number){
    this.challenge.name = name;
    this.challenge.description = description;
    this.challenge.basepoints = basepoints;

    this.challengesservice.update(this.challenge).subscribe(reward => { 
      // Redirect
      this.router.navigate(['/admin']);
    });
  }

  deleteChallenge() {
    this.challengesservice.delete(this.challenge._id).subscribe(val => {
      // Redirect
      this.router.navigate(['/admin']);
    });
  }
}