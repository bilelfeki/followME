import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamousComponent } from './famous/famous.component';
import { FollowerComponent } from './follower/follower.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StatisticComponent } from './statistic/statistic.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"followers",component:FollowerComponent},
  {path:"famous",component:FamousComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"login",component:LoginComponent},
  {path:"statistic",component:StatisticComponent},
  {path:"sign up",component:SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
