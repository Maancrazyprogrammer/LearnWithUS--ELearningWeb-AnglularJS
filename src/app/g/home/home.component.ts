import { Component } from '@angular/core';
import 'animate.css';

import { SliderComponent } from '../slider/slider.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { CoursePriceComponent } from '../course-price/course-price.component';
import { BlogComponent } from '../blog/blog.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,GalleryComponent,CoursePriceComponent,BlogComponent,StatisticsComponent,FooterComponent,RouterOutlet,RouterModule,RouterLink,RouterLinkActive ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit() {
   
  }
}