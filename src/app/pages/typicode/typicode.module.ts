import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TypicodeRoutingModule } from './typicode-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, HttpClientModule, TypicodeRoutingModule],
})
export class TypicodeModule {}
