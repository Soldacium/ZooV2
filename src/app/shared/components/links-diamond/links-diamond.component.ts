import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-links-diamond',
  templateUrl: './links-diamond.component.html',
  styleUrls: ['./links-diamond.component.scss']
})
export class LinksDiamondComponent {

  @Input()
  links: Array<string> = [];

  @Input()
  width = '2rem';

  @Output() onclick1:
  EventEmitter<Event> = new EventEmitter<Event>();


}
