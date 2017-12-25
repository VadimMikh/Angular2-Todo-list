import {Input, Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-input-list',
  templateUrl: './todo-input-list.component.html',
  styleUrls: ['./todo-input-list.component.css'],
})
export class TodoInputListComponent implements OnInit {

  @Input() tasksList;

  constructor() { }

  @Output() removeItem = new EventEmitter<number>();
  remove(id:number) {
    this.removeItem.emit(id);
  }

  ngOnInit() {
  }

}
