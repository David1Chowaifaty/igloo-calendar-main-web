const STORAGE_KEY = 'ir_calendar_system'; // sibling naming convention to the existing 'ir_language' key
/**
 * Locales whose users conventionally expect the Hijri calendar by default. This is a curated
 * allowlist, not a query of the device's actual OS calendar setting — there is no standard web
 * API that exposes "OS calendar mode". `Intl.DateTimeFormat(locale).resolvedOptions().calendar`
 * only reflects Hijri when the locale tag itself carries a `-u-ca-islamic*` extension (e.g. the
 * OS set `navigator.language` to `ar-SA-u-ca-islamic-umalqura`), which most browsers/OSes do not
 * do by default even when the OS calendar app is set to Hijri. Extend this list deliberately;
 * do not replace it with a bare `resolvedOptions().calendar` read and assume it is more reliable
 * than it actually is.
 */
const HIJRI_DEFAULT_LOCALES = new Set(['ar-sa']);
/**
 * Detects the calendar system implied by the browser's language/locale settings.
 * Checks for an explicit `-u-ca-islamic*` extension first (the one case where the platform
 * really does tell us), then falls back to the curated locale allowlist above.
 */
export function detectDeviceCalendar() {
    try {
        const lang = navigator.language || 'en';
        const resolved = new Intl.DateTimeFormat(lang).resolvedOptions();
        if (resolved.calendar === 'islamic' || resolved.calendar === 'islamic-umalqura') {
            return 'islamic-umalqura';
        }
        if (HIJRI_DEFAULT_LOCALES.has(lang.toLowerCase())) {
            return 'islamic-umalqura';
        }
        return 'gregory';
    }
    catch {
        return 'gregory';
    }
}
/** Reads the persisted manual override, or `null` if none is set / storage is unavailable. */
export function readStoredOverride() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw === 'gregory' || raw === 'islamic-umalqura' ? raw : null;
    }
    catch {
        return null;
    }
}
/** Persists (or clears, on `null`) the manual override. Never throws. */
export function persistOverride(value) {
    try {
        if (value === null) {
            localStorage.removeItem(STORAGE_KEY);
        }
        else {
            localStorage.setItem(STORAGE_KEY, value);
        }
    }
    catch {
        // localStorage unavailable (private mode, disabled cookies, etc.) — override just won't persist.
    }
}
/** Resolution order: manual override wins; else device auto-detect; else Gregorian. */
export function resolveCalendarSystem() {
    return readStoredOverride() ?? detectDeviceCalendar();
}
export { STORAGE_KEY as CALENDAR_STORAGE_KEY };
