// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact-us',
//   standalone: true,
//   imports: [],
//   templateUrl: './contact-us.component.html',
//   styleUrl: './contact-us.component.css'
// })
// export class ContactUsComponent {

// }


// contact-us.component.ts 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
//import { Router } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service'; 
//import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],  
  standalone:true,
  imports:[ 
    FormsModule,
    ReactiveFormsModule, 
    CommonModule, 
    
  ],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form Submitted', formData);
      // Handle form submission logic, e.g., send the data to a server
      this.contactForm.reset();
    }
  }
}
