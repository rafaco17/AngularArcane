import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  playVideo() {
    const video = document.querySelector('.video') as HTMLVideoElement;
    if (video) {
      video.play().catch(error => console.log('Error playing video:', error));
    }
  }
}
