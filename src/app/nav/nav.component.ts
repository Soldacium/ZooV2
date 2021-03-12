import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import anime from 'animejs/lib/anime.es';
import anime from 'animejs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  constructor(public router: Router) { }
  visible = false;
  active = false;

  fillElement: any;

  ngOnInit(): void {
    this.fillElement = document.querySelector('.fill');
  }

  circleToSquare() :void{
    anime({
      targets: this.fillElement,
      width: ['3rem', '130vw'],
      height: ['3rem', '130vw'],
      duration: 1000,
      backgroundColor: 'green',
      borderRadius: ['50%', '0%'],
      easing: 'easeInOutQuad'
    });
  }

  squareToCircle() :void{
    anime({
      targets: this.fillElement,
      width: ['130vw', '3rem'],
      height: ['130vw', '3rem'],
      duration: 1000,
      backgroundColor: 'white',
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutQuad'
    });
  }

  change(): void {
    this.visible = !this.visible;
    this.active = !this.active;
    if(this.visible){
      this.circleToSquare();
    }else{
      this.squareToCircle();
    }
    
  }
}


