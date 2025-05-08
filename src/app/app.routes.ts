import { Routes } from '@angular/router';
import { TaskListComponent } from './tasks/components/task-list/task-list.component';
import { TaskFormComponent } from './tasks/components/task-form/task-form.component';

export const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/form', component: TaskFormComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' }
];
