import { EventEmitter, Injectable } from '@angular/core';
import { CalendarConfig } from '../public-api';
import { CalendarStyle } from '../model/enum';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  calendarStyleEnum = CalendarStyle;

  initConfig: CalendarConfig = {
    showStyle: CalendarStyle.weeks,
    date: {
      targetDay: 1,
      targetMonth: 0,
      targetYear: 2024,
      targetDate: new Date(),
    },

    yearsStyleOptions: {
      months: [
        {
          title: 'January',
          subTitle: [],
        },
        {
          title: 'February',
          subTitle: [],
        },
        {
          title: 'March',
          subTitle: [],
        },
        {
          title: 'April',
          subTitle: [],
        },
        { title: 'May' },
        {
          title: 'June',
          subTitle: [],
        },
        { title: 'July', subTitle: [''] },
        {
          title: 'August',
          subTitle: [],
        },
        {
          title: 'September',
          subTitle: [],
        },
        {
          title: 'October',
          subTitle: [],
        },
        {
          title: 'November',
          subTitle: [],
        },
        {
          title: 'December',
          subTitle: [],
        },
      ],
    },

    monthsStyleOption: {
      timeFrame: [
        { title: '00:00', hour: '00' },
        { title: '01:00', hour: '01' },
        { title: '02:00', hour: '02' },
        { title: '03:00', hour: '03' },
        { title: '04:00', hour: '04' },
        { title: '05:00', hour: '05' },
        { title: '06:00', hour: '06' },
        { title: '07:00', hour: '07' },
        { title: '08:00', hour: '08' },
        { title: '09:00', hour: '09' },
        { title: '10:00', hour: '10' },
        { title: '11:00', hour: '11' },
        { title: '12:00', hour: '12' },
        { title: '13:00', hour: '13' },
        { title: '14:00', hour: '14' },
        { title: '15:00', hour: '15' },
        { title: '16:00', hour: '16' },
        { title: '17:00', hour: '17' },
        { title: '18:00', hour: '18' },
        { title: '19:00', hour: '19' },
        { title: '20:00', hour: '20' },
        { title: '21:00', hour: '21' },
        { title: '22:00', hour: '22' },
        { title: '23:00', hour: '23' },
      ],
      weeks: [
        {
          date: '2024-01-14T00:00:00.000Z',
          title: 'Saturday',
          events: {},
        },
        {
          date: '2024-01-15T00:00:00.000Z',
          title: 'Sunday',
          events: {},
        },
        { date: '2024-01-16T00:00:00.000Z', title: 'Monday', events: {} },
        { date: '2024-01-17T00:00:00.000Z', title: 'Tuesday', events: {} },
        { date: '2024-01-18T00:00:00.000Z', title: 'Wednesday', events: {} },
        { date: '2024-01-19T00:00:00.000Z', title: 'Thursday', events: {} },
        { date: '2024-01-20T00:00:00.000Z', title: 'Friday', events: {} },
      ],

      timeFrameStyle: {
        widthRatio: 2,
      },
    },

    theme: {
      fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
      colors: {
        primary: '#3D6BE5',
        secondary: '#B286FD',
      },
    },

    controlBTN: {
      showControlBTN: true,
      btn: {
        titleOption: {
          title: 'Calendar',
        },
        iconOption: {
          icon: '../../assets/images/chevron-down.svg',
        },
      },
    },

    header: {
      borderTopColor: '#D9DDE0',
      borderTopWidth: '1px',
      height: '56px',
      titleOptions: {
        title: '',
        Width: '0',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#3D6BE5',
      },
      beforeBTN: {
        icon: '../../assets/images/chevron-left.svg',
        color: '#3D6BE5',
        padding: '5px',
      },
      afterBTN: {
        icon: '../../assets/images/chevron-right.svg',
        color: '#3D6BE5',
        padding: '5px',
      },
    },
    side: {
      afterBTN: {
        icon: '../../assets/images/chevron-down.svg',
        padding: '0',
      },
      beforeBTN: {
        icon: '../../assets/images/chevron-up.svg',
        padding: '0',
      },
    },
  };

  constructor() {}

  deepMergeObjects(obj1: any, obj2: Partial<any>) {
    const result = { ...obj1 };

    Object.keys(obj2).forEach((key: string) => {
      if (obj2.hasOwnProperty(key)) {
        if (
          obj2[key] &&
          typeof obj2[key] === 'object' &&
          !Array.isArray(obj2[key])
        ) {
          // Recursively merge nested objects
          result[key] = this.deepMergeObjects(obj1[key], obj2[key]);
        } else {
          // Directly assign non-object values
          result[key] = obj2[key];
        }
      }
    });

    return result;
  }

  updateConfig(config: CalendarConfig) {
    let newConfig = { ...config };
    newConfig.date = {
      targetDate: newConfig.date?.targetDate,
      targetDay: new Date(newConfig.date?.targetDate ?? '').getDate(),
      targetMonth: new Date(newConfig.date?.targetDate ?? '').getMonth(),
      targetYear: new Date(newConfig.date?.targetDate ?? '').getFullYear(),
    };

    // if (!newConfig.yearsStyleOptions?.months)

    return newConfig;
  }

  changeCalendarTime(
    target: 'after' | 'before',
    config: CalendarConfig,
    changeCalendarDateEmitter: EventEmitter<string>
  ) {
    if (config.showStyle == this.calendarStyleEnum.weeks) {
      if (target == 'after') {
        if (
          config.date!.targetMonth != undefined &&
          config.date!.targetMonth == 11
        ) {
          config.date!.targetYear =
            (config.date?.targetYear ?? new Date().getFullYear()) + 1;
          config.date!.targetMonth = 0;
        } else {
          config.date!.targetMonth =
            (config.date?.targetMonth ?? new Date().getMonth()) + 1;
        }
      }

      if (target == 'before') {
        if (
          config.date!.targetMonth != undefined &&
          config.date!.targetMonth == 0
        ) {
          config.date!.targetYear =
            (config.date?.targetYear ?? new Date().getFullYear()) - 1;
          config.date!.targetMonth = 11;
        } else {
          config.date!.targetMonth =
            (config.date?.targetMonth ?? new Date().getMonth()) - 1;
        }
      }
    }
    if (config.showStyle == this.calendarStyleEnum.years) {
      if (target == 'after') {
        config.date!.targetYear =
          (config.date?.targetYear ?? new Date().getFullYear()) + 1;
      }

      if (target == 'before') {
        config.date!.targetYear =
          (config.date?.targetYear ?? new Date().getFullYear()) - 1;
      }
    }

    changeCalendarDateEmitter.emit(target);
  }
}
