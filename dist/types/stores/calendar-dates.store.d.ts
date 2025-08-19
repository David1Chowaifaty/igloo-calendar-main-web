import { DayData } from "../models/DayType";
import { Task } from "../models/housekeeping";
export interface ICalendarDates {
    days: DayData[];
    disabled_cells: Map<string, {
        disabled: boolean;
        reason: 'inventory' | 'stop_sale';
    }>;
    months: {
        daysCount: number;
        monthName: string;
    }[];
    fromDate: string;
    toDate: string;
    cleaningTasks: Map<number, Map<string, Task>>;
}
export declare const calendar_dates: ICalendarDates, onCalendarDatesChange: import("@stencil/store/dist/types").OnChangeHandler<ICalendarDates>;
export default calendar_dates;
export declare function addCleaningTasks(tasks: Task[]): void;
export declare function cleanRoom(task: Task): void;
export declare function addRoomForCleaning(task: Task): void;
