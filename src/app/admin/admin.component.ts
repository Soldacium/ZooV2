import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  openNav = false;
  user!: User;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  navigate(url: string): void {
    this.router.navigateByUrl(`admin/${url}`);
    this.openNav = false;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl(`/login`);
  }

}
