import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/barbie.interface';
import { BarbieService } from '../services/barbie.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
 
  peliculas: Pelicula[]=[];
  nueva:Pelicula={
    nombre:'Las sirenas',
    descripcion:'Barbie y las sirenas'
  }

 constructor(private BarbieService: BarbieService){
}
}

 /* <li>Fairytopia</li>
 <li>Cascanueces</li>
 <li>El lago de los cisnes</li>
 <li>La princesa y la plebeya</li>
 <li>Las 12 princesas</li>*/