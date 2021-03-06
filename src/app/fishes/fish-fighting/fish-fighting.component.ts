import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-fighting',
  templateUrl: './fish-fighting.component.html',
  styleUrls: ['./fish-fighting.component.scss']
})
export class FishFightingComponent implements OnInit {

  window: any;
  isVisible: boolean = false;
  isVisible2: boolean = false;
  more = false;

  constructor(    @Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView

   }

  ngOnInit() {
  }
  
  @HostListener('window:scroll',[])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    
    if (number > 650) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }

    if (number > 300){
      this.isVisible2 = true;
    }else{
      this.isVisible2 = false;
    }
  }

  changeMore(){
    this.more = !this.more;
  }

}
