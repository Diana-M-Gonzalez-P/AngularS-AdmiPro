import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const promesa = new Promise( (resolve, reject) => {

    //    if( false ) {
    //      resolve('Hola Mundo')
    //    } else {
    //      reject('Algo salio mal')
    //    }
    // });

    // promesa.then((mensaje) => {
    //   console.log(mensaje)
    // })
    // .catch( error => console.log('Error en mi promesa', error));

    // console.log('Fin')
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);  
    })

  }

  getUsuarios() {
    const promise  = new Promise ( resolve => {

      fetch('https://reqres.in/api/users?page=2')
      .then( resp => resp.json())
      .then( body => resolve(body.data))

    })
    return promise;
  }

}
