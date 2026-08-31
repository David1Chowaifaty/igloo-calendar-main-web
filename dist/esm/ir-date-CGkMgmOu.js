import { e as calendarPreference } from './index-C63jMJYk.js';
import { h as hooks } from './moment-Mki5YqAR.js';

/**
 * Tracks `<html lang>` with a single shared `MutationObserver` and fans changes out
 * to every subscriber, instead of each component wiring up its own observer.
 *
 * Usage inside a Stencil component:
 *   componentDidLoad() {
 *     this.unsubscribeLang = LanguageObserver.subscribe(lang => this.handleLangChange(lang));
 *   }
 *   disconnectedCallback() {
 *     this.unsubscribeLang?.();
 *   }
 */
class LanguageObserver {
    static observer;
    static listeners = new Set();
    /** Current `<html lang>` value, or `'en'` if unset. */
    static getLang() {
        return document.documentElement.lang || 'en';
    }
    /** Subscribes to `<html lang>` changes. Returns an unsubscribe function. */
    static subscribe(listener) {
        this.listeners.add(listener);
        this.ensureObserver();
        return () => this.unsubscribe(listener);
    }
    static unsubscribe(listener) {
        this.listeners.delete(listener);
        if (this.listeners.size === 0) {
            this.observer?.disconnect();
            this.observer = undefined;
        }
    }
    static ensureObserver() {
        if (this.observer || typeof MutationObserver === 'undefined')
            return;
        this.observer = new MutationObserver(() => {
            const lang = this.getLang();
            this.listeners.forEach(listener => listener(lang));
        });
        this.observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }
}

/**
 * Normalizes any accepted date input to a native `Date`, or `null` for empty/unparseable input.
 * Parse order mirrors `ir-air-date-picker.tsx`'s `toMoment()`: strict `YYYY-MM-DD` → strict
 * ISO-8601 → loose fallback, so canonical app dates never hit moment's slow/ambiguous loose parser.
 *
 * This exists only to feed the Intl formatter in `ir-date.ts` a native `Date` — it is not a
 * general-purpose moment replacement, and nothing outside `src/utils/date/` should depend on it.
 */
function toDate(value) {
    if (!value)
        return null;
    if (value instanceof Date)
        return isNaN(value.getTime()) ? null : value;
    if (hooks.isMoment(value))
        return value.isValid() ? value.toDate() : null;
    const strict = hooks(value, 'YYYY-MM-DD', true);
    if (strict.isValid())
        return strict.toDate();
    const iso = hooks(value, hooks.ISO_8601, true);
    if (iso.isValid())
        return iso.toDate();
    const loose = hooks(value);
    return loose.isValid() ? loose.toDate() : null;
}

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
function formatDate(value, options) {
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
function getWeekdayLabels(options) {
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
function getMonthLabel(value, options) {
    const date = toDate(value);
    if (!date)
        return '';
    return buildFormatter(options?.locale ?? LanguageObserver.getLang(), options?.calendar ?? calendarPreference.resolved, 'latn', {
        month: options?.style ?? 'long',
        year: 'numeric',
    }).format(date);
}

export { LanguageObserver as L, getWeekdayLabels as a, formatDate as f, getMonthLabel as g, toDate as t };
