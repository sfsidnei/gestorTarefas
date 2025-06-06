import { Component } from '@angular/core';
import { TaskFilterComponent } from "../task-filter/task-filter.component";

@Component({
  selector: 'app-tasklist',
  imports: [TaskFilterComponent],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {

}
