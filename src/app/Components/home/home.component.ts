import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { CategoryService } from '../../Services/Category/category.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { CategoryComponent } from '../category/category.component';
import { HeaderComponent } from '../header/header.component';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SliderComponent,
    CategoryComponent,
    HeaderComponent,
    ProductComponent
  ],
  providers:[CategoryService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

constructor(){}


//use product service



}
