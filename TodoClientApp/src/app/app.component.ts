import { Component } from '@angular/core';
import { TodoBoardComponent } from "./components/todo-board/todo-board.component";

@Component({
  selector: 'app-root',
  imports: [TodoBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoClientApp';
}
