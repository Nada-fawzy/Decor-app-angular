import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
 
@Injectable({
    providedIn :'root'
})
export class AuthenticationService {
    constructor(private _HttpClient:HttpClient){
    }
    isLogged:boolean=false
    Login(userData:object):Observable<any>
    {
      this.isLogged=true
        return this._HttpClient.post('http://localhost:3000/users' , userData)
    }
}