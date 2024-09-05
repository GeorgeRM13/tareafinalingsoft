import { Component } from '@angular/core';
import { trabajador } from './trabajador.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './trabajador.html',
  styleUrls: ['./trabajador.component.css']
})
export class trabajadorComponent {
  title = 'proyecto';

  constructor(private conexion: HttpClient){

  }

  insert(trabajador: trabajador){
    this.conexion.post('https://sistema-6b2b5-default-rtdb.firebaseio.com/Cita.json',
     trabajador).subscribe(
      (datos) => {
        console.log(datos);
      }

     );
     console.log(trabajador);
}


}