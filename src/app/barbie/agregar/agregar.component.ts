import { Component,EventEmitter, Input, Output } from '@angular/core';


import { Pelicula } from '../interfaces/barbie.interface';
import { BarbieService } from '../services/barbie.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent{
  @Input() peliculas: Pelicula[]=[];
  
  @Input() nueva : Pelicula={
    nombre:  '',
    descripcion: ''
  }
  //@Output() onNuevoPelicula: EventEmitter<Pelicula> = new EventEmitter();
  constructor(private BarbieService:BarbieService){ }
  agregar(){
   this.BarbieService.agregarPelicula(this.nueva);
   this.nueva={nombre:'',descripcion:''}
  }
}
