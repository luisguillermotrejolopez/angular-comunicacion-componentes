import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss'],
})
export class PadreComponent implements OnInit, OnChanges, DoCheck {
  public progreso1: number = 25;
  public progreso2: number = 75;

  constructor() {}

  ngOnChanges(simpleChange: SimpleChanges) {
    //console.log('Componente Padre - Ejecutando ngOnChanges');
    console.log(simpleChange);
  }

  ngOnInit(): void {
    //console.log('Componente Padre - Ejecutando ngOnInit');
    /*setInterval(() => {
      console.log('Imprimiendo valores para probar DoCheck');
    }, 3000);*/
  }

  ngDoCheck() {
    //console.log('Componente Padre - Ejecutando ngDoCheck');
  }

  get getProgreso1(): string {
    return `${this.progreso1}%`;
  }

  get getProgreso2(): string {
    return `${this.progreso2}%`;
  }

  public setValues(): void {
    /*this.progreso1 = 10;
    this.progreso2 = 60;*/
  }
}
