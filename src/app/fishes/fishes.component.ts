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
export class FishesComponent {
  routes = ['/fishes/fighting', '/fishes/golden', '/fishes/jelly', '/fishes/what'];

  prepareRoute(outlet: RouterOutlet): RouterOutlet {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
