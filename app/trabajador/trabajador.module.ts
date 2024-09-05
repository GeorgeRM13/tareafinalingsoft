import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { trabajadorComponent } from './trabajador.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    trabajadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [trabajadorComponent]
})
export class trabajadorModule { }