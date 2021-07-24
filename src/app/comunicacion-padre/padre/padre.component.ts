import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss'],
})
export class PadreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public progreso1: number = 25;
  public progreso2: number = 75;

  get getProgreso1(): string {
    return `${this.progreso1}%`;
  }

  get getProgreso2(): string {
    return `${this.progreso2}%`;
  }
}
