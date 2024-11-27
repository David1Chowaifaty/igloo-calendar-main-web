import { CalendarDataDetails } from "../models/calendarData";
type CalendarStore = CalendarDataDetails & {
    roomHistory: Record<string, boolean>;
};
export declare const calendar_data: CalendarStore, onCalendarDatesChange: import("@stencil/store/dist/types").OnChangeHandler<CalendarStore>;
export declare function isSingleUnit(id: number): boolean;
export default calendar_data;
