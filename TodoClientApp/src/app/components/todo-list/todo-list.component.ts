import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  @Input() todos: Todo[] = [];
  @Output() refreshTodos: EventEmitter<any> = new EventEmitter();

  callRefreshTodos(){
    this.refreshTodos.emit();
  }

}
