import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  flag: boolean;
  constructor() {
    this.flag = true;
  }
  changeToogle() {
    this.flag = !this.flag
  }
}
