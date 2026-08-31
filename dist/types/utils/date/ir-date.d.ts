import { Moment } from 'moment';
import { CalendarSystem, FormatDateOptions } from './types';
/** Formats a single date. Accepts an ISO string, native `Date`, or `moment.Moment`. */
export declare function formatDate(value: string | Date | Moment | null | undefined, options?: FormatDateOptions): string;
/** Convenience for the from–to span pattern used by `ir-date-view` and similar components. */
export declare function formatDateRange(from: string | Date | Moment | null | undefined, to: string | Date | Moment | null | undefined, options?: FormatDateOptions): string;
/**
 * The resolved calendar's weekday abbreviations, Sunday-first — matching the default order of
 * the existing `getAbbreviatedWeekdays()` in `ir-custom-date-range/utils.ts`. Used for grid
 * headers.
 */
export declare function getWeekdayLabels(options?: {
    style?: 'abbreviated' | 'narrow';
    calendar?: CalendarSystem;
    locale?: string;
}): string[];
/** Month name (+ year), respecting the resolved calendar — used for header/month-grid labels. */
export declare function getMonthLabel(value: string | Date | Moment | null | undefined, options?: {
    style?: 'long' | 'short';
    calendar?: CalendarSystem;
    locale?: string;
}): string;
