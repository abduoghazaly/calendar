# Calendar TimeLine

Calendar with time line for meetings and appointments.

## Usage

**Component**

```
  <gh-calendar
    [config]="calendarConfig"
    (changeCalendarStyleEventEmitter)="calendarStyleUpdate($event)"
    (changeCalendarDateEmitter)="calendarDateUpdate($event)"
    (changeCalendarMonthEmitter)="changeCalendarMonth($event)"
    (changeCalendarWeekEmitter)="changeCalendarWeek($event)"
    (calenderEventClickedEmitter)="calenderEventClicked($event)"
  >
  </gh-calendar>

```

**Module**

```
@Component({
...
  imports: [CalendarComponent , ...],
})

```

**Config**

```
export interface CalendarConfig {
  showStyle: CalendarStyle; // view style [ Years,Weeks ]
  date?: {
    targetDay?: number;
    targetYear?: number;
    targetMonth?: number;
    targetDate?: Date; // must be first day of the week
  };

  yearsStyleOptions?: {
    months?: CalendarMonths[]; // length must be 12
    monthsStyle?: {
      border?: string;
      borderRadius?: string;
    };
    monthsTitleStyle?: {
      color?: string;
      fontSize?: string;
      fontStyle?: string;
      fontWeight?: string;
    };
    monthsSubTitleStyle?: {
      color?: string;
      fontSize?: string;
      fontStyle?: string;
      fontWeight?: string;
    };
  };
  monthsStyleOption?: {
    weeks?: weeks[]; // length must be 7
    timeFrame?: timeFrame[]; must be every hour
    sideBarStyle?: {
      width?: string;
    };
    timeFrameStyle?: {
      widthRatio?: number; // expands the timeline width
    };
  };

  theme?: {
    fontFamily?: string;
    colors?: {
      primary?: string;
      secondary?: string;
    };
  };

  controlBTN?: {
    showControlBTN?: boolean;
    btn?: {
      width?: string;
      padding?: string;
      borderRadius?: string;
      backgroundColor?: string;
      titleOption?: {
        title?: string;
        color?: string;
        fontSize?: string;
        fontWeight?: string;
      };
      iconOption?: {
        icon?: string;
        padding?: string; // '5px 0 0 10px'
      };
    };
  };

  header?: {
    borderTopColor?: string;
    borderTopWidth?: string;

    height?: string;
    titleOptions?: {
      title?: string;
      Width?: string;
      fontSize?: string;
      fontWeight?: string;
      color?: string;
    };
    beforeBTN?: {
      icon?: string;
      color?: string;
      padding?: string;
    };
    afterBTN?: {
      icon?: string;
      color?: string;
      padding?: string;
    };
  };
  side?: {
    beforeBTN?: {
      icon?: string;
      padding?: string;
    };
    afterBTN?: {
      icon?: string;
      padding?: string;
    };
  };
}

export interface CalendarMonths {
  title?: string;
  subTitle?: string[];
}

export interface timeFrame {
  title?: string;
  hour?: string;
}
export interface weeks {
  title?: string;
  date?: string;
  events?: { [key: string]: weeksEvent };
}

export interface weeksEvent {
  hour?: string;
  min?: string;
  durationInMin?: number;
  isShowDetails?: boolean;
  details?: {
    title?: string;
    image?: string;
    name?: string;
    start?: string;
    end?: string;
    bgColor?: string;
    color?: string;
    borderRadius?: string;
    detailsColor?: string;
    fontSize?: string;
    fontWeight?: string;
  };
  btnStyle?: {
    img?: string;
    title?: string;
    width?: string;
    id?: string;
  };
}

```

## Note

this lib for specific use by default style.

if you interst Pm me XD.

## Authors

- [@Abduo Ghazaly](https://github.com/abduoghazaly)
