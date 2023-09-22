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
    // Initialize the 'nav' property with data from the 'onlineService'
    this.nav = this.onlineService.IMenuItem;
  }

  toggleSubMenu(index: number) {
    // Toggle the active state of the clicked item
    this.nav[index].active = !this.nav[index].active;

    // Ensure that all other items are deactivated
    for (let i = 0; i < this.nav.length; i++) {
      if (i !== index) {
        this.nav[i].active = false;
      }
    }
  }
}
