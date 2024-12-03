import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { TodoService } from '../../services/todo.service';
import { TodoCreateDto } from '../../models/todoCreateDto';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-create-new-todo',
  imports: [FormsModule,MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule,ReactiveFormsModule],
  templateUrl: './create-new-todo.component.html',
  styleUrl: './create-new-todo.component.css'
})
export class CreateNewTodoComponent {

  constructor(private todoService: TodoService, private dialogRef: MatDialogRef<CreateNewTodoComponent>) {
  }

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });

  onSubmit(){
    let todoToCreate: TodoCreateDto = {
      content: this.form.value.content,
      lastEditDate: new Date,
      title: this.form.value.title
    };


    this.todoService.save(todoToCreate).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

}
