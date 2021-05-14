import { AUTO_STYLE } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: any[]

  constructor(public http: HttpClient) { }

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res: any[]) => {
      this.posts = res
    })
  }
}


// then is used in a promise
// subscibe is used in an observable