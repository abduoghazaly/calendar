export interface CalendarConfig {
  events?: CalendarEvents[];
  data?: {
    targetDay: string;
    targetYear?: number;
    targetMonth?: string;
  };

  theme?: {
    fontFamily?: string;
    colors?: {
      primary?: string;
      secondary?: string;
    };
  };

  controlBTN?: {
    borderBottomColor?: string;
    borderBottomWidth?: string;

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
    borderBottomColor?: string;
    borderBottomWidth?: string;

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
