import { EventEmitter } from '@angular/core';
import { CalendarConfig } from './src/model/calendar.config';

export declare class CalendarComponent {
  calendarStyleEnum: any;
  initConfig: CalendarConfig;
  deepMergeObjects(obj1: any, obj2: Partial<any>): any;
  updateConfig(config: CalendarConfig): any;
  changeCalendarTime(
    target: 'after' | 'before',
    config: CalendarConfig,
    changeCalendarDateEmitter: EventEmitter<string>
  ): any;
}
