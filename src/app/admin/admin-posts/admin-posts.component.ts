import { Component, OnInit } from '@angular/core';
import { Post } from '@shared/models/post.model';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  currentPost: Post = {
    title: '',
    tags: [''],
    date: new Date,
    content: '',
    comments: []
  }

  constructor() { }

  ngOnInit(): void {
  }

}
