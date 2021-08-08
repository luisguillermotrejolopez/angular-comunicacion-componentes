import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeDirectiveRoutingModule } from './pipe-directive-routing.module';
import { MostrarDatosComponent } from './mostrar-datos/mostrar-datos.component';
import { PipePersonalizadoPipe } from './pipes/pipe-personalizado.pipe';
import { DirectivePersonalizadaDirective } from './directives/directive-personalizada.directive';

@NgModule({
  declarations: [
    MostrarDatosComponent,
    PipePersonalizadoPipe,
    DirectivePersonalizadaDirective,
  ],
  imports: [CommonModule, PipeDirectiveRoutingModule],
})
export class PipeDirectiveModule {}
