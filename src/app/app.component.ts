import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HomeWorks';
 todo = [{
    name: 'Task 1',
    isDone: true,
      }]
    
      // addTask() {
      //   this.todo.push({
      //   name: 'Task 2',
      //   isDone: true,})
      // }
}
