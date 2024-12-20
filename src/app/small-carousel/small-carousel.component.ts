import { Component } from '@angular/core';
import { ItemSmallCarouselComponent } from '../item-small-carousel/item-small-carousel.component';

@Component({
  selector: 'app-small-carousel',
  imports: [ItemSmallCarouselComponent],
  templateUrl: './small-carousel.component.html',
  styleUrl: './small-carousel.component.css'
})
export class SmallCarouselComponent {
  items = [
    { name : 'The Line | Videoclip', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47222b86ade6a92edc056f0b9cd4917178b81f44-1920x1080.jpg?auto=format&fit=fill&q=80&w=413', href : 'https://www.youtube.com/watch?v=E2Rj2gQAyPA' },
    { name : 'Paint the Town Blue', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/640ac1698851dbb7428bb47dd2a9a075c3fed98e-2560x1441.png?auto=format&fit=fill&q=80&w=413', href : 'https://www.youtube.com/watch?v=pl2K9rvsS74' },
    { name : 'Come Play', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c4115d233f6483627474d40f43b2f8d15f881534-1920x1080.jpg?auto=format&fit=fill&q=80&w=413', href : 'https://www.youtube.com/watch?v=3jf6xOg6e7Y' },
    { name : 'Arcane: Temporada 2 | Tráiler oficial', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/459757faf2cf680fb685343ddcbcec3828f8bab4-1920x1080.jpg?auto=format&fit=fill&q=80&w=413', href : 'https://www.youtube.com/watch?v=hsffPST-x1k' },
    { name : 'Arcane: Tráiler "Come Play"', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7d1f3b9692f198b77f8594ae56e19954fdfd8a1a-1920x1080.jpg?auto=format&fit=fill&q=80&w=413', href : 'https://www.youtube.com/watch?v=5Hy6M3Lk08c' },
    { name : 'Avance de Arcane en los juegos: Come Play', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9ff86200eed0c2566469e2f5834890df2b0c9050-1920x1080.jpg?auto=format&fit=fill&q=80&w=413',  href : 'https://www.youtube.com/watch?v=rR5vyzjGwmk&embeds_referring_euri=https%3A%2F%2Fwww.arcane.com%2F' }
  ]

  private currentTranslateX: number = 0
  private snapPoints: number[] = [0, -354, -670]

  onForward(): void {
    const currentIndex = this.snapPoints.indexOf(this.currentTranslateX)
    if(currentIndex < this.snapPoints.length - 1) {
      this.currentTranslateX = this.snapPoints[currentIndex + 1]
      this.updateTransform(this.currentTranslateX)
    }
  } 

  onBackward(): void {
    const currentIndex = this.snapPoints.indexOf(this.currentTranslateX)
    if(currentIndex !== 0) {
      this.currentTranslateX = this.snapPoints[currentIndex - 1]
      this.updateTransform(this.currentTranslateX)
    }
  }

  private updateTransform(value: number): void {
    const itemsContainer = document.querySelector('.container_items') as HTMLElement;
    itemsContainer.style.transform = `translate3d(${value}px, 0, 0)`;
  }
}
