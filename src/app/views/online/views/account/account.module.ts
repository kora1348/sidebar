import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    AccountRoutingModule,
    CommonModule,
    HomeModule,
  ]
})
export class AccountModule { }
