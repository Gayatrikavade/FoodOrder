import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/authentication/auth.service';
import { User } from '@firebase/auth-types';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

 subMenu =document.getElementById("subMenu");

 toggleMenu(){
  this.subMenu?.classList.toggle("open-menu");
 }

  @Input() isLoggedIn!: boolean;
  user$!: Observable<User | null>;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router:Router ,private authService:AuthService,private afAuth:AngularFireAuth){}
  
  ngOnInit(): void {
    this.user$ = this.afAuth.authState;
    this.user$.subscribe(user => {
      if (user) {
        // User is signed in, you can fetch user data here
        console.log('User is logged in:', user);
        // You can store user data in a variable to display in the template
        // this.userData = user;
      } else {
        // User is signed out
        console.log('User is logged out');
      }
    });
  }

  onLogout(): void {
    this.logout.emit();
    this.authService.logOut();
  }

}
