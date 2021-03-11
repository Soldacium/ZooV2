import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-three-alt',
  templateUrl: './button-three-alt.component.html',
  styleUrls: ['./button-three-alt.component.scss']
})
export class ButtonThreeAltComponent {

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
