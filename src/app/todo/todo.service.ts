import { Injectable } from '@angular/core';
import { IMenuItem } from './types/navigation';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  IMenuItem: IMenuItem[] = [
    {
      name: "Accueil",
      type: "valeur_de_type" ,
      sub: [
        {
          name: "Accueil",
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
  
    

   

  constructor() {}
}
