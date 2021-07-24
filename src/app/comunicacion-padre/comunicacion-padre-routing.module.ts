import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './padre/padre.component';

//const routes: Routes = [];

const routes: Routes = [
  {
    path: 'comunicacion-padre',
    component: PadreComponent,
    children: [
      { path: '', component: PadreComponent } /*,
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },*/,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicacionPadreRoutingModule {}
