import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/redux/reducers/app.reducers';

@Component({
  selector: 'app-padre-redux',
  templateUrl: './padre-redux.component.html',
  styleUrls: ['./padre-redux.component.scss']
})
export class PadreReduxComponent implements OnInit {
  public progreso1: number = 25;
  public progreso2: number = 75;
  public acumulador: number;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this.initializeReduxObservable();
  }

  private initializeReduxObservable(): void {
    this._store.select('acumulador').subscribe(acumulador => this.acumulador = acumulador);
  }

  get getProgreso1(): string {
    return `${this.progreso1}%`;
  }

  get getProgreso2(): string {
    return `${this.progreso2}%`;
  }

}
