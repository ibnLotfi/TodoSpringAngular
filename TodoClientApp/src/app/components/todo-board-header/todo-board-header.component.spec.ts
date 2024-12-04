import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBoardHeaderComponent } from './todo-board-header.component';

describe('TodoBoardHeaderComponent', () => {
  let component: TodoBoardHeaderComponent;
  let fixture: ComponentFixture<TodoBoardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoBoardHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoBoardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
