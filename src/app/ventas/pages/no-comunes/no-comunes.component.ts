import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Alejandro';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Carlos', 'Alejandro', 'Damian'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos a un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarPersona() {
    if (this.genero == 'femenino') {
      this.nombre = 'Alejandro';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Natalia';
      this.genero = 'femenino';
    }
  }

  atenderCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Jose',
    edad: 35,
    direccion: 'Ottawa, Canada',
  };

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async Pipe

  miObservable = interval(5000);
  valorPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( 'Tenemos data de promesa');
      }, 3500)
  });
}
