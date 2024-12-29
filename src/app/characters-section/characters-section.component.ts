import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-characters-section',
  imports: [],
  templateUrl: './characters-section.component.html',
  styleUrl: './characters-section.component.css'
})
export class CharactersSectionComponent  implements OnInit {
  items = [
    { name : 'JINX' , image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f850f7d107f04ca8be55af03020e5d110edbbb21-1208x1208.png?auto=format&fit=fill&q=80&w=869', description : 'Jinx tenía el alma dividida en dos identidades: la fuerte y poderosa hija que crio el mismísimo Silco, y la temerosa y debilucha hermana pequeña de Vi. Ahora, tras aceptar el monstruo que Vi ha creado, Jinx se ha convertido en un receptáculo vacío, la chica maldita que echa todo a perder.'},
    { name : 'VI' , image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1ba5b2ffe9b169beca98a76cafa94e71622217df-1208x1208.png?auto=format&fit=fill&q=80&w=869', description : 'Tras aceptar que Powder ya no existe, Vi asume lo que debe hacer: encargarse del monstruo que ha creado, es decir, Jinx. A sabiendas de lo peligrosa que puede llegar a ser su hermana, Vi se alía con Caitlyn y accede a portar la insignia de agente.'},
    { name : 'CAITLYN', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ce860f272eaf4736d3f1e6fd26153c6242674a38-1208x1208.png?auto=format&fit=fill&q=80&w=869', description : 'Caitlyn es una agente de Piltover. Otrora, hizo uso de su pericia y dotes detectivescas para exponer la corrupción en Zaun y Piltover, pero, tras el ataque de Jinx al Consejo, ha abandonado toda esperanza de conseguir la paz.'},
    { name : 'EKKO', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7c590180ddee2d1ccb367ed67528e3ac567e66cd-1208x1208.png?auto=format&fit=fill&q=80&w=869', description : 'Ekko da vida a los Firelights, un grupo de zaunitas que han construido un nuevo hogar que juran proteger. Para su sorpresa, ha encontrado un buen amigo en Heimerdinger, y ambos luchan por hacer de Zaun un lugar mejor.'},
    { name : 'HEIMERDINGER', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d09cc62f9b37634f9e4c50febeb4cf8e7542269a-1208x1208.png?auto=format&fit=fill&q=80&w=869', description : 'Heimerdinger ya advirtió al Consejo de Piltover sobre los peligros de usar la magia sin precaución. Tras aprender de sus errores con Jayce, Heimerdinger anima a Ekko a seguir buscando una solución y trabaja con él para solucionar el problema en lugar de limitarse a ofrecerle consejo.'},
    { name : 'AMBESSA', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/12e25599dd4eee88940ee353c7a9ce0370e9746c-1208x1208.png?auto=format&fit=fill&q=80&w=869', description : 'Ambessa, guerrera noxiana y madre de Mel, jura proteger el legado de su familia..., aunque eso signifique ir en contra de los deseos de su hija.'},
    { name : 'JAYCE', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2e56d9300f5544f6d1798015c68b7be7d8caecc9-1200x1200.jpg?auto=format&fit=fill&q=80&w=869', description : 'Tras una serie de acontecimientos, Jayce empieza a cuestionar el uso de la tecnología hextech para mejorar las vidas de los piltovanos. Mientras tanto, descubre con la ayuda de Heimerdinger y Ekko que el empleo de esta tecnología ha emponzoñado la Ciudad Subterránea. Su investigación continúa, hasta que se topan con algo más...'},
    { name : 'MEL', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/5eca2dcc0ea791ed25276885076715b4fcd135ed-1200x1200.jpg?auto=format&fit=fill&q=80&w=869', description : 'La prudente inversión de Mel en la tecnología hextech ha transformado Piltover en uno de los mayores focos comerciales de toda Runaterra, y a ella en una de las personas más influyentes de la ciudad. Tras el ataque de Jinx, Mel planta cara a su madre y al consejero Salo para proteger el sueño de Jayce.'},
    { name : 'SEVIKA', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/23b64ebd74aab374681d29afaf17bf391f920433-1200x1200.jpg?auto=format&fit=fill&q=80&w=869', description : 'Sevika ha vivido a la sombra de Piltover toda su vida. Mientras los barones químicos se declaran la guerra unos a otros para hacerse con el trono de Zaun, que ha quedado vacío tras la muerte de Silco, Sevika no pierde de vista al verdadero enemigo: los de arriba.'},
    { name : 'VIKTOR', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a4de8b6b9d6f2f72f17c8aba231c2b940fd76092-1200x1200.jpg?auto=format&fit=fill&q=80&w=869', description : 'Pese a las advertencias sobre sus peligros, Viktor sobrepasa los límites de la tecnología hextech. Guiado por la culpa, se embarca en una cruzada por cumplir su sueño: poner la tecnología hextech al alcance de todos.'},
    { name : 'WARWICK', image : 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/17a015a3b5be98f3b751049e3dec4033fa542957-1200x1200.jpg?auto=format&fit=fill&q=80&w=869', description : 'Warwick es una bestia creada por Singed cuya furia primitiva se debate con los retazos de humanidad que aún alberga en su interior. ¿Quedará algo de Vander después de tanto sufrimiento?'}
  ]

  private index: number = 0

  getIndex():number {
    return this.index
  }

  setIndex(newIndex : number):void {
    const previousComponent = document.querySelector(`#item_character${this.index}`) as HTMLElement
    const currentComponent  = document.querySelector(`#item_character${newIndex}`) as HTMLElement

    previousComponent.style.filter = 'brightness(50%)' 
    currentComponent.style.filter = 'brightness(100%)'
    this.index = newIndex
  }


  private startX: number = 0
  private currentTranslateX: number = 0
  private lastTranslateX: number = 0
  private isDragging: boolean = false
  private animationFrame: number | null = null
  private itemsContainer: HTMLElement | null = null
  private snapPoints: number[] = [0, -120, -240, -360, -480, -600]

  buttonLeft: boolean = true
  buttonRight: boolean = false

  private buttonLeftContainer: HTMLElement | null = null
  private buttonRightContainer: HTMLElement | null = null
  private line : HTMLElement | null = null

  private disableButtonListener!: () => void
    private resizeListener!: () => void
      
    constructor(private renderer: Renderer2) {}
  
    private setSnapPoints(): void {
      const screenWidth = window.innerWidth;
    
      if (screenWidth >= 1290) {
        this.snapPoints = [0, -120, -240, -360, -480, -600]
      } else if (screenWidth >= 1026) {
        this.snapPoints = [0, -120, -240, -360, -480, -600, -720]
      } else if (screenWidth >= 680) {
        this.snapPoints = [0, -200, -400, -600, -800, -1000, -1200, -1500]
      } else if(screenWidth >= 320){
        this.snapPoints = [0, -140, -280, -420, -600, -740, -980]
      } else {
        this.snapPoints = [0, -140, -280, -420, -600]
      }
  
      // console.log('Carrousel final',this.snapPoints)
    }


  private currenLineTranslate = () => {
    const lengthSnapPoints = this.snapPoints.length
      for (let i = (this.snapPoints.length - 1); i >= 0; i--) {
        if (this.currentTranslateX <= this.snapPoints[i]) {
          if(i === 0) {
            if (this.line) {
              this.line.style.width = '100%'
              // console.log('Calculo: 100%')
              break
            }
          } else if (i === lengthSnapPoints - 1) {
            if (this.line) {
              this.line.style.width = '0%'
              // console.log('Calculo: 0%')
              break
            }
          } else {
            if (this.line) {
              this.line.style.width = `${(100 / (lengthSnapPoints - 1) * (lengthSnapPoints - 1 - i))}%`
              // console.log('Calculo: ',(100 / (lengthSnapPoints - 1) * (lengthSnapPoints - 1 - i)))
              break
            }
          }
        }
      }
  }

  private disableButton = () => {
    if (this.currentTranslateX >= this.snapPoints[0]) {
      this.buttonLeft = false
      if (this.buttonLeftContainer) {
        this.buttonLeftContainer.style.cursor = 'not-allowed'
        this.buttonLeftContainer.style.fill = '#535353'
      }
      // if (this.line) {
      //   this.line.style.width = '100%'
      // }
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
      // if (this.line) {
      //   this.line.style.width = '0%'
      // }
    } else {
      this.buttonRight = true
      if (this.buttonRightContainer) {
        this.buttonRightContainer.style.cursor = 'pointer';
        this.buttonRightContainer.style.fill = '#a7b6e3'
      }
    }
  }

  ngOnInit():void {
    this.itemsContainer = document.querySelector('.carousel_main_container') as HTMLElement
    this.buttonLeftContainer = document.querySelector('#button_leftTest') as HTMLElement
    this.buttonRightContainer = document.querySelector('#button_rightTest') as HTMLElement
    this.line = document.querySelector('#lineTest') as HTMLElement

    this.setSnapPoints()

    this.resizeListener = this.renderer.listen('window','resize', () => {
      this.setSnapPoints()
    })

    this.disableButtonListener = this.renderer.listen('document','mousemove', () => {
      this.currenLineTranslate()
      this.disableButton()
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
      this.currentTranslateX = Math.min(this.lastTranslateX + deltaX * 0.75, 500) 
  
      this.scheduleUpdate()
    }

  @HostListener('document:mouseup')
    onMouseUp(): void {
      if (!this.isDragging) return;
  
      this.isDragging = false
      const closestPoint = this.snapToClosestPoint(this.currentTranslateX)
      this.animateTo(closestPoint)
    }
  
  private snapToClosestPoint(currentX: number): number {
    return this.snapPoints.reduce((prev, curr) =>
      Math.abs(curr - currentX) < Math.abs(prev - currentX) ? curr : prev
    );
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

  private animateTo(target: number): void {
    if (this.itemsContainer) {
      this.itemsContainer.style.transition = 'transform 0.3s ease-out';
      this.itemsContainer.style.transform = `translate3d(${target}px, 0, 0)`;
    }
    this.currentTranslateX = target;
    this.lastTranslateX = target;
    this.currenLineTranslate()
    this.disableButton()
  }

}
