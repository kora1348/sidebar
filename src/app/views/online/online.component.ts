import { Component, OnInit } from '@angular/core';
import { IChildItem, IMenuItem } from './types/navigation';
import { OnlineService } from './online.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
  showElement: boolean = true;
  showMenu: boolean = false;
  showSideBar: boolean = false;

  selectedItem!: IMenuItem;
  nav: IMenuItem[] = [];
  subMenu: IChildItem[] = [];

  constructor(private onlineService: OnlineService) { }

  ngOnInit() {
    // Initialize the 'nav' property with data from the 'onlineService'
    this.nav = this.onlineService.IMenuItem;

    this.showElement = false;
    this.showMenu = true;
    this.showSideBar = true;

    if (localStorage.getItem('submenu')) {
      const item: string = localStorage.getItem('submenu') || "";
      this.setActiveMainItem(JSON.parse(item))
    }
  }

  selectItem(item: IMenuItem) {
    if (this.selectedItem === item) {
        this.showElement = true;
    } else {
        this.nav.forEach(i => {
            i.active = i === item; // Définir l'état actif de chaque élément principal de menu
        });
        this.selectedItem = item;
        this.setActiveMainItem(item);

        // Ajoutez cette ligne pour afficher l'état de la sous-rubrique en console log
        console.log('Sous-rubrique sélectionnée :', item);
    }
  }

  closeChildNav() {
    // this.navService.sidebarState.childnavOpen = false;
    this.showElement = false;
    this.showMenu = true;
    localStorage.setItem('submenu', "");
}

setActiveMainItem(item: IMenuItem) {
  this.nav.forEach(i => {
      i.active = i === item;
  });
  this.showElement = !this.showElement;
  this.showMenu = !this.showMenu;
  
  if (item.sub) {
      this.subMenu = item.sub;
  } else {
      this.subMenu = [];
  }
}

onClickChangeActiveFlag(item: IMenuItem) {
  localStorage.setItem('submenu', JSON.stringify(item));
  this.setActiveMainItem(item);
}

  
}
