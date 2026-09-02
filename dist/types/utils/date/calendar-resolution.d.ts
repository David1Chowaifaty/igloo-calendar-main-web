import { CalendarSystem, NumberingSystemPreference } from './types';
declare const STORAGE_KEY = "ir_calendar_system";
declare const NUMBERING_STORAGE_KEY = "ir_numbering_system";
/** Narrows arbitrary input (localStorage, URL param) to a valid preference, or `null`. */
export declare function parseNumberingSystem(raw: string | null | undefined): NumberingSystemPreference | null;
/** Reads the persisted digit-script preference, or `null` if unset / storage unavailable. */
export declare function readStoredNumberingSystem(): NumberingSystemPreference | null;
/** Persists (or clears, on `null`) the digit-script preference. Never throws. */
export declare function persistNumberingSystem(value: NumberingSystemPreference | null): void;
/**
 * Detects the calendar system implied by the browser's language/locale settings.
 * Checks for an explicit `-u-ca-islamic*` extension first (the one case where the platform
 * really does tell us), then falls back to the curated locale allowlist above.
 */
export declare function detectDeviceCalendar(): CalendarSystem;
/** Reads the persisted manual override, or `null` if none is set / storage is unavailable. */
export declare function readStoredOverride(): CalendarSystem | null;
/** Persists (or clears, on `null`) the manual override. Never throws. */
export declare function persistOverride(value: CalendarSystem | null): void;
/** Resolution order: manual override wins; else device auto-detect; else Gregorian. */
export declare function resolveCalendarSystem(): CalendarSystem;
export { STORAGE_KEY as CALENDAR_STORAGE_KEY, NUMBERING_STORAGE_KEY };
