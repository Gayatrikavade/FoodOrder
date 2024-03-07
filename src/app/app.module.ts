import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
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
import { HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule, Routes, Scroll} from '@angular/router';
import { routes } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

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
    CommonModule, // Add CommonModule here
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
