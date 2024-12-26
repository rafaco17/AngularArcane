import { Component } from '@angular/core';
import { SmallCarouselComponent } from '../small-carousel/small-carousel.component';
import { SynopsisComponent } from '../synopsis/synopsis.component';
import { NotificationSectionComponent } from '../notification-section/notification-section.component';
import { PlaylistSectionComponent } from '../playlist-section/playlist-section.component';

@Component({
  selector: 'app-main',
  imports: [SmallCarouselComponent, SynopsisComponent, NotificationSectionComponent, PlaylistSectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
}
