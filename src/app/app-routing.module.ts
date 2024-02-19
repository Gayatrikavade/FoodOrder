import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FoodpageComponent } from './component/foodpage/foodpage.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { RegisterComponent } from './component/register/register.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { StartComponent } from './component/start/start.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AuthGuard } from './shared/models/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'start',pathMatch:'full'},
  {path:'start',component:StartComponent},
  {path:'home',component:HomeComponent ,canActivate: [AuthGuard]},
  {path:'search/:searchItem',component:HomeComponent ,canActivate: [AuthGuard]},
  {path:'tag/:tags',component:HomeComponent ,canActivate: [AuthGuard]},
  {path:'food/:id',component:FoodpageComponent ,canActivate: [AuthGuard]},
  {path:'cart-page',component:CartPageComponent ,canActivate: [AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'log-in',component:LogInComponent},
  {path:'verify-email',component:VerifyEmailComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'home/about-us',component:AboutUsComponent ,canActivate: [AuthGuard]},
  {path:'contactus',component:ContactUsComponent ,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
