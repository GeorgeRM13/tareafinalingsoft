import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {empresaComponent} from './empresa.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    empresaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [empresaComponent]
})
export class clienteModule { }