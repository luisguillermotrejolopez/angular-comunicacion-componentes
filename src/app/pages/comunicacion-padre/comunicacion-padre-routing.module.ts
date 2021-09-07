import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { PadreReduxComponent } from './padre-redux/padre-redux.component';

const routes: Routes = [
  {
    path: 'comunicacion-padre',
    component: PadreComponent,
  },
  {
    path: 'comunicacion-padre-redux',
    component: PadreReduxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicacionPadreRoutingModule {}
