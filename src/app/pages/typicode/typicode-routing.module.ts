import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GitHubUsersComponent } from './git-hub-users/git-hub-users.component';

import { CanActivateGuard } from '../../shared/guards/can-activate.guard';
import { UsersResolversGuard } from 'src/app/shared/guards/users-resolvers.guard';

const routes: Routes = [
  {
    path: 'typecodeuser',
    canActivateChild: [CanActivateGuard],
    children: [
      {
        path: '',
        component: UserComponent,
        resolve: { users: UsersResolversGuard }
      },
      {
        path: 'formulario',
        component: FormularioComponent,
      },
      {
        path: 'usuarios-github',
        component: GitHubUsersComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypicodeRoutingModule {}
