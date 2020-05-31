import { Component } from '@angular/core';

interface TodoModel {
  title: string;
}

@Component({
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos: TodoModel[] = [
    {
      title: 'Todo 1'
    },
    {
      title: 'Todo 2'
    }
  ];

  public addTodo(): void {
    this.todos = [
      ...this.todos,
      {
        title: `New todo ${Math.floor(Math.random() * 1000)}`
      }
    ];
  }
  public deleteTodo(title: string): void {
    this.todos = this.todos.filter(todo => todo.title !== title);
  }
}
