import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoGenerosComponent } from './listado-generos/listado-generos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { GeneroModule } from './genero/genero.module';


@NgModule({
  declarations: [
    AppComponent,
    ListadoGenerosComponent,
    NavBarComponent,
    FormularioComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GeneroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
