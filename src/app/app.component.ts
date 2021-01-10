import { Component } from '@angular/core';
import { Todo } from './Todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'HomeWorks';
  todos :Todo [] =[{
    name: 'Task 1',
    isDone: true,
    id:1,
      }]
    
      addTask() {
        this.todos.push({
        name: 'Task 2',
        isDone: false,
      id:2},
        {
          name: 'Task 3',
          isDone: true,
        id: 3})
      }
}
