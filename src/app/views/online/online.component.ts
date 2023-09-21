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

}
