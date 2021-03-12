import { Component, OnInit } from '@angular/core';
import { Post } from '@shared/models/post.model';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent {

  viewMode = 2;

  posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  currentPost: Post = {
    title: '',
    tags: [''],
    date: '',
    content: '',
    comments: [],
    summary: '',
    image: ''
  };

  public imagePath!: string;
  imgURL: any;
  public message!: string;

  file!: File;
  posted = false;

  chosenTag = '';
  postTags: string[] = ['Party', 'Meeting', 'Concert', 'Happening', 'Opening', ];

  addRelatedEvent = true;

  openPost(post: number){

  }

  // into component
  /* files */
  preview(files: any): void {

    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };

    this.file = files[0];
  }

  pickTag(type: string): void{
    this.chosenTag === type ? this.chosenTag = '' : this.chosenTag = type;
  }
}
