import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AuthServiceService } from '../../service/auth-service.service';
import { NgClass, NgIf } from '@angular/common';
import AOS from "aos";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NgIf,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn:boolean | undefined
  @Input({
    alias:'logonamerequired',
    required:true,
    transform:(value:string)=> value.toUpperCase()
  }) logoName:string='E-Learning Plateform';
 constructor(private service:AuthServiceService,private router:Router){
  
}

ngOnInit():void{
  AOS.init();
  if(this.service.isLoggedIn()){
    this.isLoggedIn=true;
  }
  else{
    this.isLoggedIn=false;
  }
}
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
