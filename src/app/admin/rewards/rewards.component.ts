import { Component, OnInit, OnDestroy } from '@angular/core';
import { Reward } from 'src/app/interfaces/reward';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminrewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class AdminRewardsComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}