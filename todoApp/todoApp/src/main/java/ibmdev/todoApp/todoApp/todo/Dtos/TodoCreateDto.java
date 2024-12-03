package ibmdev.todoApp.todoApp.todo.Dtos;

import java.sql.Date;
import java.sql.Timestamp;

public class TodoCreateDto {

    private String content;
    private Date lastEditDate;
    private String title;

    public TodoCreateDto() {
    }

    public TodoCreateDto(String content, Date lastEditDate, String title) {
        this.content = content;
        this.lastEditDate = lastEditDate;
        this.title = title;
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

}
