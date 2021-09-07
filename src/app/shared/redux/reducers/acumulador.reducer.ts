import { createReducer, on } from '@ngrx/store';
import { sumar, restar } from '../actions/acumulador.actions'

export const intialState = 50;

const _acumuladorReducer = createReducer(intialState,
    on( sumar, state => state + 1),
    on( restar, state => decrecer(state))
);


function decrecer(state: number): number {
    let resultado: number = state - 1;
    return resultado;
}

export function acumuladorReducer(state, action) {
    return _acumuladorReducer(state, action);
}
