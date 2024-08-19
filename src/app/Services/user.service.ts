import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  DB_URL = 'http://localhost:3000/users/'
  constructor(private http: HttpClient) { }

  getFav(id:any){
    return this.http.get(this.DB_URL+id+"/favourites?_expand=product")
  }
}
