import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  foto='https://img.freepik.com/fotos-premium/rollo-pelicula-cinta-cine-cerca-tablilla-sobre-fondo-blanco-representacion-3d_476612-1775.jpg'; //imagen de pelicula miniatura

  @Input() pelicula!:Pelicula; //recibe los datos de pelicula enviados desde el componente padre

  constructor() { }

  ngOnInit(): void {
  }

}
