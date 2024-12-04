package ibmdev.todoApp.todoApp.todo.Dtos;

import ibmdev.todoApp.todoApp.todo.Entities.Priority;

import java.sql.Date;
import java.sql.Timestamp;

public class TodoCreateDto {

    private String content;
    private Date lastEditDate;
    private String title;
    private Priority priority;

    public TodoCreateDto() {
    }

    public TodoCreateDto(String content, Date lastEditDate, String title, Priority priority) {
        this.content = content;
        this.lastEditDate = lastEditDate;
        this.title = title;
        this.priority = priority;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getLastEditDate() {
        return lastEditDate;
    }

    public void setLastEditDate(Date lastEditDate) {
        this.lastEditDate = lastEditDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

}
