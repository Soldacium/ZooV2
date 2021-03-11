import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class FishesComponent implements OnInit {

  constructor() { }

  routes = ['/fishes/fighting','/fishes/golden','/fishes/jelly','/fishes/what'];

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet): RouterOutlet {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  onActivate(event: Event): void {
    window.scroll(0, 0);
  }
}
