package ibmdev.todoApp.todoApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
@ComponentScan(basePackages = "ibmdev/todoApp/todoApp/todo")
public class TodoAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoAppApplication.class, args);
	}
}
