import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MainComponent } from './main/main.component';
import { EmptyModalComponent } from './empty-modal/empty-modal.component';
import { JunaidComponent } from './junaid/junaid.component';
import { VinishaComponent } from './vinisha/vinisha.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full' },
  {path:"main", component:MainComponent,
  children:[
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:"home", component:HomeComponent},
    {path:"junaid", component:JunaidComponent},
    {path:"vinisha", component:VinishaComponent},
    {path:"profile", component:UserProfileComponent, canActivate:[UserGuard]},
    {path:'portfolio', component:PortfolioComponent, canActivate:[UserGuard]},
    {path:'modal', component:EmptyModalComponent,
    children:[
      {path:'', redirectTo:'login',pathMatch:'full'},
      {path:"register", component:RegisterComponent},
      {path:"login", component:LoginComponent},
      {path:"forgot", component:ForgotComponent},
      {path:"reset", component:ResetComponent}
    ]},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
