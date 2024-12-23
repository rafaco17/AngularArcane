import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  imports: [],
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.css'
})
export class NotificationCardComponent {
  @Input() title: string = ''
  @Input() description: string = ''
  @Input() imageUrl: string = ''
  @Input() dateNotification: string = ''
}
