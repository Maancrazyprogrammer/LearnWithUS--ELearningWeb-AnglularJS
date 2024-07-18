import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-enrolled-courses',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgClass,NgStyle,NgIf,NgFor],
  templateUrl: './enrolled-courses.component.html',
  styleUrl: './enrolled-courses.component.css'
})
export class EnrolledCoursesComponent implements OnInit {
  courses = [
    {
      name: 'Guided Project',
      description: 'MERN Stack Development Course.',
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Guided Project',
      description: 'MERN Stack Development Course.',
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Guided Project',
      description: 'MERN Stack Development Course.',
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Guided Project',
      description: 'MERN Stack Development Course.',
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Guided Project',
      description: 'MERN Stack Development Course.',
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Guided Project',
      description: 'MERN Stack Development Course.',
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Guided Project',
      description: 'MERN Stack Development Course.',
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Guided Project',
      description: 'MERN Stack Development Course.',
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Guided Project',
      description: 'MERN Stack Development Course.',
      imageUrl: '/assets/images/img4.jpg'
    }
    // Add more courses as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
