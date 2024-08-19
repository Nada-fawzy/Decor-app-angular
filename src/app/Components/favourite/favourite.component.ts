import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FavouriteService } from '../../Services/favourite.service';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [HttpClientModule,
    CommonModule
  ],
  providers:[
    UserService,
    FavouriteService
  ],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent implements OnInit {
  userId = 1
  products:any
  constructor(private userService : UserService, private favService : FavouriteService, 
    private myRoute: ActivatedRoute , private router:Router) {
    // this.userId = myRoute.snapshot.params['id']
    // console.log(this.userId);
  }
  getFav(){
    this.userService.getFav(this.userId).subscribe({
      next: (data) => {
        console.log( "Fav : ", data);
        this.products = data
      }, error: (err) => {
        console.log(err);
      }
    })
  }
  ngOnInit(): void {
    this.getFav()
  }

  getProduct(prodId:any){
    this.router.navigate([`/product/`+prodId])
  }

  removeFav(prodId:any){
    this.favService.removeFav(prodId).subscribe({
      next:(success)=>{
        console.log(success);
        this.getFav()
      }
    })
  }

}
