import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NgIf,ReactiveFormsModule 
  ],
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.css'
})
export class EmailVerificationComponent {
  verifyEmailForm: FormGroup;
  email: string;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: AuthServiceService, // Inject ApiService
    private router: Router,
    private route: ActivatedRoute,
    // private toastr: ToastrService // Inject ToastrService
  ) {
    this.verifyEmailForm = this.fb.group({
      digit1: ['', [Validators.required, Validators.pattern('\\d')]],
      digit2: ['', [Validators.required, Validators.pattern('\\d')]],
      digit3: ['', [Validators.required, Validators.pattern('\\d')]],
      digit4: ['', [Validators.required, Validators.pattern('\\d')]],
      digit5: ['', [Validators.required, Validators.pattern('\\d')]],
      digit6: ['', [Validators.required, Validators.pattern('\\d')]]
    });

    this.email = this.route.snapshot.paramMap.get('email') || '';
  }

  ngOnInit(): void {}

  get f() {
    return this.verifyEmailForm.controls;
  }

  onSubmit(): void {
    if (this.verifyEmailForm.invalid) {
      return;
    }

    const verificationCode = Object.values(this.verifyEmailForm.value).join('');

    const payload = {
      email: this.email,
      verification_code: verificationCode
    };
  
    this.apiService.verifyEmail(payload).subscribe(
      
      response => {
        
        // this.toastr.success('Email verification successful!', response.msg);
        this.router.navigate(['/d']); 
      },
      error => {
        this.errorMessage = error.error.msg;
        // this.toastr.error('Email verification failed. Please try again.',error.error.msg );
      }
    );
  }
  // onSubmit(): void {
  //   if (this.verifyEmailForm.valid) {
  //     this.authService.verifyEmail(this.verifyEmailForm.value).subscribe(
  //       response => {
  //         alert(response.msg);
  //         this.router.navigate(['/login']);
  //       },
  //       error => {
  //         alert(error.error.msg);
  //       }
  //     );
  //   }
  // }

  resendCode(): void {
    this.apiService.resendVerificationCode(this.email).subscribe(
      response => {
        alert('Code send to Your email address');
        // this.toastr.success('Verification code resent!', response.msg);
      },
      error => {
        alert('Something went wrong please try later');
        
        // this.toastr.error('Failed to resend verification code. Please try again.', error.error.msg);
      }
    );
  }
}
