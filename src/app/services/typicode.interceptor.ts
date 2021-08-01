import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TypicodeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('PROBANDO EJECUCIÓN DE INTERCEPTOR');

    request = request.clone({
      setHeaders: {
        SeguridadToken: 'Aquí va el token dinámico',
        SeguridadCustom1: 'Aquí va mi valor 1',
        SeguridadCustom2: 'Aquí va mi valor 2',
      },
    });

    return next.handle(request);
  }
}
