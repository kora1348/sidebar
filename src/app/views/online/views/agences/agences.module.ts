import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencesComponent } from './agences.component';
import { AgencesRoutingModule } from './agences-routing.module';
import { PortefeuillesModule } from './portefeuilles/portefeuilles.module';




@NgModule({
  declarations: [
    AgencesComponent
  ],
  imports: [
    CommonModule,
    AgencesRoutingModule,
    PortefeuillesModule,
  ]
})
export class AgencesModule { }



