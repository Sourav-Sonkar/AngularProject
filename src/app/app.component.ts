import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  color: String;
  sizeText: number;
  sizeString: String;
  constructor() {
    this.color = 'text-dark'
    this.sizeText = 1
    this.sizeString = "display-" + this.sizeText;
  }
  changeTextSize(x: boolean) {
    if (x) {
      if (this.sizeText < 6) {
        this.sizeText++
        this.sizeString = "display-" + this.sizeText;
      }
    }
    else {
      if (this.sizeText > 1) {
        this.sizeText--
        this.sizeString = "display-" + this.sizeText;
      }
    }

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
