import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { PrincipalComponent } from './principal/principal.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { JugadorComponent } from './jugador/jugador.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JuegoComponent } from './juego/juego.component';

// Material 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    PrincipalComponent,
    FavoritosComponent,
    JugadorComponent,
    EquipoComponent,
    JuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
