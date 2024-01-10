import { CalendarStyle } from './enum';

export interface CalendarConfig {
  showStyle: CalendarStyle;

  events?: CalendarEvents[];
  date?: {
    targetDay?: number;
    targetYear?: number;
    targetMonth?: number;
  };

  yearsStyleOptions?: {
    months?: CalendarMonths[];
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
    weeks?: weeks[];
    timeFrame?: timeFrame[];
    sideBarStyle?: {
      width?: string;
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
}

export interface CalendarEvents {}

export interface CalendarMonths {
  title?: string;
  subTitle?: string[];
}

export interface timeFrame {
  title?: string;
  timeFrame?: number;
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
  details?: {
    title?: string;
    image?: string;
    name?: string;
    start?: string;
    end?: string;
  };
}
