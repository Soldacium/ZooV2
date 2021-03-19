import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '@shared/models/comment.model';
import { Post } from '@shared/models/post.model';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts = [];
  postsUpdated = new Subject();
  postsReady = new Subject();

  postsPosted = new Subject();

  savedPostsUpdated = new Subject();

  commentsUpdated = new Subject();

  comments = new Subject();

  savedEvents = [];
  constructor(
    private http: HttpClient,
    private authService: AuthService) {
    }


  getPosts(){
    return this.http.get<Post[]>('http://localhost:3000/api/posts/').pipe(
      map((posts: Post[] ) => {
        return posts;
      })
    );
  }

  getPost(postID: string): Observable<Post>{
    return this.http.get<Post>('http://localhost:3000/api/posts/' + postID).pipe(
      map((post: Post) => {
        return post;
      })
    );
  }

  postPost(post: Post, img: File){
    const postData = this.makePostData(post, img);
    console.log(postData, img);
    return this.http.post('http://localhost:3000/api/posts/', postData).pipe(
      map((post: any) => {
        return post;
      })
    );
  }

  deletePost(postID: string): Observable<Post>{
    return this.http.delete<Post>('http://localhost:3000/api/posts/' + postID).pipe(
      map((post) => {
        return post;
      })
    );
  }

 /*
  postComment(comment: string ){

    const commentsID = this.currentEvent.commentsID;
    const data = this.createCommentData(comment, 'comment');

    if (commentsID === '' || commentsID === undefined || comment === '' || data.newComment.userID === undefined){ return; }

    this.http
    .post<any>('http://localhost:3000/api/post/comments' + commentsID, data)
    .subscribe(res => {
      this.currentComments.push(res.data);
      this.commentsUpdated.next(this.currentComments);
    });
  }
  postResponse( response , commentID: string){

    const commentsID = this.currentEvent.commentsID;
    const data = this.createCommentData(response, 'response', commentID);

    if (commentsID === '' || commentsID === undefined || response === '' || data.newComment.userID === undefined){ return; }

    this.http
    .post<any>('http://localhost:3000/api/event-comments/' + commentsID, data)
    .subscribe(res => {

      this.currentComments.find(comment => comment._id === commentID).responses.push(res.data);
      this.commentsUpdated.next(this.currentComments);
    });
  }

  */





  private createCommentData(text: string, date: string, commentID?: string): any{
    // const userData = this.userService.getCurrentUserData();
    // const user = this.userService.getCurrentUser();
    const user = this.authService.getUser();

    const data: Comment = {
      _id: '',
      comment: text,
      date,
      responses: []

    };
    return data;
  }

  private makePostData(post: Post, img: File): FormData{
    const postData = new FormData();

    postData.append('title', post.title);
    postData.append('content', post.content);
    postData.append('date', post.date);
    postData.append('tags', JSON.stringify(post.tags));
    postData.append('hasEvent', JSON.stringify(post.hasEvent));
    postData.append('summary', post.summary);
    postData.append('comments', JSON.stringify(post.comments));
    postData.append('image', img, post.title);

    return postData;
  }
}
