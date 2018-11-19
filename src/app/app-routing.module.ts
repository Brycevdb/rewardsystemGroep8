import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/home/home.component';
import { AdminRewardsComponent } from './admin/rewards/rewards.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ChallengesComponent } from './challenges/challenges.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin/rewards/4', component: AdminRewardsComponent},
  {path: 'rewards', component: RewardsComponent},
  {path: 'challenges', component: ChallengesComponent},
  {path: 'admin/rewards', component: AdminRewardsComponent},
    {path: '', redirectTo: '', pathMatch: 'full'}, // Redirect default
=======
  { path: 'admin', component: AdminHomeComponent },
  {path: 'rewards', component: RewardsComponent},
  { path: 'admin/rewards/:id', component: AdminRewardsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirect default
>>>>>>> b933808c63ef065a26c31e45d5a8504f92e4bc92
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
