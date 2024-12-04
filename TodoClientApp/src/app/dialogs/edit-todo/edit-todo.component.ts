import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { TodoService } from '../../services/todo.service';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Priority, Todo } from '../../models/todo';
import { TodoCreateDto } from '../../models/todoCreateDto';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit-todo',
  imports: [FormsModule,MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule,ReactiveFormsModule, MatOption, MatSelectModule],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent implements OnInit {

  public priorities = Object.values(Priority).filter(value => typeof value === 'string');
  // private selectedPriority!: Priority;


  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    priority: new FormControl('')
  });

  constructor(private todoService: TodoService,
     private dialogRef: MatDialogRef<EditTodoComponent>,
     @Inject(MAT_DIALOG_DATA) public data: {id: number, content: string, title: string, priority: string}) {
  }
  ngOnInit(): void {
    // this.selectedPriority = this.priorities.find(v => v.valueOf() == this.data.priority)?.valueOf() == null ? Priority.MEDIUM : this.priorities;
    this.form.controls['content'].setValue(this.data.content);
    this.form.controls['title'].setValue(this.data.title);
    this.form.controls['priority'].setValue(this.data.priority);
  }

  onSubmit(){
    let todoToUpdate: TodoCreateDto =  {
        "content": this.form.controls['content'].value,
        "lastEditDate": new Date(),
        "title": this.form.controls['title'].value,
        "priority": this.form.controls['priority'].value
    }
    console.log(todoToUpdate);
    this.todoService.updateTodo(this.data.id,todoToUpdate).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
