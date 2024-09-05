import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { pedidoComponent } from './pedido.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    pedidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [pedidoComponent]
})
export class pedidoModule { }