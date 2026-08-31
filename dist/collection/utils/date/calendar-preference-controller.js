import { calendarPreference } from "../../stores/calendar-preference.store";
import { CALENDAR_STORAGE_KEY, persistOverride, resolveCalendarSystem } from "./calendar-resolution";
/**
 * Owns the calendar-preference store's lifecycle: resolves the initial value, reacts to
 * cross-tab storage changes, and exposes `setOverride` as the integration point for a future
 * settings UI. Deliberately parallel to `LanguageObserver` (not folded into it) — its trigger
 * is storage events + explicit calls, not a `<html lang>` `MutationObserver`.
 *
 * Call `init()` once, from `src/global/app.ts`.
 */
export class CalendarPreferenceController {
    static listeners = new Set();
    static initialized = false;
    static init() {
        if (this.initialized)
            return;
        this.initialized = true;
        this.applyUrlOverrideIfPresent();
        calendarPreference.override = this.readOverrideFromStore();
        this.refresh();
        window.addEventListener('storage', e => {
            if (e.key === CALENDAR_STORAGE_KEY)
                this.refresh();
        });
    }
    /** Sets (or clears, on `null`) the persisted manual override and re-resolves immediately. */
    static setOverride(value) {
        persistOverride(value);
        calendarPreference.override = value;
        this.refresh();
    }
    /** Secondary escape hatch for non-component `.ts` code that needs push notification rather than a store read. */
    static subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }
    static refresh() {
        const next = resolveCalendarSystem();
        if (next !== calendarPreference.resolved) {
            calendarPreference.resolved = next;
            this.listeners.forEach(listener => listener(next));
        }
    }
    static readOverrideFromStore() {
        try {
            const raw = localStorage.getItem(CALENDAR_STORAGE_KEY);
            return raw === 'gregory' || raw === 'islamic-umalqura' ? raw : null;
        }
        catch {
            return null;
        }
    }
    /**
     * QA/manual-verification hook: `?calendar=islamic-umalqura` or `?calendar=gregory` in the URL
     * sets the persisted override once, on load. No settings UI exists yet — this is the stand-in.
     */
    static applyUrlOverrideIfPresent() {
        try {
            const param = new URLSearchParams(window.location.search).get('calendar');
            if (param === 'gregory' || param === 'islamic-umalqura') {
                persistOverride(param);
            }
        }
        catch {
            // URLSearchParams/window.location unavailable in this environment — skip.
        }
    }
}
