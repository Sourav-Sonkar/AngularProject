import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/auth/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newUser: any

  constructor(public auth: UserService) { }

  ngOnInit(): void {
  }

  signInSubmit(signInForm) {
    this.auth.signUp(this.newUser)
  }
}
