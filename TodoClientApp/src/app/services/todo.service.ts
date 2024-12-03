import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todo';
import { TodoCreateDto } from '../models/todoCreateDto';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  
  
  private todoUrl: string;

  constructor(private http: HttpClient) {
    this.todoUrl = "http://localhost:8080/api/todo"
   }

   findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl).pipe(
      catchError(error => {
        // Gestion d'erreur
        console.error('Erreur lors de la récupération des todos:', error);
        return throwError(() => new Error('Erreur de récupération des todos'));
      })
    );
  }


  save(todoCreateDto: TodoCreateDto){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<TodoCreateDto>(this.todoUrl,todoCreateDto, {headers});
  }

  deleteTodo(id: number) {
    return this.http.delete(this.todoUrl + "/" + id);
  }

  updateTodo(id: number, todoToUpdate: TodoCreateDto) {
    return this.http.put<Todo>(this.todoUrl + "/" + id, todoToUpdate);
  }


}
