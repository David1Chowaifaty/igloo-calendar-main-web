/**
 * Calendar-day helpers.
 *
 * Invariant: a calendar day is the API's `YYYY-MM-DD` string. Never wrap it in `Date`
 * (`new Date('YYYY-MM-DD')` parses as UTC midnight and shifts a day west of UTC), never
 * convert it to a timestamp or `D_M_YYYY`, and never emit a `Date` for a day.
 * The only day the UI produces itself is today: `todayISO()`.
 *
 * Zero-padded ISO dates compare correctly as plain strings — use `<`, `>`, `===`.
 */
export type ISODate = string;
export declare const ISO_FORMAT = "YYYY-MM-DD";
export declare const todayISO: () => ISODate;
export declare const addDaysISO: (d: ISODate, n: number) => ISODate;
export declare const addMonthsISO: (d: ISODate, n: number) => ISODate;
/** Whole nights from `from` to `to` (negative when `to` is earlier). */
export declare const nightsBetween: (from: ISODate, to: ISODate) => number;
