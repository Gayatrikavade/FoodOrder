import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/authentication/auth.service';
import { User } from '@firebase/auth-types';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isLoggedIn = false;
  user: User | null = null;

  constructor(private fireAuth: AngularFireAuth,private authService: AuthService) {
    this.fireAuth.authState.subscribe(user => {
      this.user = user;
      this.isLoggedIn = !!user;
    });
  }

 
}
