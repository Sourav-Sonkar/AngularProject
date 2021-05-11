import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  num: number
  color: String
  constructor() {
    this.num = 0
    this.color = 'text-primary'
  }

  increase() {
    this.num++
    this.setColor()
  }
  decrease() {
    this.num--
    this.setColor()
  }
  setColor() {
    this.num > 0 ? this.color = 'text-success' :
      (this.num < 0 ? this.color = 'text-danger' : this.color = 'text-primary')
  }

}
