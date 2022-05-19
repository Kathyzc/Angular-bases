import { Component, Input, OnInit } from '@angular/core';
import { BarbieService } from '../services/barbie.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
 // @Input()peliculas:Pelicula[]=[];
 
 get peliculas(){
   return this.BarbieService.peliculas;
 }
 constructor (private BarbieService:BarbieService){}
}

