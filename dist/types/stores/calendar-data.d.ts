import { Property } from "../models/booking.dto";
import { CalendarDataDetails } from "../models/calendarData";
type CalendarStore = CalendarDataDetails & {
    roomHistory: Record<string, boolean>;
    property: Property;
    housekeeping_enabled: boolean;
    checkin_enabled: boolean;
    checkin_checkout_hours: {
        hour: number;
        minute: number;
        offset: number;
    };
    colorsForegrounds: Record<string, {
        foreground: string;
        stripe: string;
    }>;
};
export declare const calendar_data: CalendarStore, onCalendarDatesChange: import("@stencil/store/dist/types").OnChangeHandler<CalendarStore>;
export declare function isSingleUnit(id: number): boolean;
export default calendar_data;
