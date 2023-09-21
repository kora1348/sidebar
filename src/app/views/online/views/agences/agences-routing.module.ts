import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortefeuillesComponent } from './portefeuilles/portefeuilles.component';



const AGENCES_ROUTES: Routes = [
    
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'portefeuilles',
  },

  {
    path: 'portefeuilles',
    component: PortefeuillesComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(AGENCES_ROUTES)],
  exports: [RouterModule],
})
export class AgencesRoutingModule {}