import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/user.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API: string = `${environment.urlApi}/users`;
  private baseURL: string = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.API);
  }

  public getUsersSendHeaders(): Observable<Array<any>> {
    // headers HTTP
    /*let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'bearer token2');
    headers = headers.append('X-Pagination', '3');

    // query strings
    let params = new HttpParams();
    params = params.append('X-Pagination', '4');*/

    return this.http.get<User[]>(this.baseURL /*, { headers, params }*/);
  }
}
