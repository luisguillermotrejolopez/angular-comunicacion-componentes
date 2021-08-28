import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'proyecto-curso';
  public usuarioLogueado: boolean = false;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuarioLogueado = this.authService.isLoggedIn('');
    this.authService.changeLoginStatus$.subscribe((loggedStatus: boolean) => {
      this.usuarioLogueado = loggedStatus;
    });
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
