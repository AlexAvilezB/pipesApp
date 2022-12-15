import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private primeNgConfig: PrimeNGConfig) {
    
  }

  ngOnInit(): void {
    this.primeNgConfig.ripple= true; 
    
  }
  
  nombre: string = 'AlEjANdro AViLez';
  valor: number = 1000;
  obj = {
    nombre: 'Alejandro'
  }

  mostrarNombre() {
    console.log(this.nombre)
    console.log(this.valor)
    console.log(this.obj);
  }
}
