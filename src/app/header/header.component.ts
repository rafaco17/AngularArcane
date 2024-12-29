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

  private scrollListener!: () => void

  constructor(private renderer: Renderer2) {}

  private modalElement: HTMLElement | null = null

  ngOnInit(): void {
    this.modalElement = document.querySelector('#modal') as HTMLElement

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

}
