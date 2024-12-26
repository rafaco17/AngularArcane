import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-social-network-item',
  imports: [],
  templateUrl: './social-network-item.component.html',
  styleUrl: './social-network-item.component.css'
})
export class SocialNetworkItemComponent implements AfterViewInit{
  @Input() href: string = ''
  @Input() alt: string = ''
  @Input() svgElement: string = ''
  @Input() id: string = ''

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const svgContainer  =  this.elementRef.nativeElement.querySelector(`#${this.id}`)
    if (svgContainer) {
      this.renderer.setProperty(svgContainer,'innerHTML',this.svgElement)
    } else {
      console.log(`Container with id ${this.id} not found`)
    }
  }
}
