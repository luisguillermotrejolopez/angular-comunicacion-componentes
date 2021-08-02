import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class TypicodeService {
  private api: string = `${environment.urlApi}users`;

  constructor(private _httpClient: HttpClient) {}

  public getUsers(): Observable<Array<User>> {
    return this._httpClient.get<Array<User>>(this.api);
  }

  public getUsersSendHeaders(): Observable<Array<any>> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization-1', 'Token');
    headers = headers.append('Authorization-2', 'Regla seguridad');

    return this._httpClient.get<Array<any>>(this.api, { headers });
  }
}
