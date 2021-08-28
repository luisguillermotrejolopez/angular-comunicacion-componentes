import { Observable } from "rxjs";

export interface PuedeDesactivar {
    permitirSalirDeRuta: () => Observable<boolean> | Promise<boolean> | boolean; 
}
