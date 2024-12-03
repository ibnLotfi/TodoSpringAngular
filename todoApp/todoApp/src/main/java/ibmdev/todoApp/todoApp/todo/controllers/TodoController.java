package ibmdev.todoApp.todoApp.todo.controllers;

import ibmdev.todoApp.todoApp.todo.Dtos.TodoCreateDto;
import ibmdev.todoApp.todoApp.todo.Entities.Todo;
import ibmdev.todoApp.todoApp.todo.utilities.TodoComparator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ibmdev.todoApp.todoApp.todo.services.TodoService;

import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;


@RestController
@RequestMapping("/todo")
public class TodoController {

    private final TodoService todoService;
    private static final Logger logger = LoggerFactory.getLogger(TodoController.class);

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public ResponseEntity<List<Todo>> getAll(){
        List<Todo> todos = todoService.GetAllTodos();
        todos.sort(new TodoComparator());
        return new ResponseEntity<>(todos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public  ResponseEntity<Todo> get(@PathVariable int id){
        Todo todoFromDb = todoService.getById(id);
        if(todoFromDb != null){
            return new ResponseEntity<>(todoFromDb, HttpStatus.OK);
        }
        else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Todo> create(@RequestBody TodoCreateDto todoCreateDto){
        logger.info("Received POST request with data: {}", todoCreateDto);
        Todo createdTodo = new Todo();
        createdTodo.setContent(todoCreateDto.getContent());
        createdTodo.setLastEditDate(todoCreateDto.getLastEditDate());
        createdTodo.setTitle(todoCreateDto.getTitle());
        Todo created = todoService.createTodo(createdTodo);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable int id, @RequestBody TodoCreateDto todoToUpdateFromRequest) {
        Todo todoToUpdate = new Todo();
        todoToUpdate.setContent(todoToUpdateFromRequest.getContent());
        todoToUpdate.setLastEditDate(todoToUpdateFromRequest.getLastEditDate());
        todoToUpdate.setTitle(todoToUpdateFromRequest.getTitle());
        Todo updatedTodo = todoService.updateTodo(id, todoToUpdate);
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
