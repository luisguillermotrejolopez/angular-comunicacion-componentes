import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CanDeactivateGuard } from '../../shared/guards/can-deactivate.guard';

const childRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login', 
        component: LoginComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
        //canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    //CommonModule
    RouterModule.forChild(childRoutes)
  ],
  exports: [RouterModule],
})
export class ChildRoutesModule { }
