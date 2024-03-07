import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '@firebase/auth-types';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn =false;

  user:User|null=null;

  constructor(private fireAuth:AngularFireAuth ,private router:Router,private matSnackBar:MatSnackBar) {
    this.fireAuth.authState.subscribe(user => {
      this.user = user; // Update user data when authentication state changes
      this.isLoggedIn = !!user;
    });
  }
  
  ngOnInit(): void {
   
  }
 
  login(email:string ,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then((res)=>{
      localStorage.setItem('token','true');
      this.isLoggedIn=true;
      this.router.navigate(['/home']);
    },
    err=>{
      alert('something went wrong');
      this.router.navigate(['/login']);
    }
    )
  }

  
  register(email:string, password:string){
    this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        alert('Registered successfully');
        this.isLoggedIn=true;
        this.router.navigate(['/home']); // Navigate to home page upon successful registration
      })
      .catch(err => {
        alert(err.message);
        this.router.navigate(['/register']);
      });
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
      this.showSuccessMessage("Login Successsfully");
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
      this.isLoggedIn=true;
    },
    err=>{
      alert(err.message);
    })
  }

  showSuccessMessage(message:string) {
    this.matSnackBar.open(message,'Close',{
      duration:3000,
      horizontalPosition:'end',
      verticalPosition:'top'
    })
  }
}
