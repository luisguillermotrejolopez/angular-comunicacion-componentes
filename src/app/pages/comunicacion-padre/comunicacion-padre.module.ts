import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunicacionPadreRoutingModule } from './comunicacion-padre-routing.module';
import { PadreComponent } from './padre/padre.component';

import { ComunicacionHijoModule } from '../../components/comunicacion-hijo/comunicacion-hijo.module';
import { ProyectadoComponent } from './proyectado/proyectado.component';
import { PadreReduxComponent } from './padre-redux/padre-redux.component';

@NgModule({
  declarations: [PadreComponent, ProyectadoComponent, PadreReduxComponent],
  imports: [
    CommonModule,
    ComunicacionPadreRoutingModule,
    ComunicacionHijoModule,
  ],
})
export class ComunicacionPadreModule {}
