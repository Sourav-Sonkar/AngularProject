import { Component, OnInit } from '@angular/core';
import { PostCurdServiceService } from '../post-curd-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(public postCurd: PostCurdServiceService) {}

  ngOnInit(): void {
    this.postCurd.getPost()
  }
}
