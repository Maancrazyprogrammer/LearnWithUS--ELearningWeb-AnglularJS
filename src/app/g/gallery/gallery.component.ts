import { Component } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  ngOnInit(){
    AOS.init();
  }
}
