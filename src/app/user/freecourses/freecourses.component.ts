import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-freecourses',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgClass,NgIf,NgFor,NgStyle],
  templateUrl: './freecourses.component.html',
  styleUrl: './freecourses.component.css'
})
export class FreecoursesComponent implements OnInit {
  loading: boolean = true;
  monthly: boolean = true;
  annually: boolean = false;
  
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

 
  ngOnInit() {Aos.init(); }
  Monthly(){
    this.monthly=true;
    this.annually=false;
   }
  Annually(){
 this.annually=true;
 this.monthly=false;
  }
}
