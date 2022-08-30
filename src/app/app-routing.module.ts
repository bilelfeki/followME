import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamousComponent } from './famous/famous.component';
import { FollowerComponent } from './follower/follower.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './services/guard.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StatisticComponent } from './statistic/statistic.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"followers",component:FollowerComponent,canActivate:[GuardGuard]},
  {path:"famous",component:FamousComponent,canActivate:[GuardGuard]},
  {path:"statistic",component:StatisticComponent,canActivate:[GuardGuard]},

  {path:"welcome",component:WelcomeComponent},
  {path:"login",component:LoginComponent},
  {path:"sign up",component:SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
