import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import Aos from 'aos';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-buy-courses',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgIf,NgClass,NgFor,CurrencyPipe],
  templateUrl: './buy-courses.component.html',
  styleUrl: './buy-courses.component.css'
})
export class BuyCoursesComponent {
  loading: boolean = true;
  monthly: boolean = true;
  annually: boolean = false;
  products = [
    {
      name: 'Product 1',
      description: 'This is a short description of product 1.',
      price: 49.99,
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Product 2',
      description: 'This is a short description of product 2.',
      price: 59.99,
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Product 1',
      description: 'This is a short description of product 1.',
      price: 49.99,
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Product 2',
      description: 'This is a short description of product 2.',
      price: 59.99,
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Product 1',
      description: 'This is a short description of product 1.',
      price: 49.99,
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Product 2',
      description: 'This is a short description of product 2.',
      price: 59.99,
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Product 1',
      description: 'This is a short description of product 1.',
      price: 49.99,
      imageUrl: '/assets/images/img4.jpg'
    },
    {
      name: 'Product 2',
      description: 'This is a short description of product 2.',
      price: 59.99,
      imageUrl: '/assets/images/img4.jpg'
    },
    // Add more products as needed
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
