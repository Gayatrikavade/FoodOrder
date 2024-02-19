import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
// import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './component/search/search.component';
import { FormsModule } from '@angular/forms';
import { TagComponent } from './component/tag/tag.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { FoodpageComponent } from './component/foodpage/foodpage.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { RegisterComponent } from './component/register/register.component';
import { environment } from 'src/environments/environment.development';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { StartComponent } from './component/start/start.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    CartPageComponent,
    FoodpageComponent,
    NotFoundComponent,
    RegisterComponent,
    LogInComponent,
    VerifyEmailComponent,
    ForgetPasswordComponent,
    StartComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
