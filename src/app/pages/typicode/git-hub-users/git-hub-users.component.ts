import { Component, OnInit } from '@angular/core';
import { UserGithub } from 'src/app/models/user-github';
import { TypicodeService } from 'src/app/services/typicode.service';

@Component({
  selector: 'app-git-hub-users',
  templateUrl: './git-hub-users.component.html',
  styleUrls: ['./git-hub-users.component.scss']
})
export class GitHubUsersComponent implements OnInit {

  public users: UserGithub[] = [];
  public saludo: string = 'Hola clase';
  public saludoPersonalizado: string = 'Hola clase Escalab';

  constructor(private _typicodeService: TypicodeService) { }

  ngOnInit(): void {
    this.getUsersGitHub();
  }

  public validarPar(numero: number): boolean {
    return numero % 2 === 0 ? true : false;
  }

  private getUsersGitHub(): void {
    this._typicodeService.getUsersGitHub().subscribe((users) => {
      this.users = users;
    });
  }

}
