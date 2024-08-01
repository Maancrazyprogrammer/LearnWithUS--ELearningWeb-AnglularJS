import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AuthServiceService } from '../../service/auth-service.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NgIf,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn:boolean=false;
  @Input({
    alias:'logonamerequired',
    required:true,
    transform:(value:string)=> value.toUpperCase()
  }) logoName:string='E-Learning Plateform';
 constructor(private service:AuthServiceService,private router:Router){
  this.service.isLoggedIn() ? this.isLoggedIn=true : this.isLoggedIn=false;
}

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
 
}
