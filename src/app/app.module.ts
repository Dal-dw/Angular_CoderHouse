import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { ListaAlumnosComponent } from '../app/components/listaAlumnos/listaAlumnos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHelperComponent } from './components/error-helper/error-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    ListaAlumnosComponent,
    LoginComponent,
    RegisterComponent,
    ErrorHelperComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
})
export class AppModule {}
