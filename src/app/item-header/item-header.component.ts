import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-header',
  imports: [],
  templateUrl: './item-header.component.html',
  styleUrl: './item-header.component.css'
})
export class ItemHeaderComponent {
  @Input() nameItem: string = ''
  @Input() hrefUrl: string = ''
}
