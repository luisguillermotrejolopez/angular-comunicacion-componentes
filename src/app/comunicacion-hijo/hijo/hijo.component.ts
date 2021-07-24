//import { Component, OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valorDesdePadre') public progreso: number = 40;
  @Input() public btnClass: string = 'btn-primary';

  @Output('valorDesdeHijo') valorSalida: EventEmitter<number> =
    new EventEmitter();

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
