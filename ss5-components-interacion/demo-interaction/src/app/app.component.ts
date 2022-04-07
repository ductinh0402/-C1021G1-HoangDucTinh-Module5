import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-interaction';
  Counter: number=5;

  increment() {
    this.Counter++;
  }

  decrement() {
    this.Counter--;
  }
// countParent;
//
//   countChangedHandle(count: number) {
//  this.countParent=count;
//   }
}
