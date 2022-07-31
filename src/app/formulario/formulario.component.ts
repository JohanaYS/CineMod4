import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  titulo:string='Peliculas formulario'

  //Definir objeto Formgroup

  miFormulario!:FormGroup;

  constructor() { 

    this.miFormulario = new FormGroup({
      'nombre':new FormControl('',[Validators.required, Validators.minLength(3)]),
      'email':new FormControl('',[Validators.required, Validators.email])
    })
   }

  ngOnInit(): void {
  }
  enviarDatos(){
    if(!this.miFormulario.valid){
      alert("El formulario tiene errores")
    }
    console.log(this.miFormulario.controls['nombre'].value)    //acceder a los elementos del formulario
    console.log(this.miFormulario.valid)
  }

}
