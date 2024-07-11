import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {
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
}
