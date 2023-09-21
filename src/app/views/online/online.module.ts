import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineComponent } from './online.component';
import { OnlineRoutingModule } from './online-routing.module';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './views/account/account.component';
import { AgencesComponent } from './views/agences/agences.component';
import { PortefeuillesComponent } from './views/agences/portefeuilles/portefeuilles.component';



@NgModule({
  declarations: [
    OnlineComponent,
  ],
  imports: [
    CommonModule,
    OnlineRoutingModule,
    FormsModule,
  ]
})
export class OnlineModule { }
