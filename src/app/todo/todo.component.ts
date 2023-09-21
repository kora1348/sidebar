import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { IMenuItem } from './types/navigation';




@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  nav: IMenuItem[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
   this.nav = this.todoService.IMenuItem;
  }

}
