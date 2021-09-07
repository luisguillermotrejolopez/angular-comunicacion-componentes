import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TypicodeRoutingModule } from '../typicode-routing.module';
import { UserComponent } from '../user/user.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { GitHubUsersComponent } from '../git-hub-users/git-hub-users.component';

import { TypicodeService } from 'src/app/services/typicode.service';
import { UserGithub } from '../../../models/user-github';

fdescribe('GitHubUsersComponent', () => {
  let component: GitHubUsersComponent;
  let fixture: ComponentFixture<GitHubUsersComponent>;
  let typicodeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //declarations: [ GitHubUsersComponent ]
      declarations: [UserComponent, FormularioComponent, GitHubUsersComponent],
      imports: [CommonModule, HttpClientModule, TypicodeRoutingModule, ReactiveFormsModule]
    })
    .compileComponents();
    typicodeService = TestBed.inject(TypicodeService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El valor de saludo debe ser Hola clase', () => {
    const valor = component.saludo;
    expect(valor).toEqual('Hola clase');
  });

  it('El valor "Escalab" debe estar en el saludo', () => {
    const valor = component.saludoPersonalizado;
    expect(valor).toContain('Escalab');
  });

  it('Debe retornar TRUE', () => {
    const respuesta = component.validarPar(44);
    expect(respuesta).toBeTruthy();
  });

  it('Debe retornar FALSE', () => {
    const respuesta = component.validarPar(45);
    expect(respuesta).toBeFalse();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe llamar a UserService y el metodo getAll() para obtener los usuarios', () => {
    //Mock = Objeto simulado de nuestra respuesta
    let mockUser: UserGithub[] = [
      {
        login: 'mojombo',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mojombo',
        html_url: 'https://github.com/mojombo',
        followers_url: 'https://api.github.com/users/mojombo/followers',
        following_url:
          'https://api.github.com/users/mojombo/following{/other_user}',
        gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
        organizations_url: 'https://api.github.com/users/mojombo/orgs',
        repos_url: 'https://api.github.com/users/mojombo/repos',
        events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/mojombo/received_events',
        type: 'User',
        site_admin: false,
      },
      {
        login: 'defunkt',
        id: 2,
        node_id: 'MDQ6VXNlcjI=',
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/defunkt',
        html_url: 'https://github.com/defunkt',
        followers_url: 'https://api.github.com/users/defunkt/followers',
        following_url:
          'https://api.github.com/users/defunkt/following{/other_user}',
        gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
        organizations_url: 'https://api.github.com/users/defunkt/orgs',
        repos_url: 'https://api.github.com/users/defunkt/repos',
        events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/defunkt/received_events',
        type: 'User',
        site_admin: true,
      },
    ];

    //Permite espiar las llamadas a funciones de la aplicación
    const users = spyOn(typicodeService, 'getUsersGitHub').and.callFake((usersData) => {
      //of crea una secuencia observable a partir de los valores que se le pasen como argumentos
      return of(mockUser);
    });

    component.ngOnInit();

    expect(users).toHaveBeenCalled();//Comprobamos que el espía sea llamado
  });
});
