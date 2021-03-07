import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-jelly',
  templateUrl: './fish-jelly.component.html',
  styleUrls: ['./fish-jelly.component.scss']
})
export class FishJellyComponent implements OnInit {

  more = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeMore(){
    this.more = !this.more;
  }
}
