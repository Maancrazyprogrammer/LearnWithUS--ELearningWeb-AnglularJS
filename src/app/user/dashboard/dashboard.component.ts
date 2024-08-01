import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { AuthServiceService } from '../../service/auth-service.service';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../../g/navbar/navbar.component';
import { ProfileComponent } from '../profile/profile.component';
import { BuyCoursesComponent } from '../buy-courses/buy-courses.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, RouterLink, RouterLinkActive, CoursesComponent, NgClass, NgIf, HeaderComponent, NgStyle, NavbarComponent, ProfileComponent,BuyCoursesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
sidebarService: any;
constructor(private service: AuthServiceService){

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