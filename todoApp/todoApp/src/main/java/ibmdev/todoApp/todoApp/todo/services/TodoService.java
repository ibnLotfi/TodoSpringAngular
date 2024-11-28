package ibmdev.todoApp.todoApp.todo.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ibmdev.todoApp.todoApp.todo.Entities.Todo;
import ibmdev.todoApp.todoApp.todo.repository.TodoRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    private TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public List<Todo> GetAllTodos() {
        return this.todoRepository.findAll();
    }

    public Todo getById(int id) {
        Optional<Todo> todoFromDb = todoRepository.findById(id);
        return todoFromDb.orElse(null);
//      LA METHODE AU DESSUS EST LE MEME RESULTAT QUE LE CODE D'EN BAS
//        if(todoFromDb.isPresent()){
//            return todoFromDb.get();
//        }
//        else{
//            return null;
//        }
    }

    public Todo updateTodo(int id, Todo todo){
        Optional<Todo> todoToUpdate = todoRepository.findById(id);
        if(todoToUpdate.isPresent()){
            todoToUpdate.get().setLastEditDate(todo.getLastEditDate());
            todoToUpdate.get().setContent(todo.getContent());
            todoRepository.save(todoToUpdate.get());
        }
        return  todoToUpdate.orElse(null);
    }

    public boolean deleteTodo(int id){
        Optional<Todo> todoToDelete = todoRepository.findById(id);
        if(todoToDelete.isPresent()){
            todoRepository.delete(todoToDelete.get());
            return true;
        }
        else{
            return false;
        }
    }
}