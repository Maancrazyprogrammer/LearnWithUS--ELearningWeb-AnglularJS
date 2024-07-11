import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './g/home/home.component';
import { NavbarComponent } from './g/navbar/navbar.component';
import { SliderComponent } from './g/slider/slider.component';
import { HeroComponent } from './g/hero/hero.component';
import { FooterComponent } from './g/footer/footer.component';
import { MainComponent } from './g/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,NavbarComponent,SliderComponent,HeroComponent,FooterComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
