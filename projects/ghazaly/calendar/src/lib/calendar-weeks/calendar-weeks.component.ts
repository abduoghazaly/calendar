import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
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
export class CalendarWeeksComponent implements AfterViewInit {
  @Input('config') config!: CalendarConfig;
  @Output('eventBTNClicked') eventBTNClickedEmitter =
    new EventEmitter<string>();
  @Output('weekBTNClicked') weekBTNClickedEmitter = new EventEmitter<
    'before' | 'after'
  >();

  @ViewChild('calendarWeekContainer') calendarWeekContainer!: ElementRef;

  timeNow: Date = new Date();
  isChangeWeekBTN: boolean = false;
  private isScrolled: boolean = false;

  constructor(private ChangeDetectorRef: ChangeDetectorRef) {
    setInterval(() => {
      this.timeNow = new Date();
    }, 10000);
  }

  ngAfterViewInit(): void {
    this.scrollToNow();
  }

  isTimeNow(time: timeFrame): boolean {
    let isDay = this.config.monthsStyleOption?.weeks?.some((value) =>
      value?.date
        ? this.timeNow.getDate() == new Date(value?.date).getDate()
        : false
    );
    let isTimeNow =
      (this.timeNow.getFullYear() == this.config.date?.targetYear &&
        this.timeNow.getMonth() == this.config.date?.targetMonth &&
        this.timeNow.getHours() == +(time?.hour ?? 0) &&
        isDay) ??
      false;
    if (isTimeNow) this.isScrolled = true;
    return isTimeNow;
  }

  isToDay(date: string) {
    if (date)
      return (
        this.timeNow.getDate() == new Date(date).getDate() &&
        this.timeNow.getMonth() == new Date(date).getMonth() &&
        this.timeNow.getFullYear() == new Date(date).getFullYear()
      );
    else return false;
  }

  eventBTN(event: MouseEvent, eventId?: string) {
    event.stopPropagation();
    this.eventBTNClickedEmitter.emit(eventId);
  }

  weekBTNClicked(target: 'before' | 'after') {
    this.weekBTNClickedEmitter.emit(target);
  }

  scrollToNow() {
    if (this.isScrolled) {
      this.ChangeDetectorRef.detectChanges();
      this.calendarWeekContainer.nativeElement.scrollTo(
        this.timeNow.getHours() *
          60 *
          (this.config.monthsStyleOption?.timeFrameStyle?.widthRatio ?? 1) -
          this.calendarWeekContainer.nativeElement.clientWidth / 2 +
          60 * (this.config.monthsStyleOption?.timeFrameStyle?.widthRatio ?? 1),
        0
      );
    }

    this.isScrolled = false;
  }
}
