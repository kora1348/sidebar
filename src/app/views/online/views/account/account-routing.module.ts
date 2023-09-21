import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const ACCOUNT_ROUTES: Routes = [
    
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: 'home',
    component: HomeComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(ACCOUNT_ROUTES)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}