import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatOption } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { TodoService } from '../../services/todo.service';
import { TodoCreateDto } from '../../models/todoCreateDto';
import { MatDialogRef } from '@angular/material/dialog';
import { Priority } from '../../models/todo';


@Component({
  selector: 'app-create-new-todo',
  imports: [FormsModule,MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule,ReactiveFormsModule, MatOption, MatSelectModule],
  templateUrl: './create-new-todo.component.html',
  styleUrl: './create-new-todo.component.css'
})
export class CreateNewTodoComponent implements OnInit {

  public priorities = Object.values(Priority).filter(value => typeof value === 'string');

  constructor(private todoService: TodoService, private dialogRef: MatDialogRef<CreateNewTodoComponent>) {
  }

  ngOnInit(): void {
    console.log(this.priorities);
  }

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    priority: new FormControl('')
  });

  onSubmit(){
    let todoToCreate: TodoCreateDto = {
      content: this.form.value.content,
      lastEditDate: new Date,
      title: this.form.value.title,
      priority: this.form.value.priority
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
