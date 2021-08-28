import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TypicodeService } from 'src/app/services/typicode.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolversGuard implements Resolve<any[]> {
  constructor(private _typicodeService: TypicodeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any[]> | Promise<any[]> | any[] {
    return this._typicodeService.getUsers();
  }
  
}
