import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Pequesaurio','Ironman','Black widow','Mommy','Spiderman'];
  i:number = 0;
  heroeBorrado: string='';

  borrarHeroe(){
    this.heroeBorrado  = this.heroes.shift() || '';
  }

}
