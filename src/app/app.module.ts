import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChallengesComponent } from './challenges/challenges.component';
import { RewardsComponent } from './rewards/rewards.component';
import { AdminRewardsComponent } from './admin/rewards/rewards.component';
import { AdminHomeComponent } from './admin/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    NavigationComponent,
    RewardsComponent,
    AdminRewardsComponent,
    ChallengesComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatTabsModule,
    MatInputModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
