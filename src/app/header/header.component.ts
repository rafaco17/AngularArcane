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

  ngOnInit(): void {
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
}
