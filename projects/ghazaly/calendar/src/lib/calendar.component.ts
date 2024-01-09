import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarConfig } from '../model/calendar.config';
import { animate, style, transition, trigger } from '@angular/animations';
import { CalendarWeeksComponent } from './calendar-weeks/calendar-weeks.component';
import { CalendarYearsComponent } from './calendar-years/calendar-years.component';
import { CalendarStyle } from '../model/enum';

@Component({
  selector: 'gh-calendar',
  standalone: true,
  imports: [CommonModule, CalendarWeeksComponent, CalendarYearsComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [
    trigger('calendarControlAnimation', [
      transition(':enter', [
        style({ height: 0 }),
        animate('650ms ease-out', style({ height: '*' })),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        animate('650ms ease-out', style({ height: 0 })),
      ]),
    ]),
  ],
})
export class CalendarComponent {
  @Input('config') config!: CalendarConfig;
  isCalendarShow: boolean = true;
  calendarStyle: CalendarStyle = CalendarStyle.weeks;
  calendarStyleEnum = CalendarStyle;

  constructor() {}

  changeCalenderStyle() {
    this.calendarStyle = this.calendarStyleEnum.years;
  }
}
