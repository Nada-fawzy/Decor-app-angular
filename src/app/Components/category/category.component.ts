import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryService } from '../../Services/Category/category.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[CategoryService],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  productList:any[]=[]
  categoryList:any[]=[]
  catID:any

  constructor(private categoryService:CategoryService,private router:Router){}

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe({
      next:(data)=>{
        this.categoryList=data
      },error:(err)=>{
        console.log(err);
        
      }
    })

  }
  getProducts(id:string)
  {
    //navigate to products page with this id category
    this.categoryService.getProductsFromCategory(id).subscribe({
      next:(data)=>{
        console.log(data.products);
        console.log(id);
        
        this.router.navigate([`/products/`+id])
        
      },error:(err)=>{
        console.log(err);
      }
    })

  }

}
