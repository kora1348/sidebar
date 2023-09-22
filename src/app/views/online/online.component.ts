import { Component, OnInit } from "@angular/core";
import { IChildItem, IMenuItem } from "./types/navigation";
import { OnlineService } from "./online.service";

@Component({
  selector: "app-online",
  templateUrl: "./online.component.html",
  styleUrls: ["./online.component.css"],
})
export class OnlineComponent implements OnInit {
  selectedItem: IMenuItem | undefined;
  nav: IMenuItem[] = [];
  subMenu: IChildItem[] = [];

  showElement: boolean = true;
  showMenu: boolean = false;
  showSideBar: boolean = false;

  constructor(private onlineService: OnlineService) {}

  ngOnInit() {
    // Initialize the 'nav' property with data from the 'onlineService'
    this.nav = this.onlineService.IMenuItem;

    this.showElement = false;
    this.showMenu = true;
    this.showSideBar = true;
  }

  selectItem(item: any) {
    if (this.selectedItem === item) {
      this.showElement = true;
    } else {
      this.nav.forEach((i) => {
        i.active = i === item; // Définir l'état actif de chaque élément principal de menu
      });
      this.selectedItem = item;
      this.setActiveMainItem(item);

      // Ajoutez cette ligne pour afficher l'état de la sous-rubrique en console log
      console.log("Sous-rubrique sélectionnée :", item);
    }
  }

  setActiveMainItem(item: any) {
    this.nav.forEach((i) => {
      i.active = i === item;
    });
    this.showElement = !this.showElement;
    this.showMenu = !this.showMenu;
    this.subMenu = item.sub;
  }

  onClickChangeActiveFlag(item: any) {
    this.setActiveMainItem(item);
  }
}
