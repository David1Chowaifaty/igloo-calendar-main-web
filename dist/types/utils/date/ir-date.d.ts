import { CalendarSystem, DateInput, FormatDateOptions, NumberingSystemPreference } from './types';
/**
 * Resolution order: an explicit per-call override, then the language the locale store was loaded
 * with, then `<html lang>`, then English. Exported because `@/utils/number` resolves the same
 * display locale and digit-script preference — they are one user-facing setting, not two.
 */
export declare function resolveLocale(options?: Pick<FormatDateOptions, 'locale'>): string;
export declare function resolveNumberingSystem(options?: Pick<FormatDateOptions, 'numberingSystem'>): NumberingSystemPreference;
/**
 * Formats a date with a moment format string, in the active language and calendar system.
 *
 * @param value ISO string, native `Date`, or `moment.Moment`. Empty/unparseable → `''`.
 * @param format Any moment format string, e.g. `'ddd, DD MMM YYYY'`.
 */
export declare function formatDate(value: DateInput, format: string, options?: FormatDateOptions): string;
/** Formats a date with one of the named {@link DateStyle} presets. Defaults to `'medium'`. */
export declare function formatDate(value: DateInput, options?: FormatDateOptions): string;
/** Convenience for the from–to span pattern used by `ir-date-view` and similar components. */
export declare function formatDateRange(from: DateInput, to: DateInput, format: string, options?: FormatDateOptions): string;
export declare function formatDateRange(from: DateInput, to: DateInput, options?: FormatDateOptions): string;
/**
 * Formats the time portion only, honouring the platform's 12h/24h preference by default.
 * Time-of-day is calendar-independent, so this is unaffected by the Hijri preference.
 */
export declare function formatTime(value: DateInput, options?: FormatDateOptions & {
    format?: string;
}): string;
/** Date and time together. `format` defaults to the `'medium'` style plus a short time. */
export declare function formatDateTime(value: DateInput, format?: string, options?: FormatDateOptions): string;
/**
 * The API/persistence boundary: always Gregorian, always Latin digits, always `YYYY-MM-DD`,
 * regardless of the active language or calendar preference. Use this for request payloads,
 * `data-date` attributes, calendar cell keys and anything persisted.
 */
export declare function toApiDate(value: DateInput): string;
/** As {@link toApiDate}, including the time component. */
export declare function toApiDateTime(value: DateInput): string;
/**
 * Weekday abbreviations, Sunday-first. Day-of-week is a property of the week, not of the
 * calendar system, so this deliberately has no Hijri branch — only the names are localized.
 * Grid column order is Sunday-first everywhere; see {@link getFirstDayOfWeek}.
 */
export declare function getWeekdayLabels(options?: {
    style?: 'abbreviated' | 'narrow';
    calendar?: CalendarSystem;
    locale?: string;
    numberingSystem?: NumberingSystemPreference;
}): string[];
/** Month name (+ year), respecting the resolved calendar — used for header/month-grid labels. */
export declare function getMonthLabel(value: DateInput, options?: {
    style?: 'long' | 'short';
    calendar?: CalendarSystem;
    locale?: string;
}): string;
/**
 * The locale's conventional first day of the week (0 = Sunday … 6 = Saturday; Arabic reports 6).
 * Exposed for callers that want it — the calendar grids deliberately stay Sunday-first, so
 * changing their column order is an opt-in change, not a side effect of switching language.
 */
export declare function getFirstDayOfWeek(locale?: string): number;
