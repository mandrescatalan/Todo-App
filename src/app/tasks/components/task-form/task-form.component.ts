import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  @Output() taskUpdated = new EventEmitter<void>(); // Evento para notificar cambios

  task: Task = { id: '', title: '', description: '', completed: false };
  isEdit = false;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data !== null) {
      this.isEdit = true;
      this.task = { ...this.data }; 
    }
  }

  ngOnInit(): void {}

  saveTask(): void {
    if (!this.isEdit) {
      this.taskService.getTasks().subscribe(tasks => {
        const maxId = tasks.length;
        this.task.id = (maxId + 1).toString();

        this.taskService.createTask(this.task).subscribe(() => {
          this.dialogRef.close();
        });
      });
    } else {
      this.taskService.updateTask(this.task.id, this.task).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
