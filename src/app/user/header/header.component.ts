import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgIf,NgClass,NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
 
}
