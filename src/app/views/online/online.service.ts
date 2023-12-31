import { Injectable } from '@angular/core';
import { IMenuItem } from './types/navigation';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {

  IMenuItem: IMenuItem[] = [
    {
      name: "Accueil",
      type: "valeur_de_type" ,
      sub: [
        {
          name: "Home",
          state: "/account/home",
        }
      ]
    },
    {
      name: "Agences",
      type: "valeur_de_type" ,
      sub: [
        {
          name: "Portefeuilles",
          state: "/agences/portefeuilles",
        }
      ]
    },
  ];
  

  constructor() { }
}
