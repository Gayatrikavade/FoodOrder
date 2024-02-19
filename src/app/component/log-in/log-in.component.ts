import { Component } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  
 
  email:string='';
  password:string='';

  constructor(private auth:AuthService){}

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
