import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  DB_URL = 'http://localhost:3000/products/'

  constructor(private http: HttpClient){ }
  GetProduct(id:number):Observable<any>{
    return this.http.get(this.DB_URL + id +"?_embed=comments&_expand=category")
  }
  getAllProduct():Observable<any>
  {
    return this.http.get("http://localhost:3000/products")
  }
  
  GetComments(prodId:any):Observable<any>{
    return this.http.get(this.DB_URL+prodId+"/comments?_expand=user")
  }
  createProduct(item: any):Observable<any>{
    return this.http.post('http://localhost:3000/products',item);
  }
}
