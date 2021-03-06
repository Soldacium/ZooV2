import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  visible = false;
  active = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  change() {
    this.visible = !this.visible;
    this.active = !this.active;
  }

}
