import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-calendar-years',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-years.component.html',
  styleUrl: './calendar-years.component.scss',
})
export class CalendarYearsComponent {}
