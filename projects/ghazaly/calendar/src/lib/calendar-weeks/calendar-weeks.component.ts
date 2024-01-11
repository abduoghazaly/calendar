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
  @Output('eventBTNClicked') eventBTNClicked = new EventEmitter<string>();

  timeNow: Date = new Date();

  constructor() {
    setInterval(() => {
      this.timeNow = new Date();
    }, 10000);
  }

  eventBTN(event: MouseEvent, eventId?: string) {
    event.stopPropagation();
    this.eventBTNClicked.emit(eventId);
  }

  isTimeNow(time: timeFrame) {
    return (
      this.timeNow.getFullYear() == this.config.date?.targetYear &&
      this.timeNow.getMonth() == this.config.date?.targetMonth &&
      this.timeNow.getHours() == +(time?.hour ?? 0)
    );
  }
}
