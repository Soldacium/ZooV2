import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-fish',
  templateUrl: './nav-fish.component.html',
  styleUrls: ['./nav-fish.component.scss']
})
export class NavFishComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
