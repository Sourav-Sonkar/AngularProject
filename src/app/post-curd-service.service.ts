import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostCurdServiceService {
  posts: any[]
  constructor(public http: HttpClient) {

  }
  getPost() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data: any[]) =>
      this.posts = data
    )
  }
}
