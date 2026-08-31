import { CalendarSystem } from './types';
export type CalendarChangeListener = (system: CalendarSystem) => void;
/**
 * Owns the calendar-preference store's lifecycle: resolves the initial value, reacts to
 * cross-tab storage changes, and exposes `setOverride` as the integration point for a future
 * settings UI. Deliberately parallel to `LanguageObserver` (not folded into it) — its trigger
 * is storage events + explicit calls, not a `<html lang>` `MutationObserver`.
 *
 * Call `init()` once, from `src/global/app.ts`.
 */
export declare class CalendarPreferenceController {
    private static listeners;
    private static initialized;
    static init(): void;
    /** Sets (or clears, on `null`) the persisted manual override and re-resolves immediately. */
    static setOverride(value: CalendarSystem | null): void;
    /** Secondary escape hatch for non-component `.ts` code that needs push notification rather than a store read. */
    static subscribe(listener: CalendarChangeListener): () => void;
    private static refresh;
    private static readOverrideFromStore;
    /**
     * QA/manual-verification hook: `?calendar=islamic-umalqura` or `?calendar=gregory` in the URL
     * sets the persisted override once, on load. No settings UI exists yet — this is the stand-in.
     */
    private static applyUrlOverrideIfPresent;
}
