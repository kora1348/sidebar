import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    // Ajoutez vos fournisseurs ici
  ],
  exports: [
    AppRoutingModule,
  ],
})
export class CoreModule {
  constructor() {}
}
