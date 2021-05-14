import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any[]
  constructor(public http: HttpClient) {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any[]) => this.userList = res)
  }

  ngOnInit(): void {
  }
  

}
