import { CommonModule } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../Services/Category/category.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {  SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductService } from '../../Services/product.service';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    CarouselModule,
    SlickCarouselModule
  ],
  providers:[CategoryService,ProductService],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent implements OnInit{
[x: string]: any;
  constructor(private categoryService:CategoryService ,private productService:ProductService){}
  categoryList: any[]=[];

  slick = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots":true,
    "arrows":true,
    "autoplaySpeed":5000,
    "pauseOnHover":true,
    "infinite":true,
    responsive: [
      {
        "breakpoint": 992,
        "settings": {
          "arrows":true,
          "infinite":true,
          "slidesToShow": 3,
          "slidesToScroll": 3
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows":true,
          "infinite":true,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ]
  };
  productList:any[]=[]

  

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe({
      next:(data)=>{
        this.productList=data;
        console.log(this.productList);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

    this.categoryService.getAllCategory().subscribe({
      next:(data)=>{this.categoryList=data},
      error:(err)=>{console.log(err);
      }
    })

 
  }

 

  
}
