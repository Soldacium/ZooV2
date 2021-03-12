import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@shared/models/user.model';
import { Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';

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



  createUser(email: string, password: string, username: string): void {

    const authData = {email, password, username};
    this.http
    .post('http://localhost:3000/api/auth/signup', authData)
    .subscribe((res: any) => {
      if (res.message){
        this.login(email, password);
      }
    });
  }






  login(email: string, password: string): void {
    const authData = {email, password};

    this.http
    .post<{token: string, userID: string, userData: any}>('http://localhost:3000/api/auth/login', authData)
    .subscribe((res: any) => {
      const token = res.token;
      this.token = token;
      if (token) {
        this.authStatusListener.next(true);
        this.isAuth = true;
        this.user = res.userData;
        this.saveAuthData(token);
        this.router.navigate(['/']);
      }
    });
  }

  logout(): void {
    this.token = '';
    this.isAuth = false;
    this.authStatusListener.next(false);

    this.deleteAuthData();
  }




  autoAuthUser(): void {
    const token = this.getAuthData();
    if (token){
      this.token = token.token;
      this.userID = token.id;
      this.isAuth = true;
      this.authStatusListener.next(true);
    }

    if (this.userID && this.userID !== ''){
      this.http.get<{message: string, userData: any}>('http://localhost:3000/api/auth/login/' + this.userID)
      .subscribe((res: any) => {
        this.user = res.userData;
        this.userListener.next(this.user);

      });
    }
  }


  private saveAuthData(token: string): void {
    const decoded = jwt_decode<{token: string, userId: string}>(this.token);
    localStorage.setItem('token', token);
    localStorage.setItem('id', decoded.userId);
  }
  private deleteAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }
  private getAuthData(){
    const token = localStorage.getItem('token') as string;
    const id = localStorage.getItem('id') as string;
    if (!token){
      return;
    }
    return {token, id};
  }
}


