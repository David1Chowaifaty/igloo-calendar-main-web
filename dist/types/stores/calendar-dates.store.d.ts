import { DayData } from "../models/DayType";
export interface ICalendarDates {
    days: DayData[];
    disabled_cells: Map<string, boolean>;
    months: {
        daysCount: number;
        monthName: string;
    }[];
    fromDate: string;
    toDate: string;
}
export declare const calendar_dates: ICalendarDates, onCalendarDatesChange: import("@stencil/store/dist/types").OnChangeHandler<ICalendarDates>;
export default calendar_dates;
