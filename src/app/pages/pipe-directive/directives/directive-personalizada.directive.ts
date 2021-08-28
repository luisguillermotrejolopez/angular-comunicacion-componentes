import { ViewContainerRef } from '@angular/core';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDirectivePersonalizada]',
})
export class DirectivePersonalizadaDirective implements OnInit {
  @Input() urlCustom: string;
  constructor(
    private elementRef: ElementRef,
    public viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    let prueba = this.elementRef.nativeElement;
    //console.log(prueba);
    console.log('Directiva Personalizada - Ejecutando ngOnInit');
    setInterval(() => {
      console.log(
        'Imprimiendo valores para probar DoCheck - Directiva Personalizada'
      );
    }, 3000);
  }

  ngDoCheck() {
    console.log('Directiva Personalizada - Ejecutando ngDoCheck');
  }

  @HostListener('error')
  cargarImagenPorDefecto() {
    const element = this.elementRef.nativeElement;
    console.log('Ha habido un error : ' + this.elementRef.nativeElement);
    element.src = `https://www.cuestalibros.com/content/images/thumbs/default-image_550.png`;
  }
}
