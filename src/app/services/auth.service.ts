import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@shared/models/user.model';
import { Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user!: User;
  private userID!: string;
  private token!: string;
  private isAuth = false;
  private authStatusListener = new Subject<boolean>();
  private userListener = new Subject<object>();
  private updatedUserImage = new Subject();

  constructor(private http: HttpClient, private router: Router) { }

  getToken(){
    return this.token;
  }

  getUserID(): string{
    return this.userID;
  }

  getUser(): User{
    return this.user;
  }

  getUserImageListener() {
    return this.updatedUserImage.asObservable();
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUserListener() {
    return this.userListener.asObservable();
  }

  getAuthStatus(){
    return this.isAuth;
  }



  createUser(email: string, password: string, username: string, fullRights: boolean): void {

    const authData: User = {email, password, username, fullRights};
    this.http
    .post('http://localhost:3000/api/auth/signup', authData)
    .subscribe((res: any) => {
      if (res.message){

      }
    });
  }

  deleteUser(userID: string) {
    return this.http
    .delete('http://localhost:3000/api/auth/signup/' + userID).pipe(
      map(message => {
        console.log(message);
        return message;
      })
    );
  }

  login(email: string, password: string) {
    const authData = {email, password};
    return this.http.post<{token: string, userID: string, userData: any}>('http://localhost:3000/api/auth/login', authData).pipe(
      map((res: any) => {
        if (res.token){
          this.setLoggedUserData(res.token, res.userData);
          return true;
        }else{
          return false;
        }
      })
    );
  }

  setLoggedUserData(token: string, userData: any) {
    this.token = token;
    this.authStatusListener.next(true);
    this.isAuth = true;
    this.user = userData;
    this.saveAuthData(token, userData);
  }

  logout(): void {
    this.token = '';
    this.isAuth = false;
    this.user = {username: '', email: '', password: '', fullRights: false};
    this.authStatusListener.next(false);
    this.deleteAuthData();
  }

  autoAuthUser(): void {
    const token = this.getAuthData();
    if (token.token !== ''){
      this.token = token.token;
      this.userID = token.id;
      this.isAuth = true;
      this.authStatusListener.next(true);
    }
  }

  getUsersFromDatabase(){
    return this.http.get('http://localhost:3000/api/auth/signup/').pipe(
      map((users: any) => {
        console.log(users, 'hey');
        return users;
      })
    );
  }


  private saveAuthData(token: string, userData: any): void {
    const decoded = jwt_decode<{token: string, userId: string}>(this.token);
    localStorage.setItem('token', token);
    localStorage.setItem('id', decoded.userId);
    localStorage.setItem('user', JSON.stringify(userData));
  }
  private deleteAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('user');
  }
  private getAuthData(): {token: string, id: string} {
    const token = localStorage.getItem('token') as string;
    const id = localStorage.getItem('id') as string;
    const user = JSON.parse(localStorage.getItem('user') as string);
    if (!token){
      return {token: '', id: ''};
    }
    this.isAuth = true;
    this.user = user;
    return {token, id};
  }
}


