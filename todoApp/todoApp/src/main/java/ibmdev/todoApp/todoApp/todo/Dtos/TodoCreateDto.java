package ibmdev.todoApp.todoApp.todo.Dtos;

import java.sql.Date;
import java.sql.Timestamp;

public class TodoCreateDto {

    private String content;
    private Date lastEditDate;

    public TodoCreateDto() {
    }

    public TodoCreateDto(String content, Date lastEditDate) {
        this.content = content;
        this.lastEditDate = lastEditDate;
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
}
