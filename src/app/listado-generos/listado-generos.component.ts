import { Component, OnInit } from '@angular/core';
import { Genero } from '../models/genero.interface';
import { GeneroService } from '../services/genero-service.service';

@Component({
  selector: 'app-listado-generos',
  templateUrl: './listado-generos.component.html',
  styleUrls: ['./listado-generos.component.css']
})
export class ListadoGenerosComponent implements OnInit {

  titulo:string='Administración de Películas'

  generos:Genero[]=[];

  constructor(private servicio:GeneroService) { }

  ngOnInit(): void {

    this.generos=this.servicio.ListadoGeneros();
  }

}
