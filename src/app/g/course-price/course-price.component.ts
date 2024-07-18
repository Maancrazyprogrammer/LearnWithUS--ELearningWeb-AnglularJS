import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';


@Component({
  selector: 'app-course-price',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './course-price.component.html',
  styleUrl: './course-price.component.css'
})
export class CoursePriceComponent {

  constructor(private authservice: AuthServiceService, private router:Router){
  }
  IsLogin(){
    if(this.authservice.isLoggedIn()){
      this.router.navigate(['/d/fcourses']);
    }  
    else{
      this.router.navigate(['login']);
    }
  }
}
