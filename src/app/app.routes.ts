import { Routes } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [
    {path: 'taskList', title: 'Lista de Tarefas', component:TasklistComponent},
    {path: 'taskDetails',title: 'Detalhes da Tarefa', component:TaskDetailsComponent},
    {path: '',redirectTo: 'taskList', pathMatch: 'full'}
    ];

