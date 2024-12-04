import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { TodoService } from '../../services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoComponent } from '../../dialogs/edit-todo/edit-todo.component';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [MatIcon, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() id!: number;
  @Input() content!: string;
  @Input() lastEditDate!: Date;
  @Input() title!: string;
  @Input() priority!: string;
  @Output("refreshTodos") refreshTodos: EventEmitter<any> = new EventEmitter();
  readonly dialog = inject(MatDialog);

  constructor(private todoService: TodoService) {
  }

  showTodo() {
  }

  deleteTodo(id: number) {
    if (confirm("Are you sure you want to delete this todo ?")) {
      this.todoService.deleteTodo(id).subscribe({
        next: data => {
          this.refreshTodos.emit();
        },
        error: data => { console.error(data) }
      });
    }
  }

  editTodo() {
    let dialogRef = this.dialog.open(EditTodoComponent,
      {
        height: '50%',
        width: '45%',
        data: { "id":this.id, "content": this.content, "title": this.title, "priority": this.priority },
      }, 
    );
    dialogRef.afterClosed().subscribe({
      next: () => this.refreshTodos.emit()
    });
  }


}
