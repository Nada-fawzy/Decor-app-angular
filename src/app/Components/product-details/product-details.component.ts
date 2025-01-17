import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductService } from '../../Services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CommentsService } from '../../Services/comments.service';
import { CartService } from '../../Services/cart.service';
import { FavouriteService } from '../../Services/favourite.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ProductService,
    CommentsService,
    CartService , 
    FavouriteService
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit {
  id = 0;
  product: any;
  colors: any;
  imgs_lg_arr: string[] = [];
  imgs_lg: string = '';
  imgs_sm: string[] = [];
  comments: any[]=[];
  rate: number = 0
  stars: boolean[] = []
  constructor(myRoute: ActivatedRoute, private prodService: ProductService, private commentServise: CommentsService ,
     private cartService:CartService , private favService: FavouriteService) {
    this.id = myRoute.snapshot.params['id']
    // console.log(this.id);
  }

  getComments(){
    this.prodService.GetComments(this.id).subscribe({
      next:(comments)=>{
        console.log("Get Comments : " , comments);
        this.comments = comments;
      }
    })
  }
  ngOnInit(): void {
    this.prodService.GetProduct(this.id).subscribe({
      next: (success) => {
        this.product = success;
        if (this.product.color) {
          this.colors = this.product.color
        }
        this.imgs_lg_arr = this.product.paths.icon
        console.log("ICONS" , this.imgs_lg_arr);
        
        this.imgs_lg = this.product.paths.img
        // console.log(this.imgs_lg);
        // this.imgs_sm = this.product.medium.split('|')
        // this.comments = this.product.comments
        this.rate = this.product.rate
        this.stars = Array(5).fill(false).map((_, index) => index < this.rate);
        console.log("Rate : ", this.rate);
        console.log("Rate Arr: ", this.stars);

        // console.log(this.colors);
        console.log("Success: ", success);
      },
      error: (err) => {
        console.log(err);
      }
    })

    this.getComments()
    // this.prodService.GetComments(this.id).subscribe({
    //   next:(comments)=>{
    //     console.log("Get Comments : " , comments);
    //     this.comments = comments;
    //   }
    // })
  }

  selectImg(idx: number) {
    this.imgs_lg = this.imgs_lg_arr[idx]
    console.log("Clicked : ", idx);
  }
  // next(){
  //   this.id++;
  //   this.prodService.GetProduct(this.id).subscribe({
  //     next:(success)=>{
  //       this.product = success;
  //       if(this.product.colour){
  //         this.colors = this.product.colour.split('|')
  //       }
  //       this.imgs_lg_arr = this.product.large.split('|')
  //       this.imgs_lg = this.imgs_lg_arr[0]
  //       // console.log(this.imgs_lg);
  //       this.imgs_sm = this.product.medium.split('|')
  //       this.rate = this.product.rating
  //       this.stars = Array(5).fill(false).map((_, index) => index < this.rate);
  //       console.log("Rate : " , this.rate);
  //       console.log("Rate Arr: " , this.stars);

  //       // console.log(this.colors);
  //       console.log("Success: ",success);
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     }
  // })
  // }

  addComment(newComment: any) {
    console.log(newComment.value);
    if (newComment.value) {
      let commentData = {text: newComment.value, userId: "1", productId: this.id.toString() }
      this.commentServise.AddComment(commentData).subscribe({
        next: (success) => {
          console.log("Comment Added ", success);
          // this.comments = [...this.comments, success]
          this.getComments()
          newComment.value = ''
        } , 
        error: (err)=>{
          console.log(err);
        }
      })
    }
  }

  deleteComment(id:any){
    this.commentServise.DeleteComment(id).subscribe({
      next:(deleted)=>{
        console.log("Deleted : " , deleted);
        this.comments = this.comments.filter(comment => comment.id !== id);
      }
    })
  }

  addToCart(prodId:any){
    let prod = {"Quantity": 1, "productId": prodId ,"userId": "1"}
    this.cartService.addToCart(prod).subscribe({
      next:(success)=>{
        console.log( "Added To Cart", success);
        alert("Added To Cart")
      }
    })
  }

  addToFav(prodId:any){
    let prod={productId : prodId , userId : "1"}
    this.favService.addToFav(prod).subscribe({
      next : (success)=>{
        console.log(success);
        alert("Added To Favourites")
      }
    })
  }
}
