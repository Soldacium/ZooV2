import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-admin-manage-users',
  templateUrl: './admin-manage-users.component.html',
  styleUrls: ['./admin-manage-users.component.scss']
})
export class AdminManageUsersComponent implements OnInit {


  public registerCreds = {
    mail: '',
    password1: '',
    password2: '',
    username: ''
  };

  addNewAdmin = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  register(): void {

    const email = this.registerCreds.mail;
    const password1 = this.registerCreds.password1;
    const password2 = this.registerCreds.password2;
    const displayName = this.registerCreds.username;


    if (password1 === password2){
      console.log('tryin to register..');
      console.log(displayName);
      this.authService.createUser(email, password1, displayName, this.addNewAdmin)
      /*
      this.authService.signUp(email, password1, displayName)
      .catch(error => this.errorMsg = error.message);
      */
    }
  }

  deleteUser(){
    
  }



}
