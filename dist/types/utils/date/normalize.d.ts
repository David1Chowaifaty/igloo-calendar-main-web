import { Moment } from 'moment';
/**
 * Normalizes any accepted date input to a native `Date`, or `null` for empty/unparseable input.
 *
 * The `YYYY-MM-DD` fast path builds the `Date` directly instead of going through moment's
 * parser. That form dominates this codebase (API payloads, `data-date` attributes, calendar cell
 * keys), and moment's strict parse costs ~6µs against ~0.1µs here — with thousands of cells
 * formatted per calendar render, it was a quarter of the whole formatting budget.
 *
 * `new Date(y, m - 1, d)` yields local midnight, exactly matching what
 * `moment(value, 'YYYY-MM-DD')` produced, so the fast path is not a behaviour change. Anything
 * that is not a plain date still falls through to moment: strict ISO-8601, then the loose
 * parser, so canonical dates never reach the slow/ambiguous path.
 *
 * This exists only to feed the formatter a native `Date` — it is not a general-purpose moment
 * replacement, and nothing outside `src/utils/date/` should depend on it.
 */
export declare function toDate(value: string | Date | Moment | null | undefined): Date | null;
