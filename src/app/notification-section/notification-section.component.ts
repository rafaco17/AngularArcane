import { Component, HostListener, OnInit } from '@angular/core';
import { NotificationCardComponent } from '../notification-card/notification-card.component';

@Component({
  selector: 'app-notification-section',
  imports: [NotificationCardComponent],
  templateUrl: './notification-section.component.html',
  styleUrl: './notification-section.component.css'
})
export class NotificationSectionComponent implements OnInit {
  items = [
    { title : 'League of Legends x Temporada 2 de Arcane', description : 'Cómo celebraremos la temporada 2 de Arcane en LoL.', date : '9/11/2024', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/82773b427821db31368ede721a8254c0f40584e9-1920x1080.jpg?auto=format&fit=fill&q=80&w=566'},
    { title : 'VALORANT x Arcane: Paquete de Coleccionista', description : 'Todo lo que necesitas saber sobre el paquete de edición limitada.', date : '4/11/2024', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b030f17585469caf0f2cd9f5cd88a2dabe31a703-1920x1080.jpg?auto=format&fit=fill&q=80&w=566'}, 
    { title : 'TFT se mete Dentro de Arcane', description : 'Descubre cómo Teamfight Tactics te permitirá revivir, rescribir y recrear los eventos de Arcane.', date : '10/11/2024', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/cd2b2599b84071ce93acf62d911669388207d1d5-1920x1080.jpg?auto=format&fit=fill&q=80&w=566' },
    { title : '2XKO: noticias de noviembre de 2024', description : 'Lo que aprendimos de Alpha Lab, en qué estamos trabajando y cuándo podrán volver a jugar 2XKO.', date : '11/11/2024', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0fa4bd3cfde36bdea468396fa4d5cad8da0f8805-1920x1080.jpg?auto=format&fit=fill&q=80&w=566' },
    { title : 'Notas de la versión 5.11', description : 'Rompe tu paz interior con Warwick y Ambessa en El camino de los Campeones.', date : '5/11/2024', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ed35bf8fa13c7f7bc7676f8b17b5cbeed2898611-1920x960.jpg?auto=format&fit=fill&q=80&w=566' }
  ]


  private startX: number = 0
  private currentTranslateX: number = 0
  private lastTranslateX: number = 0
  private isDragging: boolean = false
  private animationFrame: number | null = null
  private itemsContainer: HTMLElement | null = null

  ngOnInit(): void {
    this.itemsContainer = document.querySelector('.carousel_notifications') as HTMLElement
    console.log('Este es el componente padre: ',this.itemsContainer)
  }

  onMouseDown(event : MouseEvent) {
    this.startX = event.clientX
    this.isDragging = true
    this.lastTranslateX = this.currentTranslateX

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame)
      this.animationFrame = null
    }
  }

  @HostListener('document:mousemove',['$event'])
  onMouseMove(event : MouseEvent): void {
    if (!this.isDragging) return

    const deltaX = event.clientX - this.startX
    this.currentTranslateX = this.lastTranslateX + deltaX * 0.75

    this.scheduleUpdate()
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    if (!this.isDragging) return;

    this.isDragging = false
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
