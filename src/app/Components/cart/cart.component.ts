import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { ActivatedRoute , Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers:[
    CartService,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  counter = signal(1);
  qnt:any
  totalPrice:any
  cart:any[] = []
  stars:boolean[] = [];
  constructor(myRoute: ActivatedRoute, private cartService: CartService , private router:Router){
  }

  getCart(){
    this.cartService.getCartProd().subscribe({
      next:(success)=>{
        console.log("Cart : ", success);
        this.cart = success;
        // console.log("Quantity " , this.qnt);
        
        // this.stars = Array(5).fill(false).map((_, index) => index < rate);
      }
    })
  }
  ngOnInit(): void {
    this.getCart()
  }

  removeFromCart(prodId : any){
    this.cartService.removeFromCart(prodId).subscribe({
      next:(removed)=>{
        console.log("Removed" , removed);
        this.getCart()
      }
    })
  }

  increment(prod:any){
    // this.counter.update(val => val+1);
    prod.Quantity++;
    // this.totalPrice = prod.product.price*prod.Quantity
  }
  decrement(product:any){
    // this.counter.update(val => val-1);
    if (product.Quantity > 1) {
      product.Quantity -= 1;
    }
  }

  getProduct(prodId:any){
    this.router.navigate([`/product/`+prodId])
  }
}
