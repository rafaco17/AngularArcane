import { Component } from '@angular/core';
import { ItemHeaderComponent } from '../item-header/item-header.component';

@Component({
  selector: 'app-header',
  imports: [ItemHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items = [
    { description : 'noticias', href : 'https://www.youtube.com/watch?v=qaTfRV5XwNc&list=RDqaTfRV5XwNc&start_radio=1' },
    { description : 'creador de avatares', href : '/' }
  ]
}
