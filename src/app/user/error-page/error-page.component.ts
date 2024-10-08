import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {

  ngOnInit() {Aos.init(); }
}
