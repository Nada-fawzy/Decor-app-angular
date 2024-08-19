import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[AuthenticationService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
isLogin:boolean=false
//check if user loged or not from auth service
constructor(private authService:AuthenticationService){}
ngOnInit(): void {
  this.isLogin =this.authService.isLogged
  console.log(this.isLogin);
  
}

isLoginCheck()
{
  //this.isLogin=true
}
}
