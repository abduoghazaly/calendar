import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() changeCalendarStyleEventEmitter = new EventEmitter<CalendarStyle>();
  @Output() changeCalendarDateEventEmitter = new EventEmitter<string>();
  @Output() calenderEventClickedEmitter = new EventEmitter<string>();

  isCalendarShow: boolean = true;
  calendarStyleEnum = CalendarStyle;

  constructor() {}

  changeCalenderStyle(event: CalendarStyle, months?: number, years?: number) {
    this.config.showStyle = event;
    if (months != undefined) this.config.date!.targetMonth = months;
    if (years) this.config.date!.targetYear = years;

    this.changeCalendarStyleEventEmitter.emit(event);
    this.emitCalendarDate();
  }

  changeCalendarTime(target: 'after' | 'before') {
    if (this.config.showStyle == this.calendarStyleEnum.weeks) {
      if (target == 'after') {
        if (
          this.config.date!.targetMonth != undefined &&
          this.config.date!.targetMonth == 11
        ) {
          this.config.date!.targetYear =
            (this.config.date?.targetYear ?? new Date().getFullYear()) + 1;
          this.config.date!.targetMonth = 0;
        } else {
          this.config.date!.targetMonth =
            (this.config.date?.targetMonth ?? new Date().getMonth()) + 1;
        }
      }

      if (target == 'before') {
        if (
          this.config.date!.targetMonth != undefined &&
          this.config.date!.targetMonth == 0
        ) {
          this.config.date!.targetYear =
            (this.config.date?.targetYear ?? new Date().getFullYear()) - 1;
          this.config.date!.targetMonth = 11;
        } else {
          this.config.date!.targetMonth =
            (this.config.date?.targetMonth ?? new Date().getMonth()) - 1;
        }
      }
    }
    if (this.config.showStyle == this.calendarStyleEnum.years) {
      if (target == 'after') {
        this.config.date!.targetYear =
          (this.config.date?.targetYear ?? new Date().getFullYear()) + 1;
      }

      if (target == 'before') {
        this.config.date!.targetYear =
          (this.config.date?.targetYear ?? new Date().getFullYear()) - 1;
      }
    }
    this.emitCalendarDate();
  }

  emitCalendarDate() {
    let date = new Date();
    date.setFullYear(this.config.date?.targetYear ?? new Date().getFullYear());
    date.setMonth(this.config.date?.targetMonth ?? new Date().getMonth());
    date.setDate(this.config.date?.targetDay ?? new Date().getDate());

    this.changeCalendarDateEventEmitter.emit(date.toISOString());
  }

  eventBTNClicked(event: string) {
    this.calenderEventClickedEmitter.emit(event);
  }
}

// new Date(new Date().setDate( new Date().getDate() - new Date().getDay())).toISOString()
