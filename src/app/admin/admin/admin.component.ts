import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { AnalyticsComponent } from '../analytics/analytics.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,AdminComponent,NgClass,NgStyle,NgIf,AnalyticsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private service:AuthServiceService){

  }
isSidebarOpen = false;

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
}
 
dropdownOpen = false;
userProfilePic: string | null = null;  // URL to the user's profile picture, if available
userName = 'John Doe';  // Replace this with the actual user name from your authentication service



toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
}

getInitial(name: string): string {
  return name.charAt(0).toUpperCase();
}

isSidebarsOpen = true;

toggledSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
}

  logout(){
    this.service.logout();
      }
}
