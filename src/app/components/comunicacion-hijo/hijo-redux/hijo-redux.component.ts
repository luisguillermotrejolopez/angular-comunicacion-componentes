import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../../shared/redux/actions/acumulador.actions';
import { AppState } from '../../../shared/redux/reducers/app.reducers';

@Component({
  selector: 'app-hijo-redux',
  templateUrl: './hijo-redux.component.html',
  styleUrls: ['./hijo-redux.component.scss']
})
export class HijoReduxComponent implements OnInit {
  @Input('valorDesdePadre') public progreso: number = 40;
  @Input() public btnClass: string = 'btn-primary';

  @Output('valorDesdeHijo') public valorSalida: EventEmitter<number> =
    new EventEmitter();

  public acumulador: number;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this.initializeReduxObservable();
    this.btnClass = `btn ${this.btnClass}`;
  }

  private initializeReduxObservable(): void {
    this._store.select('acumulador').subscribe(acumulador => this.acumulador = acumulador);
  }

  public cambiarValor(valor: number): number {
    if(valor < 0) {
      this.decrementar();
    } else {
      this.incrementar();
    }

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

  private incrementar(): void {
    this._store.dispatch(actions.sumar());
  }

  private decrementar(): void {
    this._store.dispatch(actions.restar());
  }

}
