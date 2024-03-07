import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FoodpageComponent } from './component/foodpage/foodpage.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { RegisterComponent } from './component/register/register.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

export const routes: Routes = [
  {path:'',redirectTo:'log-in',pathMatch:'full'},
  {path:'log-in',component:LogInComponent},
  {path:'register',component:RegisterComponent},
  { path: 'home', component: HomeComponent, 
   children: [
    { path: '', redirectTo: 'main', pathMatch: 'full' }, // Redirect to main content
    { path: 'main', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent }
  ]},
  {path:'search/:searchItem',component:HomeComponent },
  {path:'tag/:tags',component:HomeComponent },
  {path:'food/:id',component:FoodpageComponent},
  {path:'cart-page',component:CartPageComponent },
  {path:'verify-email',component:VerifyEmailComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'home/about-us',component:AboutUsComponent },
  {path:'contactus',component:ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
