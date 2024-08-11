import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BlogComponent } from "../../g/blog/blog.component";
import { EnrolledCoursesComponent } from "../enrolled-courses/enrolled-courses.component";
import { CourseDescComponent } from './course-desc/course-desc.component';
import Aos from 'aos';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass, NgStyle, NgIf, NgFor, BlogComponent, EnrolledCoursesComponent,CourseDescComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
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
placeholderCourses: any;

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
