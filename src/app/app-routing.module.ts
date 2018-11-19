import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/home/home.component';
import { AdminRewardsComponent } from './admin/rewards/rewards.component';
import { RewardsComponent } from './rewards/rewards.component';

const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent},
<<<<<<< HEAD
  {path: 'admin/rewards/4', component: AdminRewardsComponent},
  {path: 'rewards', component: RewardsComponent},
=======
  {path: 'admin/rewards', component: AdminRewardsComponent},
>>>>>>> db16fe119adf1c891ccdd41f4a4d598113172709
  {path: '', redirectTo: '', pathMatch: 'full'}, // Redirect default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
