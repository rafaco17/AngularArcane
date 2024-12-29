import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ItemHeaderComponent } from '../item-header/item-header.component';

@Component({
  selector: 'app-header',
  imports: [ItemHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  items = [
    { description : 'noticias', href : 'https://www.youtube.com/watch?v=qaTfRV5XwNc&list=RDqaTfRV5XwNc&start_radio=1' },
    { description : 'creador de avatares', href : '/' }
  ]

  cardHeader = {
    description : 'Recread vuestras batallas favoritas de Arcane en el nuevo set de TFT.',
    imageUrl: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/28fe569a5aab5a4ba80e722cd4e873e30cbb2782-660x428.jpg??&format=pjpg&quality=85'
  }

  private scrollListener!: () => void

  constructor(private renderer: Renderer2) {}

  private modalElement: HTMLElement | null = null
  private dinamicContainer: HTMLElement | null = null

  ngOnInit(): void {
    this.modalElement = document.querySelector('#modal') as HTMLElement
    this.dinamicContainer = document.querySelector('#imageDisabled') as HTMLElement


    if (this.modalElement) {
      this.modalElement.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        // Verifica si se hizo clic en el pseudo-elemento ::before
        if (this.isClickOnPseudoElement(target)) {
          this.closeModal();
        }
      });
    }

    this.scrollListener = this.renderer.listen('window','scroll',() => {
      const header = document.getElementById('header')
      if(window.scrollY > 82) {
        header?.classList.add('scrolled')
      } else {
        header?.classList.remove('scrolled')
      }
    })
  }

  ngOnDestroy(): void {
    if(this.scrollListener) {
      this.scrollListener()
    }
  }

  isClickOnPseudoElement(target: HTMLElement): boolean {
    const computedStyle = window.getComputedStyle(target, '::before');
    return computedStyle && computedStyle.content !== 'none';
  }

  openModal():void {
    if(this.modalElement) {
      this.modalElement.style.display = 'block'
      this.renderer.addClass(document.body, 'no-scroll')
    }
  }

  closeModal():void {
    if(this.modalElement) {
      this.modalElement.style.display = 'none'
      this.renderer.removeClass(document.body, 'no-scroll')
    }
  }

  onMouseEnter(content : PropCardHeader):void {
    this.cardHeader.description = content.description
    this.cardHeader.imageUrl = content.imageUrl

    if(this.dinamicContainer) {
      this.dinamicContainer.style.display = 'none'
    }
  }

  onMouseUp():void {
    this.cardHeader.description = 'Recread vuestras batallas favoritas de Arcane en el nuevo set de TFT'
    this.cardHeader.imageUrl = 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/28fe569a5aab5a4ba80e722cd4e873e30cbb2782-660x428.jpg??&format=pjpg&quality=85'

    if(this.dinamicContainer) {
      this.dinamicContainer.style.display = 'block'
    }
  }

}

interface PropCardHeader {
  description : string,
  imageUrl : string
}
