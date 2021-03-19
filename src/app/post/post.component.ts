import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '@services/posts.service';
import { Post } from '@shared/models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  isWritingResponse = '';
  commentInput = '';
  responseInput = '';

  post: Post = {
    title: '',
    tags: [''],
    date: '',
    content: '',
    comments: [],
    summary: '',
    imageUrl: '',
    hasEvent: false,
    _id: ''
  };

  postComments = [
    {
      username: 'Guy123',
      comment: 'ye, this tutorial fucking sucks, didnt learn anything, moreover, i think i know less than i knew before',
      userID: '123',
      userImg: 'assets/images/temp/temp1.jpg',
      _id: '123',
      responses: []
    }
  ];
  routeSub!: Subscription;
  constructor(private route: ActivatedRoute, private postsService: PostsService){}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {;
      this.postsService.getPost(params['id']).subscribe(post => {
        this.post = post;
        console.log(post);
      })
    })
  }

  postResponse(comment: Comment): void {

  }

  postComment(): void {

  }
}
