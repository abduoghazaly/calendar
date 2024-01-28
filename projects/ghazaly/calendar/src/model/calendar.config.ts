import { CalendarStyle } from './enum';

export interface CalendarConfig {
  showStyle: CalendarStyle;
  date?: {
    targetDay?: number;
    targetYear?: number;
    targetMonth?: number;
    targetDate?: string;
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
    timeFrameStyle?: {
      widthRatio?: number;
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
