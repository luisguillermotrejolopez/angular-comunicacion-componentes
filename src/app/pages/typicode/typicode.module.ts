import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TypicodeRoutingModule } from './typicode-routing.module';
import { UserComponent } from './user/user.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GitHubUsersComponent } from './git-hub-users/git-hub-users.component';

@NgModule({
  declarations: [UserComponent, FormularioComponent, GitHubUsersComponent],
  imports: [CommonModule, HttpClientModule, TypicodeRoutingModule, ReactiveFormsModule],
})
export class TypicodeModule {}
