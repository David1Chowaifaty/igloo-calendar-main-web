import { Moment } from 'moment';
/** Everything the date layer accepts as an input date. */
export type DateInput = string | Date | Moment | null | undefined;
/** Calendar system identifiers, matching the `-u-ca-` Unicode locale extension values. */
export type CalendarSystem = 'gregory' | 'islamic-umalqura';
/**
 * Named display presets, kept for call sites that want a semantic name rather than a format
 * string. Each maps to a plain moment format in `STYLE_FORMATS` (`ir-date.ts`); the comments
 * below show the English rendering.
 */
export type DateStyle = 'short' | 'medium' | 'long' | 'weekday-medium' | 'month-year' | 'day-only';
/** Currently the only supported time style; kept as a union so it can grow deliberately. */
export type TimeStyle = 'short';
/**
 * Digit scripts dates can be rendered in. `'auto'` keeps whatever the moment locale itself
 * produces (Arabic-Indic for `ar`, Latin for the Maghrebi variants); anything else forces that
 * script regardless of locale.
 *
 * The app-wide default is `'latn'` — the API boundary always uses Latin digits, and every
 * existing screen renders them, so following the locale is opt-in rather than automatic.
 */
export type NumberingSystem = 'latn' | 'arab' | 'arabext';
export type NumberingSystemPreference = NumberingSystem | 'auto';
export interface FormatDateOptions {
    /** Only consulted when no explicit moment format string is passed. Defaults to `'medium'`. */
    style?: DateStyle;
    withTime?: TimeStyle;
    /** Overrides the resolved calendar-preference store value for this call only. */
    calendar?: CalendarSystem;
    /** Overrides the resolved language for this call only. Defaults to the app's active language. */
    locale?: string;
    /** Overrides the resolved digit script for this call only. */
    numberingSystem?: NumberingSystemPreference;
}
