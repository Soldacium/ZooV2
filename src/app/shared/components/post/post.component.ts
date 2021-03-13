import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '@shared/models/comment.model';
import { Post } from '@shared/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  isWritingResponse = '';
  commentInput = '';
  responseInput = '';

  @Input() post: Post = {
    title: '',
    tags: [''],
    date: '',
    content: '',
    comments: [],
    summary: '',
    imageUrl: '',
    hasEvent: false
  };

  @Output() inputModelChange = new EventEmitter<string>();

  ngOnInit(): void {
  }

  postResponse(comment: Comment){

  }

  postComment(): void {

  }

}
