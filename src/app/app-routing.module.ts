import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/home/home.component';
import { RewardsComponent } from './rewards/rewards.component';
import { AdminRewardsComponent } from './admin/rewards/rewards.component';

const routes: Routes = [
  { path: 'admin', component: AdminHomeComponent },
  {path: 'rewards', component: RewardsComponent},
  { path: 'admin/rewards/:id', component: AdminRewardsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirect default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
