import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MatDialog } from '@angular/material/dialog';
import { routes } from '../../../app.routes';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    MatChipsModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit, OnChanges {
  @Input() filter: string = ''; 
  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  constructor(private dialog: MatDialog, private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter']) {
      this.applyFilter();
    }
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    if (this.filter === 'true') {
      this.filteredTasks = this.tasks.filter((task) => task.completed);
    } else if (this.filter === 'false') {
      this.filteredTasks = this.tasks.filter((task) => !task.completed);
    } else {
      this.filteredTasks = this.tasks;
    }
  }

  updateState(taskId: string): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.taskService.updateTask(taskId, task).subscribe(() => {
        this.loadTasks();
      });
    }
  }

  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.loadTasks();
    });
  }

  openTaskFormDialog(task?: Task): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '400px',
      data: task,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadTasks();
    });
  }
}
