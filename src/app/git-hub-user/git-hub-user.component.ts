import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-git-hub-user',
  templateUrl: './git-hub-user.component.html',
  styleUrls: ['./git-hub-user.component.scss'],
})
export class GitHubUserComponent implements OnInit {
  //public users: User[] = [];
  public users: Array<User> = [];
  public usersHeaders: Array<any> = [];
  //autorization - para autorización
  //content-type - para definir el tipo del contenido a recibir
  //parametros personalizados

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
    //this.getUsersHeaders();
  }

  private getUsers(): void {
    this._userService.getAll().subscribe((users) => {
      //La petición http no se ejecuta si no hay una suscripción
      //debugger;
      this.users = users;
      console.log(this.users);
    });
  }

  private getUsersHeaders(): void {
    this._userService.getUsersSendHeaders().subscribe((users) => {
      //La petición http no se ejecuta si no hay una suscripción
      //debugger;
      this.users = users;
      //debugger;
      console.log(this.users);
    });
  }
}
