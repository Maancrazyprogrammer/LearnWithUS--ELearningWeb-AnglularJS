import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-freecourses',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgClass,NgIf,NgFor,NgStyle],
  templateUrl: './freecourses.component.html',
  styleUrl: './freecourses.component.css'
})
export class FreecoursesComponent implements OnInit {
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
