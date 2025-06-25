import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  imports: [FormsModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {
// updateTask() {
// throw new Error('Method not implemented.');
// }
// updateTask(): void {
//   this.save(); // redireciona para o método que já funciona
// }

  task?: Task;

  constructor( private router: Router, private route: ActivatedRoute,private taskService: TaskService) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id === null) {
      this.navigateBack();
    }
    else 
  {
    this.task = this.taskService.getById(+id);

    if (this.task === undefined) {
      this.navigateBack();
    }
  }
   
  }

  save() {
    this.taskService.updateTasks();

    this.navigateBack();
  }

  cancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/taskList'], {relativeTo: this.route});
  }

}
