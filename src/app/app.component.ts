import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HomeWorks';
  todos = [{
    name: 'Task 1',
    isDone: true,
      }]
    
      addTask() {
        this.todos.push({
        name: 'Task 2',
        isDone: false,},
        {
          name: 'Task 3',
          isDone: true,})
      }
}
