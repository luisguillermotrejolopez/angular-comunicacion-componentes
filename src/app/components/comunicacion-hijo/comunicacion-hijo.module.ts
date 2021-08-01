import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComunicacionHijoRoutingModule } from './comunicacion-hijo-routing.module';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  declarations: [HijoComponent],
  exports: [HijoComponent],
  imports: [CommonModule, ComunicacionHijoRoutingModule, FormsModule],
})
export class ComunicacionHijoModule {}
