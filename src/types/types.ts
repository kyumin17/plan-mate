export interface TimeProps {
  hour: number;
  minute: number;
}

export interface DateProps {
  year: number;
  month: number;
  date: number;
  time: TimeProps;
};

export interface ScheduleProps {
  id: number;
  name: string;
  date: string;
  start_hour: number;
  start_minute: number;
  end_hour: number;
  end_minute: number;
  location?: string;
  color: string;
};

export interface TimeblockProps {
  id: number;
  name: string;
  day: number;
  start_hour: number;
  start_minute: number;
  end_hour: number;
  end_minute: number;
  location?: string;
  color: string;
};

export interface CalendarProps {
  id: number;
  name: string;
  start_date: DateProps;
  end_date: DateProps;
  color: string;
  location?: string;
};

export interface TimeManageProps {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  setStartHour: any;
  setStartMinute: any;
  setEndHour: any;
  setEndMinute: any;
};