import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '@services/posts.service';
import { Post } from '@shared/models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {



  posts: any = [];
  currentPost!: Post;
  openedPost = false;


  constructor(private postsService: PostsService, private router: Router) { }



  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.eventsSetup();
  }

  openPost(post: Post): void {
    this.currentPost = post;
    this.openedPost = true;
    this.router.navigate(['/post/' + post._id]);
  }

  closePost(): void {
    this.openedPost = false;
  }

  postComment(): void {

  }

  postResponse(comment: any): void {

  }

  deleteComment(): void {

  }


  eventsSetup(): void {
  }

  getSavedEvents(): void {
  }


}
