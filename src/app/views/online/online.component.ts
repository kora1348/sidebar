import { Component, OnInit } from '@angular/core';
import { IMenuItem } from './types/navigation';
import { OnlineService } from './online.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
  nav: IMenuItem[] = [];

  constructor(private onlineService: OnlineService) { }

  ngOnInit() {
    this.nav = this.onlineService.IMenuItem;
  }

  toggleSubMenu(index: number) {
    // Basculez l'état actif de l'élément cliqué
    this.nav[index].active = !this.nav[index].active;

    // Assurez-vous que tous les autres éléments sont désactivés
    for (let i = 0; i < this.nav.length; i++) {
      if (i !== index) {
        this.nav[i].active = false;
      }
    }
  }
}
