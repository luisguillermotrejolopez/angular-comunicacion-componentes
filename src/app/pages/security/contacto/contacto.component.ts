import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PuedeDesactivar } from 'src/app/shared/interfaces/puede-desactivar';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit, PuedeDesactivar {

  constructor() { }

  ngOnInit(): void {
  }

  enviado: boolean = false;
  mensaje: string;

  public enviar(): void {
    alert('Mensaje enviado: ' + this.mensaje);
    this.enviado = true;
  }

  permitirSalirDeRuta(): | boolean | Observable<boolean> | Promise<boolean> {
    if(!this.mensaje || this.enviado) {
      return true;
    }

    const confirmacion: boolean = window.confirm('Realmente desea salir y perder la información digitada?');

    return confirmacion;
  }

}
