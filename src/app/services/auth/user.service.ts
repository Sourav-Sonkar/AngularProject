import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User
  errorFlag: boolean

  constructor(public http: HttpClient) { 

  }

  signUp(newUser: User) {
    this.http.post('http://localhost:8080/signup', newUser).subscribe(res => {
      console.log(res)
    })
  }

  signIn(existingUser: User) {
    this.errorFlag = false
    
    this.http.post<User>('http://localhost:8080/signin', existingUser).subscribe(res => {
      console.log(res)
      if(res){
        this.user = res
        // navigate to home page !
      }
      else{
        this.errorFlag = true
      }
    })
  }
}
