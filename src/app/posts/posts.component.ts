import { Component, OnInit } from '@angular/core';
import { PostCurdServiceService } from '../post-curd-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[]


  constructor(private postCurd: PostCurdServiceService) {
    console.log("called 1")
  }

  ngOnInit(): void {
    console.log("called 2")
    this.getpost()
  }
  getpost() {
    this.postCurd.getPost()
    this.posts=this.postCurd.post
  }

}
