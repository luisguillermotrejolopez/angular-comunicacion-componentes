import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComunicacionPadreRoutingModule } from './pages/comunicacion-padre/comunicacion-padre-routing.module'; //
import { TypicodeRoutingModule } from './pages/typicode/typicode-routing.module';
import { PipeDirectiveRoutingModule } from './pages/pipe-directive/pipe-directive-routing.module';
import { ReqresRoutingModule } from './pages/reqres/reqres-routing.module';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  { path: '', redirectTo: '/comunicacion-padre', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ComunicacionPadreRoutingModule,
    TypicodeRoutingModule,
    PipeDirectiveRoutingModule,
    ReqresRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
