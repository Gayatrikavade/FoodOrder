import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {GoogleAuthProvider ,FacebookAuthProvider} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '@firebase/auth-types';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn =false;

  user:User|null=null;



  constructor(private fireAuth:AngularFireAuth ,private router:Router) {
     this.fireAuth.authState.subscribe(user => {
      this.user = user; // Update user data when authentication state changes
      this.isLoggedIn = !!user;
    });
  }
  
  ngOnInit(): void {
   
  }
  // isLoggedIn(): boolean {
  //   // Check if the user is authenticated (You can implement this based on your authentication mechanism)
  //   return !!localStorage.getItem('token');
  // }
  
  login(email:string ,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then((res)=>{
      localStorage.setItem('token','true');
      this.isLoggedIn=true;
      

      if(res.user?.emailVerified == true){
        this.router.navigate(['home']);
      }
      else{
        this.router.navigate(['/verify-email']);
      }
    },
    err=>{
      alert('something went wrong');
      this.router.navigate(['/login']);
    }
    )
  }

  register(email:string,password:string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(res=>{
      alert('Registered successfully');
      this.router.navigate(['/login']);
      this.sendEmailForVerification(res.user);
      
    },
    err=>{
      alert(err.message);
      this.router.navigate(['/register']);
    }
    )
  }

  logOut(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.isLoggedIn=false;
      this.router.navigate(['/login']);

    },
    err=>{
      alert(err.message);
    })
  }

  forgetPassword(email:string){
    this.fireAuth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verify-email']);
    },
    err=>{
      alert('Something went wrong!');
    })
  }

  // sendEmailForVerification(user:any){
  //   user.sendEmailForVerification().then((res:any)=>{
  //     this.router.navigate(['/verify-email']);
  //   },
  //  (err:any)=>{
  //   alert('Something went wrong');
  //   })
  // }

  sendEmailForVerification(user: any){

    this.fireAuth.currentUser.then(u => u?.sendEmailVerification())
      .then(() =>{
        this.router.navigate(['/verify-email']);
      }, (err: any) =>{
          alert('Something Went Wrong. Not able to send mail to registered Email.');
      })

  }

  googleSignIn(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res)=>{
      this.router.navigate(['/home']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
      this.isLoggedIn=true;
    },
    err=>{
      alert(err.message);
    })
  }
}
