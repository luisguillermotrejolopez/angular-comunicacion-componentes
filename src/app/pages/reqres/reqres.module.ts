import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//import { ErrorTailorModule } from '@ngneat/error-tailor';

import { ReqresRoutingModule } from './reqres-routing.module';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    /*HttpClientModule, */ ReqresRoutingModule,
    ReactiveFormsModule,
    /*ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido',
          minlength: ({ requiredLength, actualLength }) =>
            `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: (error) => `Address isn't valid`,
        },
      },
    }),*/
  ],
})
export class ReqresModule {}
