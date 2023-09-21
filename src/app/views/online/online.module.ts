import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineComponent } from './online.component';
import { OnlineRoutingModule } from './online-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OnlineComponent
  ],
  imports: [
    CommonModule,
    OnlineRoutingModule,
    FormsModule,
  ]
})
export class OnlineModule { }
