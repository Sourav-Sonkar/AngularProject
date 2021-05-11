import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  color: String;
  constructor() {
    this.color = 'text-dark'
  }
  changeColor(num: Number) {
    switch (num) {
      case 0:
        this.color = 'text-primary'
        return;
      case 1:
        this.color = 'text-warning'
        return;
      case 2:
        this.color = 'text-success'
        return;
      case 3:
        this.color = 'text-danger'
        return;
      default:
        this.color = 'text-dark'
        return;
    }
  }
}
