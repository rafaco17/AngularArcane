import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-small-carousel',
  imports: [],
  templateUrl: './item-small-carousel.component.html',
  styleUrl: './item-small-carousel.component.css'
})
export class ItemSmallCarouselComponent {
  @Input() description: string = ''
  @Input() image: string = ''
  @Input() hrefUrl: string = ''
}
