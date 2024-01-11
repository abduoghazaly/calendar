import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarConfig } from '../../public-api';
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

  eventBTN(eventId?: string) {
    this.eventBTNClicked.emit(eventId);
  }
}
