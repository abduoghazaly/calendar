import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from '../../projects/ghazaly/calendar/src/public-api';
import { CalendarConfig } from '../../projects/ghazaly/calendar/src/model/calendar.config';
import { CalendarStyle } from '../../projects/ghazaly/calendar/src/model/enum';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'calendar';

  calendarConfig: CalendarConfig = {
    showStyle: CalendarStyle.weeks,
    date: {
      targetDate: new Date().toISOString(),
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
        { title: 'July', subTitle: [] },
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
      weeks: [
        {
          date: '2024-01-14T00:00:00.000Z',
          title: 'Saturday',
          events: {
            '16': {
              hour: '16',
              min: '0',
              durationInMin: 150,
              details: {
                title: 'OOP advanced',
                name: 'Abduo Ghazaly',
                image: '../assets/images/76250605.jpg',
                start: '2024-01-07T11:15:00.000',
                end: '2024-01-07T13:45:00.000',
                bgColor: '#f74040',
                color: '#fff',
                borderRadius: '12px',
              },
              btnStyle: {
                img: '../assets/images/video.svg',
                title: 'Exit',
                width: '90px',
                id: '56a4sd6asd216a5sd85a1sd',
              },
            },
          },
        },
        {
          date: '2024-01-15T00:00:00.000Z',
          title: 'Sunday',
          events: {
            '05': {
              hour: '5',
              min: '00',
              durationInMin: 150,
              details: {
                title: 'OOP advanced',
                name: 'Abduo Ghazaly',
                image: '../assets/images/76250605.jpg',
                start: '2024-01-07T11:15:00.000Z',
                end: '2024-01-07T12:45:00.000Z',
                bgColor: '#f74040',
                color: '#fff',
                borderRadius: '12px',
              },
              btnStyle: {
                img: '../assets/images/video.svg',
                title: 'Exit',
                width: '90px',
                id: '56a4sd6asd216a5sd85a1sd',
              },
            },
            '16': {
              hour: '11',
              min: '30',
              durationInMin: 190,
              details: {
                title: 'OOP advanced',
                name: 'Abduo Ghazaly',
                image: '../assets/images/76250605.jpg',
                start: '2024-01-07T11:15:00.000Z',
                end: '2024-01-07T12:45:00.000Z',
                bgColor: '#b380fb',
                color: '#fff',
                borderRadius: '12px',
              },
              btnStyle: {
                img: '../assets/images/video.svg',
                title: 'Join',
                width: '90px',
                id: '56a4sd6asd216a5sd85a1sd',
              },
            },
          },
        },
        { date: '2024-01-16T00:00:00.000Z', title: 'Monday', events: {} },
        { date: '2024-01-17T00:00:00.000Z', title: 'Tuesday', events: {} },
        { date: '2024-01-18T00:00:00.000Z', title: 'Wednesday', events: {} },
        { date: '2024-01-19T00:00:00.000Z', title: 'Thursday', events: {} },
        { date: '2024-01-20T00:00:00.000Z', title: 'Friday', events: {} },
      ],
    },
  };

  calendarStyleUpdate(value: any) {
    console.log('style', value);
  }

  calendarDateUpdate(value: any) {
    console.log('date', value);
    let addValue = 1;
    if (value == 'before') addValue = -1;
    let newDate = new Date(this.calendarConfig.date?.targetDate ?? '');
    newDate.setDate(1);
    newDate.setMonth(newDate.getMonth() + addValue);
    this.calendarConfig.date = {
      targetDate: newDate.toISOString(),
    };
    this.calendarConfig.monthsStyleOption!.weeks = [
      {
        date: newDate.toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {
          '16': {
            hour: '16',
            min: '0',
            durationInMin: 150,
            details: {
              title: 'OOP advanced',
              name: 'Abduo Ghazaly',
              image: '../assets/images/76250605.jpg',
              start: '2024-01-07T11:15:00.000',
              end: '2024-01-07T13:45:00.000',
              bgColor: '#f74040',
              color: '#fff',
              borderRadius: '12px',
            },
            btnStyle: {
              img: '../assets/images/video.svg',
              title: 'Exit',
              width: '90px',
              id: '56a4sd6asd216a5sd85a1sd',
            },
          },
        },
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {
          '05': {
            hour: '5',
            min: '00',
            durationInMin: 150,
            details: {
              title: 'OOP advanced',
              name: 'Abduo Ghazaly',
              image: '../assets/images/76250605.jpg',
              start: '2024-01-07T11:15:00.000Z',
              end: '2024-01-07T12:45:00.000Z',
              bgColor: '#f74040',
              color: '#fff',
              borderRadius: '12px',
            },
            btnStyle: {
              img: '../assets/images/video.svg',
              title: 'Exit',
              width: '90px',
              id: '56a4sd6asd216a5sd85a1sd',
            },
          },
          '16': {
            hour: '11',
            min: '30',
            durationInMin: 190,
            details: {
              title: 'OOP advanced',
              name: 'Abduo Ghazaly',
              image: '../assets/images/76250605.jpg',
              start: '2024-01-07T11:15:00.000Z',
              end: '2024-01-07T12:45:00.000Z',
              bgColor: '#b380fb',
              color: '#fff',
              borderRadius: '12px',
            },
            btnStyle: {
              img: '../assets/images/video.svg',
              title: 'Join',
              width: '90px',
              id: '56a4sd6asd216a5sd85a1sd',
            },
          },
        },
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {},
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {},
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {},
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {},
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {},
      },
    ];

    this.calendarConfig = JSON.parse(JSON.stringify(this.calendarConfig));
  }

  changeCalendarMonth(value: any) {
    console.log('Month', value);
    if (value) {
      let addValue = 1;
      if (value == 'before') addValue = -1;
      let newDate = new Date(this.calendarConfig.date?.targetDate ?? '');
      newDate.setDate(1);
      newDate.setMonth(value);
      this.calendarConfig.date = {
        targetDate: newDate.toISOString(),
      };
      this.calendarConfig.monthsStyleOption!.weeks = [
        {
          date: newDate.toISOString(),
          title: newDate.toLocaleString('en-us', { weekday: 'long' }),
          events: {
            '16': {
              hour: '16',
              min: '0',
              durationInMin: 150,
              details: {
                title: 'OOP advanced',
                name: 'Abduo Ghazaly',
                image: '../assets/images/76250605.jpg',
                start: '2024-01-07T11:15:00.000',
                end: '2024-01-07T13:45:00.000',
                bgColor: '#f74040',
                color: '#fff',
                borderRadius: '12px',
              },
              btnStyle: {
                img: '../assets/images/video.svg',
                title: 'Exit',
                width: '90px',
                id: '56a4sd6asd216a5sd85a1sd',
              },
            },
          },
        },
        {
          date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
          title: newDate.toLocaleString('en-us', { weekday: 'long' }),
          events: {
            '05': {
              hour: '5',
              min: '00',
              durationInMin: 150,
              details: {
                title: 'OOP advanced',
                name: 'Abduo Ghazaly',
                image: '../assets/images/76250605.jpg',
                start: '2024-01-07T11:15:00.000Z',
                end: '2024-01-07T12:45:00.000Z',
                bgColor: '#f74040',
                color: '#fff',
                borderRadius: '12px',
              },
              btnStyle: {
                img: '../assets/images/video.svg',
                title: 'Exit',
                width: '90px',
                id: '56a4sd6asd216a5sd85a1sd',
              },
            },
            '16': {
              hour: '11',
              min: '30',
              durationInMin: 190,
              details: {
                title: 'OOP advanced',
                name: 'Abduo Ghazaly',
                image: '../assets/images/76250605.jpg',
                start: '2024-01-07T11:15:00.000Z',
                end: '2024-01-07T12:45:00.000Z',
                bgColor: '#b380fb',
                color: '#fff',
                borderRadius: '12px',
              },
              btnStyle: {
                img: '../assets/images/video.svg',
                title: 'Join',
                width: '90px',
                id: '56a4sd6asd216a5sd85a1sd',
              },
            },
          },
        },
        {
          date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
          title: newDate.toLocaleString('en-us', { weekday: 'long' }),
          events: {},
        },
        {
          date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
          title: newDate.toLocaleString('en-us', { weekday: 'long' }),
          events: {},
        },
        {
          date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
          title: newDate.toLocaleString('en-us', { weekday: 'long' }),
          events: {},
        },
        {
          date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
          title: newDate.toLocaleString('en-us', { weekday: 'long' }),
          events: {},
        },
        {
          date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
          title: newDate.toLocaleString('en-us', { weekday: 'long' }),
          events: {},
        },
      ];

      this.calendarConfig = JSON.parse(JSON.stringify(this.calendarConfig));
    }
  }

  changeCalendarWeek(value: any) {
    console.log('Week', value);
    let addValue = 7;
    if (value == 'before') addValue = -7;
    let newDate = new Date(this.calendarConfig.date?.targetDate ?? '');
    newDate.setDate(
      new Date(this.calendarConfig.date?.targetDate ?? '').getDate() + addValue
    );
    this.calendarConfig.date = {
      targetDate: newDate.toISOString(),
    };
    this.calendarConfig.monthsStyleOption!.weeks = [
      {
        date: newDate.toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {
          '16': {
            hour: '16',
            min: '0',
            durationInMin: 150,
            details: {
              title: 'OOP advanced',
              name: 'Abduo Ghazaly',
              image: '../assets/images/76250605.jpg',
              start: '2024-01-07T11:15:00.000',
              end: '2024-01-07T13:45:00.000',
              bgColor: '#f74040',
              color: '#fff',
              borderRadius: '12px',
            },
            btnStyle: {
              img: '../assets/images/video.svg',
              title: 'Exit',
              width: '90px',
              id: '56a4sd6asd216a5sd85a1sd',
            },
          },
        },
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {
          '05': {
            hour: '5',
            min: '00',
            durationInMin: 150,
            details: {
              title: 'OOP advanced',
              name: 'Abduo Ghazaly',
              image: '../assets/images/76250605.jpg',
              start: '2024-01-07T11:15:00.000Z',
              end: '2024-01-07T12:45:00.000Z',
              bgColor: '#f74040',
              color: '#fff',
              borderRadius: '12px',
            },
            btnStyle: {
              img: '../assets/images/video.svg',
              title: 'Exit',
              width: '90px',
              id: '56a4sd6asd216a5sd85a1sd',
            },
          },
          '16': {
            hour: '11',
            min: '30',
            durationInMin: 190,
            details: {
              title: 'OOP advanced',
              name: 'Abduo Ghazaly',
              image: '../assets/images/76250605.jpg',
              start: '2024-01-07T11:15:00.000Z',
              end: '2024-01-07T12:45:00.000Z',
              bgColor: '#b380fb',
              color: '#fff',
              borderRadius: '12px',
            },
            btnStyle: {
              img: '../assets/images/video.svg',
              title: 'Join',
              width: '90px',
              id: '56a4sd6asd216a5sd85a1sd',
            },
          },
        },
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {},
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {},
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {},
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {},
      },
      {
        date: new Date(newDate.setDate(newDate.getDate() + 1)).toISOString(),
        title: newDate.toLocaleString('en-us', { weekday: 'long' }),
        events: {},
      },
    ];

    this.calendarConfig = JSON.parse(JSON.stringify(this.calendarConfig));
  }

  calenderEventClicked(value: any) {
    console.log('event click', value);
  }
}
