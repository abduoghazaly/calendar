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
      targetDay: 1,
      targetMonth: 0,
      targetYear: 2023,
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
        { title: '00:00', timeFrame: 60 },
        { title: '01:00', timeFrame: 60 },
        { title: '02:00', timeFrame: 60 },
        { title: '03:00', timeFrame: 60 },
        { title: '04:00', timeFrame: 60 },
        { title: '05:00', timeFrame: 60 },
        { title: '06:00', timeFrame: 60 },
        { title: '07:00', timeFrame: 60 },
        { title: '08:00', timeFrame: 60 },
        { title: '09:00', timeFrame: 60 },
        { title: '10:00', timeFrame: 60 },
        { title: '11:00', timeFrame: 60 },
        { title: '12:00', timeFrame: 60 },
        { title: '13:00', timeFrame: 60 },
        { title: '14:00', timeFrame: 60 },
        { title: '15:00', timeFrame: 60 },
        { title: '16:00', timeFrame: 60 },
        { title: '17:00', timeFrame: 60 },
        { title: '18:00', timeFrame: 60 },
        { title: '19:00', timeFrame: 60 },
        { title: '20:00', timeFrame: 60 },
        { title: '21:00', timeFrame: 60 },
        { title: '22:00', timeFrame: 60 },
        { title: '23:00', timeFrame: 60 },
      ],
      weeks: [
        { date: '2024-01-07T00:00:00.000Z', title: 'Saturday', events: {} },
        { date: '2024-01-08T00:00:00.000Z', title: 'Sunday', events: {} },
        { date: '2024-01-09T00:00:00.000Z', title: 'Monday', events: {} },
        { date: '2024-01-10T00:00:00.000Z', title: 'Tuesday', events: {} },
        { date: '2024-01-11T00:00:00.000Z', title: 'Wednesday', events: {} },
        { date: '2024-01-12T00:00:00.000Z', title: 'Thursday', events: {} },
        { date: '2024-01-13T00:00:00.000Z', title: 'Friday', events: {} },
      ],
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
  };

  calendarStyleUpdate(value: any) {
    console.log('style', value);
  }
  calendarDateUpdate(value: any) {
    console.log('date', value);
  }
}
