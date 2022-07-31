import { Injectable } from '@angular/core';
import { Genero } from '../models/genero.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
//****** */objeto de base de datos, simulacion de base de datos

private generos:Genero[]=[
  { 
    id:1,
    nombre: 'Terror',
    pais:'Francia',
    year:1896,
    foto:'https://i0.wp.com/cuatrobastardos.com/wp-content/uploads/2020/10/235855.jpg?resize=1920%2C1080&ssl=1',
    peliculas:[
      {id:1, nombre:'La mansión del Diablo', director:'Georges Méliès', year:1896},
      {id:2, nombre:'El diablo en el convento', director:'Georges Méliès', year:1899}
    ]
  },{ 
    id:2,
    nombre: 'Romántico',
    pais:'USA',
    year:1896,
    foto:'https://i.blogs.es/d8638d/mejores-peliculas-romanticas-portada/1366_2000.jpeg',
    peliculas:[
      {id:1, nombre:'The Kiss', director:'Willian Heise', year:1896},
      {id:2, nombre:'Lo que el viento se llevo', director:'Vitor Fleming', year:1936}
    ]
  },{ 
    id:3,
    nombre: 'Acción',
    pais:'USA',
    year:1932,
    foto:'https://www.mundopeliculas.tv/wp-content/uploads/2017/10/taranto_83yy.jpg',
    peliculas:[
      {id:1, nombre:'The most dangerous game', director:'Ernest B. Schoedsack', year:1932},
      {id:2, nombre:'Star Wars: Episodio IV- Una nueva esperanza', director:'George Lucas', year:1977}
    ]
  }
];

//****** */
  constructor() { }

  ListadoGeneros():Genero[]{
    return this.generos;
  }
  InsertarGenero(genero:Genero){
    this.generos.push(genero);
  }

  ObtenerUno(id:number):Genero{
    return <Genero> this.generos.find(item=>item.id===id)
  }
}
