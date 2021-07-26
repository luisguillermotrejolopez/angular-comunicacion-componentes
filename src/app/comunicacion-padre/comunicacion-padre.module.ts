import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { ComunicacionPadreRoutingModule } from './comunicacion-padre-routing.module';
import { PadreComponent } from './padre/padre.component';

import { ComunicacionHijoModule } from '../comunicacion-hijo/comunicacion-hijo.module';

@NgModule({
  declarations: [PadreComponent],
  imports: [
    //CommonModule,
    ComunicacionPadreRoutingModule,
    ComunicacionHijoModule,
  ],
})
export class ComunicacionPadreModule {}
