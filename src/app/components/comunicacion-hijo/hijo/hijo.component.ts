import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  ContentChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { ProyectadoComponent } from '../../../pages/comunicacion-padre/proyectado/proyectado.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit, OnChanges {
  @Input('valorDesdePadre') public progreso: number = 40;
  @Input() public btnClass: string = 'btn-primary';

  @Output('valorDesdeHijo') public valorSalida: EventEmitter<number> =
    new EventEmitter();

  @ContentChild(ProyectadoComponent) //ContentChildren
  private contentHijoComponente: ProyectadoComponent;

  @ContentChildren(ProyectadoComponent)
  private contentsHijoComponente: QueryList<ProyectadoComponent>;

  constructor() {}

  ngOnChanges(simpleChange: SimpleChanges) {
    /*console.log('Componente Hijo - Ejecutando ngOnChanges');
    console.log(simpleChange);*/
  }

  ngOnInit(): void {
    //console.log('Componente Hijo - Ejecutando ngOnInit');
    this.btnClass = `btn ${this.btnClass}`;
    console.log(
      'Componente Hijo - Ejecutando ngOnInit: ' + this.contentHijoComponente
    );
  }

  ngDoCheck() {
    //console.log('Componente Hijo - Ejecutando ngDoCheck');
  }

  ngAfterContentInit() {
    /*console.log(
      'Componente Hijo - Ejecutando ngAfterContentInit: ' +
        this.contentHijoComponente
    );*/
    /*console.log(
      'Componente Hijo - Ejecutando ngAfterContentInit: ' +
        this.contentsHijoComponente
    );*/
  }

  ngAfterContentChecked() {
    /*console.log(
      'Componente Hijo - Ejecutando ngAfterContentChecked: ' +
        this.contentHijoComponente
    );*/
    /*console.log(
      'Componente Hijo - Ejecutando ngAfterContentChecked: ' +
        this.contentsHijoComponente
    );*/
  }

  public cambiarValor(valor: number): number {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return (this.progreso = 100);
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return (this.progreso = 0);
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
    return this.progreso; //
  }

  public onChange(nuevoValor: number): void {
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit(this.progreso);
  }
}
