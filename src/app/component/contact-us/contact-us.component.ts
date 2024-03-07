import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  submitForm() {
    if (this.contactForm.invalid) {
      this.formError = true;
      return;
    }
    
    this.submitted = true;
    
    
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }
}
