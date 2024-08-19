import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  DB_URL = 'http://localhost:3000/comments/'

  constructor(private http:HttpClient) { }

  AddComment(comment: { text: string, userId: string, productId: string }):Observable<any>{
    return this.http.post(this.DB_URL , comment)
  }
  DeleteComment(id:any):Observable<any>{
    return this.http.delete(this.DB_URL+id)
  }
}
