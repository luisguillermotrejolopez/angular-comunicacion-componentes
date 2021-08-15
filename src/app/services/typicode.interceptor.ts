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
        Authorization: 'fe2d9bf9-57302120-25d39b29-04785101',
      },
    });

    return next.handle(request);
  }
}
