import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarConfig, timeFrame } from '../../public-api';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'lib-calendar-weeks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-weeks.component.html',
  styleUrl: './calendar-weeks.component.scss',
  animations: [
    trigger('calendarEventDetailsAnimation', [
      transition(':enter', [
        style({ height: 0 }),
        animate('250ms ease-out', style({ height: '*' })),
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('250ms ease-out', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class CalendarWeeksComponent {
  @Input('config') config!: CalendarConfig;
  @Output('eventBTNClicked') eventBTNClickedEmitter =
    new EventEmitter<string>();
  @Output('weekBTNClicked') weekBTNClickedEmitter = new EventEmitter<
    'before' | 'after'
  >();

  timeNow: Date = new Date();
  isChangeWeekBTN: boolean = false;

  constructor() {
    setInterval(() => {
      this.timeNow = new Date();
    }, 10000);
  }

  isTimeNow(time: timeFrame) {
    let isDay = this.config.monthsStyleOption?.weeks?.some((value) =>
      value?.date
        ? this.timeNow.getDate() == new Date(value?.date).getDate()
        : false
    );

    return (
      this.timeNow.getFullYear() == this.config.date?.targetYear &&
      this.timeNow.getMonth() == this.config.date?.targetMonth &&
      this.timeNow.getHours() == +(time?.hour ?? 0) &&
      isDay
    );
  }

  isToDay(date: string) {
    if (date) return this.timeNow.getDate() == new Date(date).getDate();
    else return false;
  }

  eventBTN(event: MouseEvent, eventId?: string) {
    event.stopPropagation();
    this.eventBTNClickedEmitter.emit(eventId);
  }

  weekBTNClicked(target: 'before' | 'after') {
    this.weekBTNClickedEmitter.emit(target);
  }
}
