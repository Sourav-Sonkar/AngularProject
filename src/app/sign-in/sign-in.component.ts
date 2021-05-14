import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/auth/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  existingUser: User

  constructor(public auth: UserService) { 
    this.existingUser = new User()
  }

  ngOnInit(): void {
  }

  signInSubmit(signInForm){
    this.auth.signIn(this.existingUser)
  }

}
