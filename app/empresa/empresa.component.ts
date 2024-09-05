import { Component } from '@angular/core';
import { empresa } from './empresa.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './empresa.html',
  styleUrls: ['./empresa.component.css']
})
export class empresaComponent {
  title = 'proyecto';

  constructor(private conexion: HttpClient){

  }

  insert(empresa: empresa){
    this.conexion.post('https://sistema-6b2b5-default-rtdb.firebaseio.com/Consulta.json',
     empresa).subscribe(
      (datos) => {
        console.log(datos);
      }

     );
     console.log(empresa);
}


}