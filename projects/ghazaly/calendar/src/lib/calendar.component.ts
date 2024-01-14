import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarConfig } from '../model/calendar.config';
import { animate, style, transition, trigger } from '@angular/animations';
import { CalendarWeeksComponent } from './calendar-weeks/calendar-weeks.component';
import { CalendarYearsComponent } from './calendar-years/calendar-years.component';
import { CalendarStyle } from '../model/enum';
import { CalendarService } from './calendar.service';

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
  @Input('config') set config(value: CalendarConfig) {
    this._config = this.CalendarService.deepMergeObjects(this._config, value);
    this._config = this.CalendarService.updateConfig(this._config);
    console.log(this._config);
  }

  @Output() changeCalendarStyleEventEmitter = new EventEmitter<CalendarStyle>();

  @Output() changeCalendarDateEmitter = new EventEmitter<string>();
  @Output() changeCalendarMonthEmitter = new EventEmitter<number>();

  @Output() changeCalendarWeekEmitter = new EventEmitter<string>();
  @Output() calenderEventClickedEmitter = new EventEmitter<string>();

  isCalendarShow: boolean = true;
  calendarStyleEnum = CalendarStyle;

  _config = this.CalendarService.initConfig;

  constructor(private CalendarService: CalendarService) {}

  changeCalenderStyle(event: CalendarStyle, months?: number, years?: number) {
    this._config.showStyle = event;
    if (months != undefined) this._config.date!.targetMonth = months;
    if (years) this._config.date!.targetYear = years;

    this.changeCalendarStyleEventEmitter.emit(event);
    this.changeCalendarMonthEmitter.emit(months);
  }

  changeCalendarTime(target: 'after' | 'before') {
    this.CalendarService.changeCalendarTime(
      target,
      this._config,
      this.changeCalendarDateEmitter
    );
  }

  eventBTNClicked(event: string) {
    this.calenderEventClickedEmitter.emit(event);
  }

  weekBTNClicked(event: string) {
    this.changeCalendarWeekEmitter.emit(event);
  }
}
