import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DirectivePersonalizadaDirective } from '../directives/directive-personalizada.directive';

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.scss'],
})
export class MostrarDatosComponent implements OnInit {
  public nombre: string = 'firmino';
  public fechaNacimiento: Date = new Date(1989, 10, 26);
  //public saldoCuenta: number = 824635719;
  public saldoCuenta: number = 454757657;

  @ViewChild(DirectivePersonalizadaDirective)
  private directivePersonalizada: ElementRef<DirectivePersonalizadaDirective>;

  constructor() {}

  ngOnInit(): void {
    console.log(
      'Componente MostrarDatos - Ejecutando ngOnInit: ' +
        this.directivePersonalizada
    );
  }

  ngAfterViewInit() {
    console.log(
      'Componente MostrarDatos - Ejecutando ngAfterViewInit: ' +
        this.directivePersonalizada
    );
    /*console.log(
      'Componente MostrarDatos - Ejecutando ngAfterContentInit: ' +
        this.contentsHijoComponente
    );*/
  }

  ngAfterViewChecked() {
    console.log(
      'Componente MostrarDatos - Ejecutando ngAfterViewChecked: ' +
        this.directivePersonalizada
    );
    /*console.log(
      'Componente MostrarDatos - Ejecutando ngAfterContentChecked: ' +
        this.contentsHijoComponente
    );*/
  }
}
