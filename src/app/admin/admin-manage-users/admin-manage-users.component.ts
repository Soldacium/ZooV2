import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { User } from '@shared/models/user.model';

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

  users: any;
  loggedUser!: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.users = this.authService.getUsersFromDatabase();
    this.loggedUser = this.authService.getUser();
  }


  register(): void {
    const email = this.registerCreds.mail;
    const password1 = this.registerCreds.password1;
    const password2 = this.registerCreds.password2;
    const displayName = this.registerCreds.username;

    if (password1 === password2){
      console.log('tryin to register new user..');
      this.authService.createUser(email, password1, displayName, this.addNewAdmin)
    }
  }

  deleteUser(_id: string): void {
    this.authService.deleteUser(_id).subscribe(mes => mes);
  }



}
