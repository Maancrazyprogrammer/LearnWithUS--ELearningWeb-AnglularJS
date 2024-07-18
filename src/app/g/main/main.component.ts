import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { CoursePriceComponent } from '../course-price/course-price.component';
import { BlogComponent } from '../blog/blog.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [GalleryComponent,CoursePriceComponent,BlogComponent,StatisticsComponent,FooterComponent,RouterOutlet,RouterModule,RouterLink,RouterLinkActive,NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
title:string = 'Learn With US!';
}
