package ibmdev.todoApp.todoApp.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ibmdev.todoApp.todoApp.todo.Entities.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {
}