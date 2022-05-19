import { Component, Input } from '@angular/core';
import { Pelicula } from '../interfaces/barbie.interface';
import { BarbieModule } from '../barbie.module';
import { BarbieService } from '../services/barbie.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html'
})
export class BorrarComponent{
  @Input() peliculas: Pelicula[]=[];
  
  @Input() antigua : Pelicula={
    nombre:  '',
    descripcion: ''
  }
  
  constructor(private BarbieService:BarbieService){}
  borrar(){
   this.BarbieService.borrarPelicula(this.antigua)
  }
}
