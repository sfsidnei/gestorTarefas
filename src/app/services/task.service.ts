import { Injectable } from '@angular/core';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks: Array<Task> = [];

  getTasks(): Array<Task> {

    this.tasks = this.getFromLocalStorage();

    return this.tasks;
  }

  getById(id: number): Task | undefined {

    const task = this.tasks.find( c => c.id === id);

    return task;
  }

  addTask(task: Task) {

    task.id = this.tasks.length + 1;

    this.tasks.push(task);

    this.saveToLocalStorage();

  }

  updateTasks() {
    this.saveToLocalStorage();

  }

  removeTask(task: Task ) {

    const index = this.tasks.indexOf(task);

    if (index !== -1) {
       //achou
       this.tasks.splice(index, 1);

       this.saveToLocalStorage();
           
    }
    
  }

  private saveToLocalStorage() {

    const tasksJSON = JSON.stringify(this.tasks);

    localStorage.setItem('tasks', tasksJSON);

  }

  private getFromLocalStorage(): Array<Task> {

    const tasksJSON = localStorage.getItem('tasks');

    if (!tasksJSON) {
      //não achou
      return new Array<Task>();
    }
     
    return JSON.parse(tasksJSON);

  }
}
