import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComunicacionPadreRoutingModule } from './comunicacion-padre/comunicacion-padre-routing.module'; //
import { GitHubUserRoutingModule } from './git-hub-user/git-hub-user-routing.module'; //
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';

//const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: '/comunicacion-padre', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ComunicacionPadreRoutingModule,
    GitHubUserRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
