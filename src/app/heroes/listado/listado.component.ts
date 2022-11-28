import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {


  heroes: string[] = ['Wakanda','Thor','Gatubella'];
  heroBorrado: string = '';

  borrarHero(){
    //this.heroes.splice(2,1);//el primer item indica los minimos espacios guardados del arreglo(2),y el siguiente item la cantidad de datos por borrar 
    //const heroBorrado = this.heroes.shift();
    this.heroBorrado = this.heroes.shift() || '';
    
  }
  
  // constructor() { // primero se inicia el cosntructor y lueogo en ngoninit
  //   console.log('constructor');
    
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit');

  // }

}
