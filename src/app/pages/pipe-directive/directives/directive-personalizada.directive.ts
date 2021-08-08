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
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    let prueba = this.elementRef.nativeElement;
    //console.log(prueba);
  }

  @HostListener('error')
  cargarImagenPorDefecto() {
    const element = this.elementRef.nativeElement;
    console.log('Ha habido un error : ' + this.elementRef.nativeElement);
    element.src = `https://www.cuestalibros.com/content/images/thumbs/default-image_550.png`;
  }
}
