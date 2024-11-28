package ibmdev.todoApp.todoApp.todo.controllers;

import ibmdev.todoApp.todoApp.todo.Entities.Todo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ibmdev.todoApp.todoApp.todo.services.TodoService;

import java.util.List;


@RestController
@RequestMapping("/todo")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public ResponseEntity<List<Todo>> getAll(){
        return new ResponseEntity<>(todoService.GetAllTodos(), HttpStatus.FOUND);
    }

    @GetMapping("/{id}")
    public  ResponseEntity<Todo> get(@PathVariable int id){
        Todo todoFromDb = todoService.getById(id);
        if(todoFromDb != null){
            return new ResponseEntity<>(todoFromDb, HttpStatus.FOUND);
        }
        else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Todo> create(@RequestBody Todo todo){
        Todo createdTodo = todoService.createTodo(todo);
        return new ResponseEntity<>(createdTodo, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable int id, @RequestBody Todo todo) {
        Todo updatedTodo = todoService.updateTodo(id, todo);
        if (updatedTodo != null) {
            return ResponseEntity.ok(updatedTodo);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Todo> DeleteTodo(@PathVariable int id){
        if(todoService.deleteTodo(id)){
            return ResponseEntity.noContent().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}
