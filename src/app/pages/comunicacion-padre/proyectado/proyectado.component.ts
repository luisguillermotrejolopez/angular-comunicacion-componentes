import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectado',
  templateUrl: './proyectado.component.html',
  styleUrls: ['./proyectado.component.scss'],
})
export class ProyectadoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /*console.log('Componente Proyectado - Ejecutando ngOnInit');
    setInterval(() => {
      console.log(
        'Imprimiendo valores para probar DoCheck - Componente Proyectado'
      );
    }, 3000);*/
  }

  ngDoCheck() {
    //console.log('Componente Proyectado - Ejecutando ngDoCheck');
  }
}
