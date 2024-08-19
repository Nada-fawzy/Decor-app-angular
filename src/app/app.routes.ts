import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import {  ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import { FavouriteComponent } from './Components/favourite/favourite.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    { path: 'login', component:LoginComponent },
    {path:'home',component:HomeComponent},
    {path:'product',component:ProductComponent},

    {path:'products/:id',component:ProductComponent},
    {path:'product/:id',component:ProductDetailsComponent},

    {path:'cart',component:CartComponent},
    {path:'favourites',component:FavouriteComponent},

    //profile
    {path:'contactUs' , component:ContactUsComponent},
    {path:'**',component:ErrorComponent} 
];
