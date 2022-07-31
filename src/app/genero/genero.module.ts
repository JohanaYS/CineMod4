import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroComponent } from './genero.component';
import { PeliculaComponent } from '../pelicula/pelicula.component';



@NgModule({
  declarations: [
    GeneroComponent,
    PeliculaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GeneroModule { }
