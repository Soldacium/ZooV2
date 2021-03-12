import { Component, Input, OnInit } from '@angular/core';
import { Event } from '@shared/models/event.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  thisMonthDays: { date: Date; events: any[]; }[] = [];
  today!: Date;
  thisYear!: number;
  thisMonth!: number;
  activeDay = -1;
  thisMonthFillerDays: {before: number[], after: number[]} = {
    before: [],
    after: []
  };
  monthName!: string;
  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  todayEvents: any[] = [];
  currentEvent = 0;
  saved = [];
  makeSure = false;
  savedEvents: Array<object> = [];

  @Input() events: Event[] = [{title: '',date: ''}];
  ngOnInit(): void {
    this.calendarSetup();
    // this.eventsSetup();
  }



  modifySavedEvents(events: Array<object>): Array<object>{
    const modifiedEvents: any[] = [];
    events.forEach((savedEvent: any) => {
      let time = JSON.parse(savedEvent.time);

      savedEvent.time = time;

      modifiedEvents.push(savedEvent);
      console.log(time, savedEvent);
    });
    return modifiedEvents;
  }





  /**
   * CALENDAR SETUP & CALENDAR FUNCTIONS
   */
  calendarSetup(){
    this.today = new Date();
    this.thisYear =  this.today.getFullYear();
    this.thisMonth =  this.today.getMonth();
    this.monthName = this.monthNames[this.thisMonth];

    this.thisMonthDays = this.getDaysInMonth(this.thisMonth, this.thisYear);
    this.todayEvents = this.getDayEvents(this.formatDate(this.today));
    this.getMissingDays();


  }

  getDaysInMonth(month: number, year: number) {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      // for formatting issues, input in ToDo is yyyy-mm-dd while just by getMonth and getDate you can get format yyyy-m-d

      // each day in month have this
      const dayData = {
        date: new Date(date),
        events: this.getDayEvents(this.formatDate(date))
      };

      // push day into array
      days.push(dayData);
      date.setDate(date.getDate() + 1);
    }
    this.thisMonthDays = days;
    return days;
  }

  formatDate(date: Date){
    const month = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const day = (date.getDate()  < 10) ? `0${date.getDate() }` : `${date.getDate()}`;
    return `${date.getFullYear()}/${month}/${day}`;
  }

  getDayEvents(date: string){
    const events: any[] = [];
    if (!this.savedEvents){
      return events;
    }
    this.savedEvents.forEach((savedEvent: any) => {

      if (savedEvent.time.startDate === date){
        events.push(savedEvent.title);
      }
    });
    return events;

  }

  nextMonth(): void {
    this.thisMonth += 1;
    if (this.thisMonth == 12){
      this.thisMonth = 0;
      this.thisYear += 1;
    }
    this.getDaysInMonth(this.thisMonth, this.thisYear);
    this.getMissingDays();
    this.activeDay = -1;
    this.monthName = this.monthNames[this.thisMonth];
  }

  previousMonth(): void {
    this.thisMonth -= 1;
    if (this.thisMonth == -1){
      this.thisMonth = 11;
      this.thisYear -= 1;
    }
    this.getDaysInMonth(this.thisMonth, this.thisYear);
    this.getMissingDays();
    this.activeDay = -1;
    this.monthName = this.monthNames[this.thisMonth];
  }

  getMissingDays(): void {

    this.thisMonthFillerDays.before = [];
    this.thisMonthFillerDays.after = [];
    const first = new Date(this.thisYear, this.thisMonth, 1).getDay();
    const last = new Date(this.thisYear, this.thisMonth + 1, 0).getDay(); // new Date(this.thisYear,this.thisMonth).getDate()

    for (let i = 1; i < first; i++){
      this.thisMonthFillerDays.before.push(i);
    }
    for (let i = last; i < 7; i++){
      this.thisMonthFillerDays.after.push(i + 1);
    }
  }
}
