import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineComponent } from './online.component';



const ONLINE_ROUTES: Routes = [
  {
    path: '',
    component: OnlineComponent,

    children: [
      {
          path: '',
          redirectTo: 'administrations',
          pathMatch: 'full'
      },
      // {
      //   path: 'administrations',
      //   loadChildren: () =>
      //     import('./views/administrations/administrations.module').then(
      //       (m) => m.AdministrationsModule
      //     ),
      // },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ONLINE_ROUTES)],
  exports: [RouterModule],
})
export class OnlineRoutingModule {}