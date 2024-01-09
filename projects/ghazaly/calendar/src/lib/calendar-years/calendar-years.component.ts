import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarConfig } from '../../public-api';

@Component({
  selector: 'lib-calendar-years',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-years.component.html',
  styleUrl: './calendar-years.component.scss',
})
export class CalendarYearsComponent {
  @Input('config') config!: CalendarConfig;
  @Output('monthSelected') monthSelected = new EventEmitter<number>();

  selectMonth(date: number) {
    this.monthSelected.emit(date);
  }
}
