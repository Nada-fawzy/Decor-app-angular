import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  DB_URL = 'http://localhost:3000/favourites/'
  constructor(private http: HttpClient) { }

  addToFav(prod: any):Observable<any>{
    return this.http.post(this.DB_URL , prod)
  }
  removeFav(id:any):Observable<any>{
    return this.http.delete(this.DB_URL+id)
  }
}
