import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { acumuladorReducer } from './shared/redux/reducers/acumulador.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComunicacionPadreModule } from './pages/comunicacion-padre/comunicacion-padre.module';
import { TypicodeModule } from './pages/typicode/typicode.module';
import { PipeDirectiveModule } from './pages/pipe-directive/pipe-directive.module';
import { TypicodeInterceptor } from './services/typicode.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComunicacionPadreModule,
    TypicodeModule,
    PipeDirectiveModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ acumulador: acumuladorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
  ],
  /*providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TypicodeInterceptor,
      multi: true,
    },
  ],*/
  bootstrap: [AppComponent],
})
export class AppModule {}
