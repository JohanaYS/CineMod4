import { Pelicula } from "./pelicula.interface";

export interface Genero{
    
      id:number,
      nombre:string,
      pais:string,
      year:number,
      foto:string,
      peliculas:Pelicula[]
}