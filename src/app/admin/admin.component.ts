import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  openNav = false;

  constructor(private router: Router) { }

  navigate(url: string): void {
    this.router.navigateByUrl(`admin/${url}`);
  };

}
