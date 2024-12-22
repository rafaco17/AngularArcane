import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ItemSmallCarouselComponent } from '../item-small-carousel/item-small-carousel.component';

@Component({
  selector: 'app-small-carousel',
  imports: [ItemSmallCarouselComponent],
  templateUrl: './small-carousel.component.html',
  styleUrl: './small-carousel.component.css'
})
export class SmallCarouselComponent implements OnInit {
  items = [
    { name : 'The Line | Videoclip', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47222b86ade6a92edc056f0b9cd4917178b81f44-1920x1080.jpg?auto=format&fit=fill&q=80&w=413', href : 'https://www.youtube.com/watch?v=E2Rj2gQAyPA' },
    { name : 'Paint the Town Blue', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/640ac1698851dbb7428bb47dd2a9a075c3fed98e-2560x1441.png?auto=format&fit=fill&q=80&w=413', href : 'https://www.youtube.com/watch?v=pl2K9rvsS74' },
    { name : 'Come Play', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c4115d233f6483627474d40f43b2f8d15f881534-1920x1080.jpg?auto=format&fit=fill&q=80&w=413', href : 'https://www.youtube.com/watch?v=3jf6xOg6e7Y' },
    { name : 'Arcane: Temporada 2 | Tráiler oficial', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/459757faf2cf680fb685343ddcbcec3828f8bab4-1920x1080.jpg?auto=format&fit=fill&q=80&w=413', href : 'https://www.youtube.com/watch?v=hsffPST-x1k' },
    { name : 'Arcane: Tráiler "Come Play"', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7d1f3b9692f198b77f8594ae56e19954fdfd8a1a-1920x1080.jpg?auto=format&fit=fill&q=80&w=413', href : 'https://www.youtube.com/watch?v=5Hy6M3Lk08c' },
    { name : 'Avance de Arcane en los juegos: Come Play', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9ff86200eed0c2566469e2f5834890df2b0c9050-1920x1080.jpg?auto=format&fit=fill&q=80&w=413',  href : 'https://www.youtube.com/watch?v=rR5vyzjGwmk&embeds_referring_euri=https%3A%2F%2Fwww.arcane.com%2F' }
  ]

  private startX: number = 0; // Coordenada inicial del clic
  private currentTranslateX: number = 0
  private lastTranslateX: number = 0; // Última posición fija antes de comenzar a mover
  private snapPoints: number[] = [0, -354, -670]
  private isDragging: boolean = false; // Indica si el usuario está moviendo el carrusel
  private itemsContainer: HTMLElement | null = null;
  private animationFrame: number | null = null;

  buttonLeft: boolean = true
  buttonRight: boolean = false

  private buttonLeftContainer: HTMLElement | null = null
  private buttonRightContainer: HTMLElement | null = null
  

  private disableButtonListener!: () => void
  private resizeListener!: () => void

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.itemsContainer = document.querySelector('.container_items') as HTMLElement
    this.buttonLeftContainer = document.querySelector('.button_left') as HTMLElement
    this.buttonRightContainer = document.querySelector('.button_right') as HTMLElement
    
    this.setSnapPoints()
    this.resizeListener = this.renderer.listen('window', 'resize', () => {
      this.setSnapPoints()
    })

    this.disableButtonListener = this.renderer.listen('document','mousemove', () => {
      if (this.currentTranslateX >= this.snapPoints[0]) {
        this.buttonLeft = false
        if (this.buttonLeftContainer) {
          this.buttonLeftContainer.style.cursor = 'not-allowed'
          this.buttonLeftContainer.style.fill = '#535353'
        }
      } else {
        this.buttonLeft = true
        if (this.buttonLeftContainer) {
          this.buttonLeftContainer.style.cursor = 'pointer'
          this.buttonLeftContainer.style.fill = '#a7b6e3'
        }
      }

      if (this.currentTranslateX <= this.snapPoints[this.snapPoints.length - 1] ) {
        this.buttonRight = false
        if (this.buttonRightContainer) {
          this.buttonRightContainer.style.cursor = 'not-allowed';
          this.buttonRightContainer.style.fill = '#535353'
        }
      } else {
        this.buttonRight = true
        if (this.buttonRightContainer) {
          this.buttonRightContainer.style.cursor = 'pointer';
          this.buttonRightContainer.style.fill = '#a7b6e3'
        }
      }
    })
  }

  ngOnDestroy(): void {
    if(this.disableButtonListener) {
      this.disableButtonListener()
    }

    if(this.resizeListener) {
      this.resizeListener
    }
  }

  private setSnapPoints(): void {
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 1300) {
      this.snapPoints = [0, -354, -670];
    } else if (screenWidth >= 1250) {
      this.snapPoints = [0, -340, -640, -940];
    } else if (screenWidth >= 1100) {
      this.snapPoints = [0, -340, -680, -1060];
    } else if (screenWidth >= 900) {
      this.snapPoints = [0, -340, -680, -1060, -1300]
    } else if (screenWidth >= 700) {
      this.snapPoints = [0, -380, -736, -1100, -1440]
    } else if (screenWidth >= 410) {
      this.snapPoints = [0, -340, -646, -900, -1200, -1500]
    } else if (screenWidth >= 360) {
      this.snapPoints = [0, -270, -540, -800, -1040, -1220]
    } else {
      this.snapPoints = [0, -270, -540, -800, -1040]
    }

    // FALTA COLOCAR MAS

  
    console.log('SnapPoints updated:', this.snapPoints);
  }

  onForward(): void {
    const currentIndex = this.snapPoints.indexOf(this.currentTranslateX);
    if (currentIndex < this.snapPoints.length - 1) {
      this.animateTo(this.snapPoints[currentIndex + 1]);
    }
  }

  onBackward(): void {
    const currentIndex = this.snapPoints.indexOf(this.currentTranslateX);
    if (currentIndex !== 0) {
      this.animateTo(this.snapPoints[currentIndex - 1]);
    }
  }

  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX;
    this.isDragging = true;
    this.lastTranslateX = this.currentTranslateX;


    // Cancelar cualquier animación activa
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;

    const deltaX = event.clientX - this.startX;
    this.currentTranslateX = this.lastTranslateX + deltaX * 0.75;

    // console.log(this.currentTranslateX)

    // Usar requestAnimationFrame para suavizar
    this.scheduleUpdate();
  }
  
  @HostListener('document:mouseup')
  onMouseUp(): void {
    if (!this.isDragging) return;

    this.isDragging = false;
    const closestPoint = this.snapToClosestPoint(this.currentTranslateX);
    this.animateTo(closestPoint); // Animar hasta la posición más cercana
  }

  private snapToClosestPoint(currentX: number): number {
    return this.snapPoints.reduce((prev, curr) =>
      Math.abs(curr - currentX) < Math.abs(prev - currentX) ? curr : prev
    );
  }

  private animateTo(target: number): void {
    if (this.itemsContainer) {
      this.itemsContainer.style.transition = 'transform 0.3s ease-out';
      this.itemsContainer.style.transform = `translate3d(${target}px, 0, 0)`;
    }
    this.currentTranslateX = target;
    this.lastTranslateX = target;
  }

  private scheduleUpdate(): void {
    if (this.animationFrame) return;
    this.animationFrame = requestAnimationFrame(() => {
      if (this.itemsContainer) {
        this.itemsContainer.style.transition = 'none';
        this.itemsContainer.style.transform = `translate3d(${this.currentTranslateX}px, 0, 0)`;
      }
      this.animationFrame = null;
    });
  }
}
