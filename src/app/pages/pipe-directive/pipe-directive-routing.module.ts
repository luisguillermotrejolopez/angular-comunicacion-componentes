import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarDatosComponent } from './mostrar-datos/mostrar-datos.component';

const routes: Routes = [
  {
    path: 'mostrar-datos',
    component: MostrarDatosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipeDirectiveRoutingModule {}
