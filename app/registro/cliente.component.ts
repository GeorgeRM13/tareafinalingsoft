import { Component } from '@angular/core';
import { Registro } from './Registro.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './cliente.html',
  styleUrls: ['./cliente.component.css']
})
export class clienteComponent {
  title = 'proyecto';

  constructor(private conexion: HttpClient){

  }

  insert(registro: Registro){
    this.conexion.post('https://sistema-6b2b5-default-rtdb.firebaseio.com/Registro.json',
     registro).subscribe(
      (datos) => {
        console.log(datos);
      }

     );
     console.log(registro);
}


}