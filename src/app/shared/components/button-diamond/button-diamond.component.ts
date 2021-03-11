import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-diamond',
  templateUrl: './button-diamond.component.html',
  styleUrls: ['./button-diamond.component.scss']
})
export class ButtonDiamondComponent {

  @Input()
  text = '';

  @Input()
  img = '';

  @Output() onclick:
  EventEmitter<Event> = new EventEmitter<Event>();

  clickButton(event: Event): void{
    this.onclick.emit(event);
  }
}