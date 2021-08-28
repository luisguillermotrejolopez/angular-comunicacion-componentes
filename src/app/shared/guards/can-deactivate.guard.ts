import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PuedeDesactivar } from '../interfaces/puede-desactivar';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<PuedeDesactivar> {
  canDeactivate(component: PuedeDesactivar) {
    return component.permitirSalirDeRuta ? component.permitirSalirDeRuta() : true;
  }
  
}
