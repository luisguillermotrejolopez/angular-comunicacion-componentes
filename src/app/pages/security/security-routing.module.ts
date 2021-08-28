import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CanDeactivateGuard } from '../../shared/guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    canDeactivate: [CanDeactivateGuard]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
