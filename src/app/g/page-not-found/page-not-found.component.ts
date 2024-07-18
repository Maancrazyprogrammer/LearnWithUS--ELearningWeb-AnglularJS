import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';



@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  constructor(private checklogin: AuthServiceService, private router: Router) {
    
  }

  
  refresh(){
    if(this.checklogin.isLoggedIn()){
     this.router.navigate(['/d']);
    }else{
      this.router.navigate(['/home']);
    }
  }
}
