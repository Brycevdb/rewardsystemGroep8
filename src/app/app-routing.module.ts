import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/home/home.component';
import { AdminRewardsComponent } from './admin/rewards/rewards.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ChallengesComponent } from './challenges/challenges.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import { AdminChallengesComponent } from './admin/challenges/challenges.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuard]},
  {path: 'rewards', component: RewardsComponent},
  {path: 'challenges', component: ChallengesComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'admin/rewards', component: AdminRewardsComponent, canActivate: [AuthGuard]},
  { path: 'admin/rewards/:id', component: AdminRewardsComponent, canActivate: [AuthGuard] },
  {path: 'admin/challenges', component: AdminChallengesComponent, canActivate: [AuthGuard]},
  { path: 'admin/challenges/:id', component: AdminChallengesComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirect default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }