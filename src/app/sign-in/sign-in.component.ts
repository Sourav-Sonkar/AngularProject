import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User

  constructor() {
    this.user = new User()
  }

  loginSubmit(loginForm){
    console.log(loginForm)
    this.user = new User()
  }

  ngOnInit(): void {
  }

}
