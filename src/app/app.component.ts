import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from '../../projects/ghazaly/calendar/src/public-api';
import { CalendarConfig } from '../../projects/ghazaly/calendar/src/model/calendar.config';
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
    data: {
      targetDay: '2024-01-04T11:37:03.820Z',
      targetMonth: 'January',
      targetYear: 2023,
    },

    theme: {
      fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
      colors: {
        primary: '#3D6BE5',
        secondary: '#B286FD',
      },
    },
    controlBTN: {
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
      borderBottomColor: '#D9DDE0',
      borderBottomWidth: '1px',
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
}
