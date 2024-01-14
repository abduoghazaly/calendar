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
      targetDay: 16,
      targetMonth: 0,
      targetYear: 2024,
      targetDate: new Date('2024-01-16T00:00:00.000Z'),
    },

    yearsStyleOptions: {
      months: [
        {
          title: 'January',
          subTitle: ['3 sessions', '2 work shops'],
        },
        {
          title: 'February',
          subTitle: ['3 sessions'],
        },
        {
          title: 'March',
          subTitle: ['3 sessions'],
        },
        {
          title: 'April',
          subTitle: ['3 sessions'],
        },
        { title: 'May' },
        {
          title: 'June',
          subTitle: ['358 sessions', '2124 work shops', '999 meeting'],
        },
        { title: 'July', subTitle: [''] },
        {
          title: 'August',
          subTitle: ['4 work shops'],
        },
        {
          title: 'September',
          subTitle: ['4 work shops'],
        },
        {
          title: 'October',
          subTitle: ['3 sessions', '2 work shops', '999 meeting'],
        },
        {
          title: 'November',
          subTitle: ['3 sessions', '2 work shops', '999 meeting'],
        },
        {
          title: 'December',
          subTitle: ['999 meeting'],
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
          title: 'MY Calendar',
        },
        iconOption: {
          icon: '../assets/images/chevron-down.svg',
        },
      },
    },

    header: {
      borderTopColor: '#D9DDE0',
      borderTopWidth: '1px',
      height: '56px',
      titleOptions: {
        title: 'My Calendar',
        Width: '150px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#3D6BE5',
      },
      beforeBTN: {
        icon: '../assets/images/chevron-left.svg',
        color: '#3D6BE5',
        padding: '5px',
      },
      afterBTN: {
        icon: '../assets/images/chevron-right.svg',
        color: '#3D6BE5',
        padding: '5px',
      },
    },
    side: {
      afterBTN: {
        icon: '../assets/images/chevron-down.svg',
        padding: '0',
      },
      beforeBTN: {
        icon: '../assets/images/chevron-up.svg',
        padding: '0',
      },
    },
  };

  calendarStyleUpdate(value: any) {
    console.log('style', value);
  }

  calendarDateUpdate(value: any) {
    console.log('date', value);
  }

  changeCalendarMonth(value: any) {
    console.log('Month', value);
  }

  changeCalendarWeek(value: any) {
    console.log('Week', value);
  }

  calenderEventClicked(value: any) {
    console.log('event click', value);
  }
}
