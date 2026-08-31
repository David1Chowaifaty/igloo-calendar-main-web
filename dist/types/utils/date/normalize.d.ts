import { Moment } from 'moment';
/**
 * Normalizes any accepted date input to a native `Date`, or `null` for empty/unparseable input.
 * Parse order mirrors `ir-air-date-picker.tsx`'s `toMoment()`: strict `YYYY-MM-DD` → strict
 * ISO-8601 → loose fallback, so canonical app dates never hit moment's slow/ambiguous loose parser.
 *
 * This exists only to feed the Intl formatter in `ir-date.ts` a native `Date` — it is not a
 * general-purpose moment replacement, and nothing outside `src/utils/date/` should depend on it.
 */
export declare function toDate(value: string | Date | Moment | null | undefined): Date | null;
