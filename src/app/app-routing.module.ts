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
  { path: 'admin/rewards/:id', component: AdminRewardsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirect default
=======
  { path: 'admin', component: AdminHomeComponent },
  { path: 'admin/rewards/:id', component: AdminRewardsComponent },
  {path: 'rewards', component: RewardsComponent},
  {path: 'challenges', component: ChallengesComponent},
  { path: '', redirectTo: '', pathMatch: 'full' } // Redirect default
>>>>>>> 5f76237587b22a10e09e482d77d43f1cf0c3f1ab
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
