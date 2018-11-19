import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/home/home.component';
import { AdminRewardsComponent } from './admin/rewards/rewards.component';
import { RewardsComponent } from './rewards/rewards.component';

const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin/rewards/4', component: AdminRewardsComponent},
  {path: 'rewards', component: RewardsComponent},
  {path: 'admin/rewards', component: AdminRewardsComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}, // Redirect default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
