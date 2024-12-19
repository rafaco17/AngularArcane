import { Component } from '@angular/core';
import { SmallCarouselComponent } from '../small-carousel/small-carousel.component';

@Component({
  selector: 'app-main',
  imports: [SmallCarouselComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
}
