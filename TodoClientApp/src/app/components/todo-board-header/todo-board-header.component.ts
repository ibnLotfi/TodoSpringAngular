import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Priority } from '../../models/todo';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-board-header',
  imports: [CommonModule, MatFormField, MatLabel, MatOption, MatSelect],
  templateUrl: './todo-board-header.component.html',
  styleUrl: './todo-board-header.component.css'
})
export class TodoBoardHeaderComponent {
  today: Date = new Date();
  priorityFilter: string = '';
  public priorities = ['All'].concat(
    Object.values(Priority).filter((value) => typeof value === 'string')
  );
  
  form: FormGroup = new FormGroup({
    priority: new FormControl('')
  });

  @Output() openCreateTodoDialog: EventEmitter<any> = new EventEmitter();
  @Output() refreshTodos: EventEmitter<any> = new EventEmitter();

  callOpenCreateTodoDialog(){
    this.openCreateTodoDialog.emit();
  }

  // callRefreshTodos(event?: MatSelectChange){
  //   // this.priorityFilter = ((this.form.value.priority == null) || (this.form.value.priority == undefined)) ? '' : this.form.value.priority.valueOf();
  //   let priority = '';
  //   if(event && event.value != "ALL"){
  //     //priority = event.value;
  //     priority = this.priorities.filter(v => v.valueOf() == event.value)[0];
  //   }
  //   console.log(priority);
  //   this.refreshTodos.emit(priority);
  // }

  callRefreshTodos(event?: MatSelectChange): void {
    let priority = '';
    if (event) {
      priority = this.priorities.find(v => v.valueOf() === event.value) || '';
    }
    this.refreshTodos.emit(priority);
  }
  

}
