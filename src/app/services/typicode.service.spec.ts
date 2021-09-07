import { inject, TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TypicodeService } from './typicode.service';
import { UserGithub } from '../models/user-github';

describe('TypicodeService', () => {
  let injector: TestBed;//Podemos usar el inject()
  let httpMock: HttpTestingController;//Para simular peticiones HTTP

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    //Tener acceso a las variables limpias antes de cada it, es decir, antes de cada caso de prueba
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    //Verificar que no hayan solicitudes pendientes
    httpMock.verify();
  });

  it('El servicio typicode debe ser creado', () => {
    const service: TypicodeService = TestBed.inject(TypicodeService);
    expect(service).toBeTruthy();
  });

  it('Probando api rest de usuarios de GitHub', () => {
    //Instanciar el servicio
    const service: TypicodeService = TestBed.inject(TypicodeService);

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

    //Nos suscribimos al metodo getAll()
    service.getUsersGitHub().subscribe((users) => {
      expect(users[0].login).toBeDefined();
    });

    //Se valida la url del API
    const req = httpMock.expectOne('https://api.github.com/users');
    expect(req.request.method).toBe('GET'); //Validamos que sea un metodo GET
    req.flush(mockUser); //Proporciona valores ficticios como respuesta de la petición
  });
});
