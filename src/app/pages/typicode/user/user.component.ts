import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TypicodeService } from '../../../services/typicode.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  public users: Array<any> = [];
  private suscription: Subscription = new Subscription();

  constructor(private _typicodeService: TypicodeService) {}

  ngOnInit(): void {
    //this.getUsers();
    this.getUsersSendHeaders();
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  private getUsers(): void {
    this.suscription = this._typicodeService.getUsers().subscribe(
      (response: any) => {
        this.users = response;
      },
      (error) => alert(`Ha sucedido un error: ${error}`)
    );
  }

  private getUsersSendHeaders(): void {
    this.suscription = this._typicodeService.getUsersSendHeaders().subscribe(
      (response: any) => {
        this.users = response;
      },
      (error) => alert(`Ha sucedido un error: ${error}`)
    );
  }
}
