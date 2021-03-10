import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-three',
  templateUrl: './button-three.component.html',
  styleUrls: ['./button-three.component.scss']
})
export class ButtonThreeComponent {

  @Input()
  text = '';

  @Input()
  img = '';

  @Input()
  deviation = '';

  @Input()
  inverted = false;

  @Output() onclick:
  EventEmitter<Event> = new EventEmitter<Event>();

  clickButton(event: Event): void{
    this.onclick.emit(event);
  }
}