import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boxes-diamond',
  templateUrl: './boxes-diamond.component.html',
  styleUrls: ['./boxes-diamond.component.scss']
})
export class BoxesDiamondComponent {

  @Input()
  textTop = '';

  @Input()
  textBottom = '';

  @Input()
  img1 = '';

  @Input()
  img2 = '';

  @Input()
  img3 = '';

  @Input()
  img4 = '';

  @Input()
  animation = true;

  @Output() onclick1:
  EventEmitter<Event> = new EventEmitter<Event>();

  @Output() onclick2:
  EventEmitter<Event> = new EventEmitter<Event>();

  @Output() onclick3:
  EventEmitter<Event> = new EventEmitter<Event>();

  @Output() onclick4:
  EventEmitter<Event> = new EventEmitter<Event>();

  clickButton(event: Event, button: number): void{
    switch (button) {
      case 0:
        this.onclick1.emit(event);
        break;
      case 1:
        this.onclick2.emit(event);
        break;
      case 1:
        this.onclick3.emit(event);
        break;
      case 1:
        this.onclick4.emit(event);
        break;
      default:
        break;
    }
  }
}
