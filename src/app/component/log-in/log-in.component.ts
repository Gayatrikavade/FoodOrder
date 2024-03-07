import { Component } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  
 
  email:string='';
  password:string='';
  isLoggedIn = false;
  user: User | null = null;

  constructor(private auth:AuthService,private fireAuth: AngularFireAuth,private route:Router,private matSnackBar:MatSnackBar){

    this.fireAuth.authState.subscribe(user => {
      this.user = user;
      if (user) {
        this.route.navigate(['/home']);
      }
    });
  }

  ngOnInit():void{
 
  }

  login(){
    if(this.email==''){
      alert('please enter the email');
      return;
    }
    if(this.password==''){
      alert('please enter the password');
      return;
    }
    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';
  }

  signInWithGoogle(){
    this.auth.googleSignIn();
    
  }

  
}
