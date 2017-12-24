import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class DataService {

  private data: Task[] = [];

  addTask(task): void {
    this.data.push(task);
    console.log(this.data);
  }

  getTasks(): Task[] {
    return this.data;
  }

  constructor() { }

}
