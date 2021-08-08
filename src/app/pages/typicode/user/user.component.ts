import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  from,
  Observable,
  Observer,
  Subject,
  Subscription,
} from 'rxjs';
import { filter, map, toArray, first } from 'rxjs/operators';

import { TypicodeService } from '../../../services/typicode.service';
import { User } from '../../../models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  public users: Array<User> = new Array();
  private suscription: Subscription = new Subscription();

  private suscriptionObservable: Subscription = new Subscription();
  private suscriptionSubject1: Subscription = new Subscription();
  private suscriptionSubject2: Subscription = new Subscription();
  private suscriptionBehaviorSubject1: Subscription = new Subscription();
  private suscriptionBehaviorSubject2: Subscription = new Subscription();

  constructor(private _typicodeService: TypicodeService) {}

  ngOnInit(): void {
    //this.getUsers();
    this.getUsersSendHeaders();
    //this.getUsersOperators();

    this.createPromise();
    this.createObservableUser();
    this.createSubjectUser();
    this.createBehaviorSubjectUser();
  }

  ngOnDestroy(): void {
    this.clearSuscripctions();
  }

  private clearSuscripctions(): void {
    this.suscription.unsubscribe();
    this.suscriptionObservable.unsubscribe();
    this.suscriptionSubject1.unsubscribe();
    this.suscriptionSubject2.unsubscribe();
    this.suscriptionBehaviorSubject1.unsubscribe();
    this.suscriptionBehaviorSubject2.unsubscribe();
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

  private getUsersOperators(): void {
    this.suscription = this._typicodeService
      .getUsersSendHeaders()
      .pipe(
        map((data: any) => data.filter((user) => user.name === 'Ervin Howell'))
      )
      .subscribe(
        (response: any) => {
          this.users = response;
        },
        (error) => alert(`Ha sucedido un error: ${error}`)
      );
  }

  private createPromise(): void {
    let promise: Promise<any> = new Promise((resolve) => {
      resolve('Resolve Promesa 1');
      resolve('Resolve Promesa 2');
      resolve('Resolve Promesa 3');
    });
    promise.then(console.log);
  }

  private createObservableUser(): void {
    let $observableUser: Observable<string> = new Observable<string>((subs) => {
      subs.next('Morgan');
      subs.next('CR7');
      subs.next('Vídal');
      subs.next('Falcao');
      subs.next('Messi');
      //subs.complete();
    });

    //$observableUser.subscribe(console.log);

    /*$observableUser.subscribe(
      (valor) => console.log('Siguiente: ', valor),
      (error) => console.log('Se ha presentado un error: ', error),
      () => console.log('Completado')
    );*/

    let $observerUser: Observer<any> = {
      next: (valor: string) => console.log('Siguiente: ', valor),
      error: (error: Error) =>
        console.log('Se ha presentado un error: ', error),
      complete: () => console.log('Completado'),
    };

    this.suscriptionObservable = $observableUser.subscribe($observerUser);
  }

  private createSubjectUser(): void {
    let subjectUser: Subject<string> = new Subject<string>();

    subjectUser.next('De Bruyne'); //No se emite toma, ya que solo emite los valores luego de la suscripción

    this.suscriptionSubject1 = subjectUser.subscribe((response) =>
      console.log(
        '---Esta es la respuesta del SubjectUser, Suscripción 1: ' + response
      )
    );

    this.suscriptionSubject2 = subjectUser.subscribe((response) =>
      console.log(
        '---Esta es la respuesta del SubjectUser, Suscripción 2: ' + response
      )
    );

    subjectUser.next('Simeone');
    subjectUser.next('Zidane');
  }

  private createBehaviorSubjectUser(): void {
    let behaviorSubjectUser: BehaviorSubject<string> =
      new BehaviorSubject<string>('Benkenbauer');

    behaviorSubjectUser.next('Maradona'); //"Reemplaza" a Benkenbauer, ya que solo emite el último antes de la suscripción

    this.suscriptionBehaviorSubject1 = behaviorSubjectUser.subscribe(
      (response) =>
        console.log(
          '___Esta es la respuesta del BehaviorSubjectUser, Suscripción 1: ' +
            response
        )
    );

    this.suscriptionBehaviorSubject2 = behaviorSubjectUser.subscribe(
      (response) =>
        console.log(
          '___Esta es la respuesta del BehaviorSubjectUser, Suscripción 2: ' +
            response
        )
    );

    behaviorSubjectUser.next('Cruyf');
    behaviorSubjectUser.next('Platini');
  }
}
