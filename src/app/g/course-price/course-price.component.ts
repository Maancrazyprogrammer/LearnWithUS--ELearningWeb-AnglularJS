import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-course-price',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './course-price.component.html',
  styleUrl: './course-price.component.css'
})
export class CoursePriceComponent {

}
