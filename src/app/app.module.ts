import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './Heroes/heores.module';
import { ContadorModule } from './contador/contador.module';
import { BarbieModule } from './barbie/barbie.module';

@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    BarbieModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
