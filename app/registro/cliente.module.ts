import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {clienteComponent} from './cliente.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    clienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [clienteComponent]
})
export class clienteModule { }