import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-fancy',
  templateUrl: './button-fancy.component.html',
  styleUrls: ['./button-fancy.component.scss']
})
export class ButtonFancyComponent{

  @Input()
  text = '';

  @Input()
  img = 'assets/icons/arrow.svg';

  @Output() onclick:
  EventEmitter<Event> = new EventEmitter<Event>();

  clickButton(event: Event): void{
    this.onclick.emit(event);
  }
}
