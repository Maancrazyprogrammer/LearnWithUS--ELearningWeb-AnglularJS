import { Component } from '@angular/core';
import { FormGroup,  Validators, ReactiveFormsModule, FormBuilder  } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  unsavedData:boolean=true;
  checkUnsavedPageState():boolean{
    if(this.unsavedData){
      return confirm('There is some unsaved data, Are you sure you want to navigate?');
    }
    return true;
  }
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signupService: AuthServiceService,
    private router: Router,
    // private toastr: ToastrService 
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      whatsappNumber: ['', [Validators.required, Validators.pattern(/^\+92\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit():void {
    // console.warn(this.signupForm.value);
    if (this.signupForm.valid) {
      const { fullName, dob, whatsappNumber, email, password, confirmPassword } = this.signupForm.value;
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      const data = {
        full_name: fullName,
        dob: dob,
        whatsapp_number: whatsappNumber,
        email: email,
        password: password,
        confirm_password: confirmPassword
      };
      this.signupService.signup(data).subscribe(
        response => {
    
          const email = this.signupForm.value.email;
          // this.toastr.success('Signup successful!', response.msg);
          this.router.navigate(['/verify_email', email]);
        },
        error => {
          // this.toastr.error('Signup failed. Please try again.', error.error.msg);
        
        }
      );
    }
  }
 
  
}
