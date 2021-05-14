import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostCurdServiceService {
  post: any[]
  constructor(public http: HttpClient) {

  }
  getPost() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data: any[]) =>
      this.post = data
    )
  }
}
