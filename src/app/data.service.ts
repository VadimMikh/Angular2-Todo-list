import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class DataService {

  private data: Task[] = [];

  addTask(task): void {
    this.data.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.data));
  }

  getTasks(): Task[] {
    let localTasks = JSON.parse(localStorage.getItem('tasks'));
    if (localTasks !== '') {
      this.data = localTasks;
    }
    return this.data;
  }

  removeTask(id:number): any {
    let cur:number = id;
    let newAr = this.data.filter(function (el) {
      return el.id !== cur;
    });
    this.data = newAr;
    localStorage.setItem('tasks', JSON.stringify(this.data));
    return this.data;
  }

  constructor() { }

}
