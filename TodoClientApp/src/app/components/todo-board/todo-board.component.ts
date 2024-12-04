import { Component,EventEmitter,OnInit,Output,inject } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
} from '@angular/material/dialog';
import { CreateNewTodoComponent } from '../../dialogs/create-new-todo/create-new-todo.component';
import { TodoService } from '../../services/todo.service';
import { TodoBoardHeaderComponent } from "../todo-board-header/todo-board-header.component";
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo-board',
  standalone: true,
  imports: [CommonModule, TodoBoardHeaderComponent, TodoListComponent],
  templateUrl: './todo-board.component.html',
  styleUrl: './todo-board.component.css'
})
export class TodoBoardComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  today: Date = new Date();
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
      }

  ngOnInit(): void {
    this.today = new Date();
    this.todoService.findAll().subscribe(data => {
      this.todos = data;
    });
  }

  openCreateTodoDialog() {
    let dialogRef = this.dialog.open(CreateNewTodoComponent, {
      height: '50%',
      width: '45%',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refreshTodos();
    });
  }

  refreshTodos(){
    this.todoService.findAll().subscribe(data => {
      this.todos = data;
    });
  }

  deleteTodo(id: number){
    alert("called from child");
  }

}

































  // isMobile = false;
  // isTablet = false;
  // isDesktop = false;

  // constructor(private breakpointObserver: BreakpointObserver, private todoService: TodoService) {
  //   this.breakpointObserver.observe([
  //     Breakpoints.Handset,
  //     Breakpoints.Tablet,
  //     Breakpoints.Web
  //   ]).subscribe(result => {
  //     this.isMobile = result.breakpoints[Breakpoints.Handset];
  //     this.isTablet = result.breakpoints[Breakpoints.Tablet];
  //     this.isDesktop = result.breakpoints[Breakpoints.Web];
  //   });
  // }