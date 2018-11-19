import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/home/home.component';
<<<<<<< HEAD
import { RewardsComponent } from './rewards/rewards.component';


const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent},
  {path: 'rewards', component: RewardsComponent},
=======
import { AdminRewardsComponent } from './admin/rewards/rewards.component';

const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin/rewards/4', component: AdminRewardsComponent},
>>>>>>> adabb749cb0694c4e0ab2e923ff29e7220610e1a
  {path: '', redirectTo: '', pathMatch: 'full'}, // Redirect default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
