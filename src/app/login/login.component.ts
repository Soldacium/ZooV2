import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginCreds = {
    mail: '',
    password: ''
  };

  public registerCreds = {
    mail: '',
    password1: '',
    password2: '',
    userName: ''
  };

  errorMsg!: string;

  active = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  switch(){
    this.active = !this.active;
  }

  login(){
    try{
      // this.authService.login(this.loginCreds.mail,this.loginCreds.password).then(() => {})
        console.log('log in');
    }catch {
      alert('no such credentials in database!');
    }

  }

  register(){

    const email = this.registerCreds.mail;
    const password1 = this.registerCreds.password1;
    const password2 = this.registerCreds.password2;
    const displayName = this.registerCreds.userName;


    if (password1 == password2){
      console.log('tryin to register..');
      console.log(displayName);
      /*
      this.authService.signUp(email, password1, displayName)
      .catch(error => this.errorMsg = error.message);
      */
    }


  }

}
