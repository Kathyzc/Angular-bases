import { Injectable } from "@angular/core";
import { Pelicula } from '../interfaces/barbie.interface';


@Injectable ()

export class BarbieService{
    private _peliculas:Pelicula[]=[
        {nombre:"La princesa de la isla", descripcion:"Barbie: La princesa de la isla de animales"},
        {nombre:"Moda mágica en París", descripcion:"Barbie y la moda mágica en París"},
        {nombre:"Una aventura espacial", descripcion:"Barbie astronauta en el espacio"}
        ];
 
     get peliculas(): Pelicula[] {
      return [...this._peliculas];
     }
        constructor(){
        console.log('Servicio inicializado');
    }
     agregarPelicula(nueva:Pelicula){
        this._peliculas.push(nueva)
     }
     borrarPelicula(antigua:Pelicula){
        this._peliculas.forEach(pelicula => {
            if(pelicula.nombre== antigua.nombre){
              var indice = this.peliculas.indexOf(pelicula);
              this._peliculas.splice(indice, 1);
              console.log("Borrada!");
              antigua={nombre:'',descripcion:''}
            }
       })
     }
}
   