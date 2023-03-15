import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
],
  providers: [HttpClientModule],
  bootstrap: [AppComponent], 
  exports: [    
    FormsModule,
    ReactiveFormsModule]
})
export class AppModule { }
