import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { toUSVString } from 'util';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgIf,ReactiveFormsModule,ToastrModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {
 

  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}
  
   get email() {
     return this.loginForm.get('email');
   }
 
   get password() {
     return this.loginForm.get('password');
   }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        () => {
          this.toastr.success('Login successful!', 'Success');
          this.router.navigate(['/d']);
         

        },
        error => {
          this.loginError = error.error.msg;
          this.toastr.error('Login failed. Please check your credentials.' );
        }
      );
    }
  }

}
