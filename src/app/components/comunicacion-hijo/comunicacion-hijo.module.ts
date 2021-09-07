import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComunicacionHijoRoutingModule } from './comunicacion-hijo-routing.module';
import { HijoComponent } from './hijo/hijo.component';
import { HijoReduxComponent } from './hijo-redux/hijo-redux.component';
import { NietoReduxComponent } from './nieto-redux/nieto-redux.component';

@NgModule({
  declarations: [HijoComponent, HijoReduxComponent, NietoReduxComponent],
  exports: [HijoComponent, HijoReduxComponent],
  imports: [CommonModule, ComunicacionHijoRoutingModule, FormsModule],
})
export class ComunicacionHijoModule {}
