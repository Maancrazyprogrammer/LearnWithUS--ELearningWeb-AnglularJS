import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgClass,NgStyle,NgIf,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  profilePictureUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      address: [''],
      profilePicture: [null]
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
    Aos.init();
  }

  loadUserProfile() {
    // Mock user data, replace with actual data from your service
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      address: '1234 Elm Street',
      profilePicture: null
    };

    this.profileForm.patchValue(userData);
    if (userData.profilePicture) {
      this.profilePictureUrl = userData.profilePicture;
    }
  }

  updateProfile() {
    if (this.profileForm.valid) {
      const updatedData = this.profileForm.value;
      // Handle form submission logic, e.g., send data to backend
      console.log(updatedData);
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePictureUrl = reader.result;
        this.profileForm.patchValue({
          profilePicture: file
        });
      };
      reader.readAsDataURL(file);
    }
  }
  
}
