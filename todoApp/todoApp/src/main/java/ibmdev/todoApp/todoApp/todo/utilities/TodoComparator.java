package ibmdev.todoApp.todoApp.todo.utilities;

import ibmdev.todoApp.todoApp.todo.Entities.Todo;

import java.util.Comparator;

public class TodoComparator implements Comparator<Todo> {
    @Override
    public int compare(Todo todo1, Todo todo2) {
        return todo1.getId() - todo2.getId();
    }
}
