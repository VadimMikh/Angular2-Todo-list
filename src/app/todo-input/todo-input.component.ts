import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import { Task } from '../task';

@Component({
    selector: 'todo-input',
    templateUrl: './todo-input.component.html',
    styleUrls: ['./todo-input.component.css'],
    providers: [DataService]
})
export class TodoInputComponent implements OnInit {

    tasks: Task[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.tasks = this.dataService.getTasks();
    }

    newtask:string = '';

    addTask(): void {
        let item = {
            name: this.newtask,
            done: false
        };
        if (this.newtask !== '') this.dataService.addTask(item);
        this.newtask = '';

        this.tasks = this.dataService.getTasks();
    }
  
}
