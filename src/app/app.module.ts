import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import  localEs from '@angular/common/locales/es-NI';
import localFr from '@angular/common/locales/fr';
import  { registerLocaleData }  from '@angular/common';
registerLocaleData( localEs);
registerLocaleData( localFr );

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-NI',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
