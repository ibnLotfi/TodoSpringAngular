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
import { Todo } from '../../models/todo';
import { TodoCreateDto } from '../../models/todoCreateDto';

@Component({
  selector: 'app-edit-todo',
  imports: [FormsModule,MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule,ReactiveFormsModule],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(private todoService: TodoService,
     private dialogRef: MatDialogRef<EditTodoComponent>,
     @Inject(MAT_DIALOG_DATA) public data: {id: number, content: string, title: string}) {
  }
  ngOnInit(): void {
    this.form.controls['content'].setValue(this.data.content);
    this.form.controls['title'].setValue(this.data.title);
  }

  onSubmit(){
    let todoToUpdate: TodoCreateDto =  {
        "content": this.form.controls['content'].value,
        "lastEditDate": new Date(),
        "title": this.form.controls['title'].value,
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
