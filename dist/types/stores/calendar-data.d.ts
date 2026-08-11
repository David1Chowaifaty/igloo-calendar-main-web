import { Property } from "../models/booking.dto";
import { CalendarDataDetails } from "../models/calendarData";
import { HKIssue } from "../models/housekeeping";
type CalendarStore = CalendarDataDetails & {
    roomHistory: Record<string, boolean>;
    property: Property;
    unitIssues: Map<HKIssue['unit']['id'], HKIssue[]> | null;
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
        checkout: string;
    }>;
};
export declare const calendar_data: CalendarStore, onCalendarDatesChange: import("@stencil/store/dist/types").OnChangeHandler<CalendarStore>;
export declare function isSingleUnit(id: number): boolean;
export declare function isOptimReadOnly(): boolean;
export declare function hasOptim(): import("@/models/booking.dto").LinkedPms;
export declare function getExtraServiceDefaultPrice(serviceKey: string): string;
export declare function getDayUseBlockState(): '0' | '1' | undefined;
export default calendar_data;
