import { CalendarSystem } from './types';
declare const STORAGE_KEY = "ir_calendar_system";
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
export { STORAGE_KEY as CALENDAR_STORAGE_KEY };
