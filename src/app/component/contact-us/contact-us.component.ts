import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  @ViewChild('contactForm')
  contactForm!: NgForm;
  submitted: boolean = false;
  formError: boolean = false;

  constructor(private router: Router,private authService:AuthService,private matSnackBar:MatSnackBar) {}

  submitForm() {
    if(this.authService.isLoggedIn)
    {
      if (this.contactForm.invalid) {
        this.formError = true;
        return;
      }
      
    
    this.submitted = true;
    
    
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
    }
    else
    {
      this.showMessage('Login First');
      this.router.navigate(['/log-in']);
    }
    
  }

  showMessage(message: string) {
    this.matSnackBar.open(message,'Close',{
      duration:3000,
      horizontalPosition:'end',
      verticalPosition:'top'
    })
  }
}
