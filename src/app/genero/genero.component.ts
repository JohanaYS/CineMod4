import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Genero } from '../models/genero.interface';
import { GeneroService } from '../services/genero-service.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  id= 0;
  genero!: Genero;
  paramsSubscription: Subscription = new Subscription; //hacemos un objeto de tipo subscription, para leer los parametros que le pasemos a la peticion
  
  constructor(private route: ActivatedRoute, private servicio:GeneroService) { } //1.captura todo lo que le pasamos  2.El servicio, usado para hacerle la consulta del id
  

  ngOnInit(): void { //se captura el parámetro

    this.paramsSubscription = this.route.params.subscribe(params =>{
      this.id = +params['id']; //(+) converts string 'id' to a number
    });
    this.genero=this.servicio.ObtenerUno(this.id); //se hace la consulta y pasa el id
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }


}
