import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-board-header',
  imports: [CommonModule],
  templateUrl: './todo-board-header.component.html',
  styleUrl: './todo-board-header.component.css'
})
export class TodoBoardHeaderComponent {
  today: Date = new Date();

  @Output() openCreateTodoDialog: EventEmitter<any> = new EventEmitter();

  callOpenCreateTodoDialog(){
    this.openCreateTodoDialog.emit();
  }

}
