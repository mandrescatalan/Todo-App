import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from './tasks/components/task-form/task-form.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'todo-app';
  filter: string = ''; // Valor inicial del filtro

  constructor(private dialog: MatDialog) {}

  applyFilter(): void {
    console.log('Filtro aplicado:', this.filter);
  }

  openTaskFormDialog(): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '400px',
      data:  null, // Pasar la tarea si existe, o null para crear una nueva
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }
}
