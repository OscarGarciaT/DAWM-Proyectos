import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { PrincipalComponent } from './principal/principal.component';
import { JuegoComponent } from './juego/juego.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "juego", component: JuegoComponent },
  { path: "favoritos", component: FavoritosComponent },
  { path: "**", redirectTo: "splash" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
