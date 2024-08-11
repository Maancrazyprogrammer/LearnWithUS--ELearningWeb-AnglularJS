import { Component, Input } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {

  @Input({
    alias:'logonamerequired',
    required:true,
    // transform:(value:string)=> value.toUpperCase()
  }) logoName:string='E-Learning Plateform';


  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoPlayers') videoPlayers!: ElementRef<HTMLVideoElement>;
  ngAfterViewInit(): void {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.muted = true;
    }
    if (this.videoPlayers) {
      this.videoPlayers.nativeElement.muted = true;
    }
  }
  ngOnInit(){
    AOS.init();
  }
}
