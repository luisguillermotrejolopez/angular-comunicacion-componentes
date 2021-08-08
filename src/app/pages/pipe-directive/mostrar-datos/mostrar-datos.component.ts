import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
