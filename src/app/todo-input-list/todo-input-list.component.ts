import { Input, Component, OnInit } from '@angular/core';
import {TodoInputComponent} from '../todo-input/todo-input.component';

@Component({
  selector: 'app-todo-input-list',
  templateUrl: './todo-input-list.component.html',
  styleUrls: ['./todo-input-list.component.css'],
  providers: [TodoInputComponent]
})
export class TodoInputListComponent implements OnInit {

  @Input() tasksList;

  constructor(private todoInputComponennt: TodoInputComponent) { }

  testList = this.todoInputComponennt.tasks;

  ngOnInit() {
    console.log(this.testList);
  }

}
