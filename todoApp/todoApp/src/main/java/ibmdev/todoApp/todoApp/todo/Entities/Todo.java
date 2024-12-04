package ibmdev.todoApp.todoApp.todo.Entities;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name="TODO")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String content;
    @Column(name = "last_edit_date")
    private Date lastEditDate;

    @Enumerated(EnumType.STRING)
    private Priority priority;


    public Todo(int id, String content, Date lastEditDate, String title, Priority priority) {
        this.id = id;
        this.content = content;
        this.lastEditDate = lastEditDate;
        this.title = title;
        this.priority = priority;
    }

    public Todo() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
