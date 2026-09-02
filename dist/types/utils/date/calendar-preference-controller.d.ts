import { CalendarSystem, NumberingSystemPreference } from './types';
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
    /**
     * Sets the digit script dates render in. `'auto'` follows the moment locale's own numerals
     * (Arabic-Indic under `ar`); anything else forces that script. Never affects `toApiDate` —
     * the API boundary is Latin by construction.
     */
    static setNumberingSystem(value: NumberingSystemPreference): void;
    /** Secondary escape hatch for non-component `.ts` code that needs push notification rather than a store read. */
    static subscribe(listener: CalendarChangeListener): () => void;
    private static refresh;
    private static readOverrideFromStore;
    /**
     * QA/manual-verification hook: `?calendar=islamic-umalqura|gregory` and `?numbers=arab|latn|
     * arabext|auto` in the URL set the persisted preferences once, on load. `<ir-locale-switcher>`
     * is the interactive equivalent.
     */
    private static applyUrlOverrideIfPresent;
}
