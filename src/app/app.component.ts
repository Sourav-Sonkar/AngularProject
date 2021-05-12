import { Component } from '@angular/core';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  user: User

  constructor() {
    this.user = new User()
  }

  loginSubmit(loginForm){
    console.log(loginForm)
    this.user = new User()
  }
}
