import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortefeuillesComponent } from './portefeuilles.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PortefeuillesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class PortefeuillesModule { }


