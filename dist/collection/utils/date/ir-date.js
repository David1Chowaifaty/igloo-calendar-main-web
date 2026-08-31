import { calendarPreference } from "../../stores/calendar-preference.store";
import { LanguageObserver } from "../language-observer";
import { toDate } from "./normalize";
/**
 * The one global entry point for calendar-aware date DISPLAY (Gregorian or Hijri). Never used
 * for parsing/identity — `data-date` attributes, API payloads, cell keys, and all persisted
 * values stay Gregorian ISO strings/moment objects exactly as before; this module only ever
 * produces human-facing text.
 *
 * Built entirely on native `Intl.DateTimeFormat` with the `-u-ca-islamic-umalqura` locale
 * extension — no third-party Hijri conversion library. `Intl.DateTimeFormatOptions` are
 * calendar-agnostic (the calendar is purely the `-u-ca-` extension), so one options table
 * (`STYLE_OPTIONS` below) serves both Gregorian and Hijri.
 *
 * `numberingSystem` always defaults to `'latn'`. Without it, an Arabic locale + Hijri calendar
 * would silently render Arabic-Indic digits (٢٧ instead of 27) — a surprise regression versus
 * today's moment-based Gregorian-Arabic output, which already renders Latin digits everywhere
 * in this codebase (see the explicit workaround comment in `ir-hk-staff-tasks.tsx`).
 */
const STYLE_OPTIONS = {
    'short': { year: 'numeric', month: 'numeric', day: 'numeric' },
    'medium': { year: 'numeric', month: 'short', day: 'numeric' },
    'long': { year: 'numeric', month: 'long', day: 'numeric' },
    'weekday-medium': { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' },
    'month-year': { year: 'numeric', month: 'long' },
    'day-only': { day: 'numeric' },
};
const TIME_STYLE_OPTIONS = {
    short: { hour: 'numeric', minute: '2-digit' },
};
const formatterCache = new Map();
function buildFormatter(locale, calendar, numberingSystem, intlOptions) {
    const tag = calendar === 'islamic-umalqura' ? `${locale}-u-ca-islamic-umalqura-nu-${numberingSystem}` : `${locale}-u-nu-${numberingSystem}`;
    const cacheKey = `${tag}|${JSON.stringify(intlOptions)}`;
    let formatter = formatterCache.get(cacheKey);
    if (!formatter) {
        formatter = new Intl.DateTimeFormat(tag, intlOptions);
        formatterCache.set(cacheKey, formatter);
    }
    return formatter;
}
function resolveCalendar(options) {
    return options?.calendar ?? calendarPreference.resolved;
}
function resolveLocale(options) {
    return options?.locale ?? LanguageObserver.getLang();
}
/** Formats a single date. Accepts an ISO string, native `Date`, or `moment.Moment`. */
export function formatDate(value, options) {
    const date = toDate(value);
    if (!date)
        return '';
    const style = options?.style ?? 'medium';
    const intlOptions = { ...STYLE_OPTIONS[style] };
    if (options?.withTime) {
        Object.assign(intlOptions, TIME_STYLE_OPTIONS[options.withTime]);
    }
    return buildFormatter(resolveLocale(options), resolveCalendar(options), options?.numberingSystem ?? 'latn', intlOptions).format(date);
}
/** Convenience for the from–to span pattern used by `ir-date-view` and similar components. */
export function formatDateRange(from, to, options) {
    return `${formatDate(from, options)} – ${formatDate(to, options)}`;
}
/** A fixed Sunday (UTC, day-of-week is a Gregorian/ISO concept independent of the display calendar). */
function getReferenceSunday() {
    const now = new Date();
    const utcNow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    utcNow.setUTCDate(utcNow.getUTCDate() - utcNow.getUTCDay());
    return utcNow;
}
/**
 * The resolved calendar's weekday abbreviations, Sunday-first — matching the default order of
 * the existing `getAbbreviatedWeekdays()` in `ir-custom-date-range/utils.ts`. Used for grid
 * headers.
 */
export function getWeekdayLabels(options) {
    const formatter = buildFormatter(options?.locale ?? LanguageObserver.getLang(), options?.calendar ?? calendarPreference.resolved, 'latn', {
        weekday: options?.style === 'narrow' ? 'narrow' : 'short',
    });
    const sunday = getReferenceSunday();
    return Array.from({ length: 7 }, (_, i) => {
        const d = new Date(sunday);
        d.setUTCDate(sunday.getUTCDate() + i);
        return formatter.format(d);
    });
}
/** Month name (+ year), respecting the resolved calendar — used for header/month-grid labels. */
export function getMonthLabel(value, options) {
    const date = toDate(value);
    if (!date)
        return '';
    return buildFormatter(options?.locale ?? LanguageObserver.getLang(), options?.calendar ?? calendarPreference.resolved, 'latn', {
        month: options?.style ?? 'long',
        year: 'numeric',
    }).format(date);
}
