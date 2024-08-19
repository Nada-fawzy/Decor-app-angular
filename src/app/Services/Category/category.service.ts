import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
db_URL='http://localhost:3000/categories'

  constructor(private http:HttpClient) { }

  getAllCategory():Observable<any>
  {
   return this.http.get(this.db_URL);
  }
  getProductsFromCategory(id:string):Observable<any>
  {
    return this.http.get(this.db_URL+`/${id}?_embed=products`)
  }

}
