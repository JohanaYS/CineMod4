import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { GeneroComponent } from './genero/genero.component';
import { ListadoGenerosComponent } from './listado-generos/listado-generos.component';

const routes: Routes = [

  {path: '', component:ListadoGenerosComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'genero/:id', component:GeneroComponent},
  {path:'genero',component:GeneroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
