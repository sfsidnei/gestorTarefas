import { Routes } from '@angular/router';
import { TasklistComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [
    {path: 'taskList', title: 'Lista de Tarefas', component:TasklistComponent},
    {path: 'taskDetails/:id',title: 'Detalhes da Tarefa', component:TaskDetailsComponent},
    {path: '',redirectTo: 'taskList', pathMatch: 'full'}
    ];

