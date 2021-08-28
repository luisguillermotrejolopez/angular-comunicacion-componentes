import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly ISLOGGEDKEY = 'islogged';
  public urlUsuarioIntentaAcceder = '';

  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  constructor() {}

  public login() {
    localStorage.setItem(this.ISLOGGEDKEY, 'true');
    this.changeLoginStatusSubject.next(true);
  }

  public logout() {
    localStorage.removeItem(this.ISLOGGEDKEY);
    this.changeLoginStatusSubject.next(false);
  }

  isLoggedIn(url: string) {
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
    if (!isLogged) {
      this.urlUsuarioIntentaAcceder = url;
      return false;
    }
    return true;
  }
}
