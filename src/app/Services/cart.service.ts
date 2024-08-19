import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  DB_URL = 'http://localhost:3000/orders/'

  constructor(private http: HttpClient){ }
  getCartProd():Observable<any>{
    return this.http.get(this.DB_URL+"?_expand=product")
  }
  addToCart(product:any):Observable<any>{
    return this.http.post(this.DB_URL , product)
  }
  removeFromCart(prodId: any):Observable<any>{
    return this.http.delete(this.DB_URL+prodId)
  }
}
