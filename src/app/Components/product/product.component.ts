import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/Category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    HttpClientModule,
  CommonModule,
  AddProductDialogComponent
],
  providers: [
    CategoryService,ProductService
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  id: any;
  products:any[] = []
  constructor(private catService: CategoryService, private productService: ProductService,
    private myRoute: ActivatedRoute , private router:Router) {
    this.id = myRoute.snapshot.params['id']
    console.log(this.id);
  }
  ngOnInit(): void {

    //show all product from nav
    this.productService.getAllProduct().subscribe({
      next: (data) => {
        console.log(data);
        this.products = data

      }, error: (err) => {
        console.log(err);
      }
    })

  
    this.catService.getProductsFromCategory(this.id).subscribe({
      next: (data) => {
        console.log(data.products);
        this.products = data.products

      }, error: (err) => {
        console.log(err);
      }
    })

  }

  getProduct(prodId:any){
    this.router.navigate([`/product/`+prodId])
  }
}
