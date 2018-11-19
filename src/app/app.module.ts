import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import {MatCardModule} from '@angular/material/card';
<<<<<<< HEAD
import { RewardsComponent } from './rewards/rewards.component';
=======
import { AdminRewardsComponent } from './admin/rewards/rewards.component';
>>>>>>> adabb749cb0694c4e0ab2e923ff29e7220610e1a

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    NavigationComponent,
<<<<<<< HEAD
    RewardsComponent
=======
    AdminRewardsComponent
>>>>>>> adabb749cb0694c4e0ab2e923ff29e7220610e1a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
