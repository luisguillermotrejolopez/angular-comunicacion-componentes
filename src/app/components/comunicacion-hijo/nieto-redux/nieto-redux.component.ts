import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../../shared/redux/actions/acumulador.actions';
import { AppState } from '../../../shared/redux/reducers/app.reducers';

@Component({
  selector: 'app-nieto-redux',
  templateUrl: './nieto-redux.component.html',
  styleUrls: ['./nieto-redux.component.scss']
})
export class NietoReduxComponent implements OnInit {

  public acumulador: number;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this.initializeReduxObservable();
  }

  private initializeReduxObservable(): void {
    this._store.select('acumulador').subscribe(acumulador => this.acumulador = acumulador);
  }

  public incrementar(): void {
    this._store.dispatch(actions.sumar());
  }

  public decrementar(): void {
    this._store.dispatch(actions.restar());
  }

}
