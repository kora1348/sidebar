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
          redirectTo: 'account',
          pathMatch: 'full'
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./views/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
      {
        path: 'agences',
        loadChildren: () =>
          import('./views/agences/agences.module').then(
            (m) => m.AgencesModule
          ),
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ONLINE_ROUTES)],
  exports: [RouterModule],
})
export class OnlineRoutingModule {}