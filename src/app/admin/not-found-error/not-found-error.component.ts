import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-not-found-error',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './not-found-error.component.html',
  styleUrl: './not-found-error.component.css'
})
export class NotFoundErrorComponent {

}
