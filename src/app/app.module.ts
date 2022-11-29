import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { ListaAlumnosComponent } from '../app/components/listaAlumnos/listaAlumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    ListaAlumnosComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
})
export class AppModule {}
