import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validator , FormControl , FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { response } from 'express';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../../Services/authentication.service';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers:[AuthenticationService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
   constructor(private _AuthService:AuthenticationService
               , private _Router:Router
   ){}
   LoginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required , Validators.email]) ,
    password:new FormControl(null , [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
   }) ;
   
   handleLogin(LoginForm:FormGroup)
   {
        if(LoginForm.valid)  
        {
          console.log(LoginForm.value);
          
           this._AuthService.Login(LoginForm.value).subscribe({
             next:(response) => {
                  console.log(response);
                    this._Router.navigate(['/home'])
              
             },
             error:(err)=>console.log(err),
           })
        }
         
   }
}