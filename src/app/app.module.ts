import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComunicacionPadreModule } from './comunicacion-padre/comunicacion-padre.module'; //

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComunicacionPadreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
