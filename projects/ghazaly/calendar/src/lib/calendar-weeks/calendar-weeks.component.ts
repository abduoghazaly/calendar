import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarConfig } from '../../public-api';

@Component({
  selector: 'lib-calendar-weeks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-weeks.component.html',
  styleUrl: './calendar-weeks.component.scss',
})
export class CalendarWeeksComponent {
  @Input('config') config!: CalendarConfig;
  // @Output('monthSelected') monthSelected = new EventEmitter<number>();
}
