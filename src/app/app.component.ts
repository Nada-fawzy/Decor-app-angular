import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddProductDialogComponent } from './Components/add-product-dialog/add-product-dialog.component';
import { SliderComponent } from './Components/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //header
    HeaderComponent,
    //Home
    HomeComponent,
    //footer
    FooterComponent,

    AddProductDialogComponent,
    SliderComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
