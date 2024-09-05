import { Component } from '@angular/core';
import { pedido } from './pedido.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './pedido.html',
  styleUrls: ['./pedido.component.css']
})
export class pedidoComponent {
  title = 'proyecto';

  constructor(private conexion: HttpClient){

  }

  insert(pedido: pedido){
    this.conexion.post('https://sistema-6b2b5-default-rtdb.firebaseio.com/Cita.json',
     pedido).subscribe(
      (datos) => {
        console.log(datos);
      }

     );
     console.log(pedido);
}


}