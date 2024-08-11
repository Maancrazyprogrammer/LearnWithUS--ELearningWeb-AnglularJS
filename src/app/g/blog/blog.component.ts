import { Component } from '@angular/core';

import AOS from "aos";
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
 
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  
ngOnInit(){
    AOS.init();
  }  
}
