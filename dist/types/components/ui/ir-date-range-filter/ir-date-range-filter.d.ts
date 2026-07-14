import { EventEmitter } from '../../../stencil-public-runtime';
import { Moment } from 'moment';
/** The current from/to selection, as Moments (null = unset side). */
export interface DateRange {
    from: Moment | null;
    to: Moment | null;
}
/**
 * A quick-date preset button definition. `getDate` is evaluated lazily
 * (at render time for the disabled check, and again on click) so presets
 * like "Today" stay correct in long-lived pages.
 */
export interface QuickDatePreset {
    label: string;
    getDate: () => Moment;
}
/**
 * `ir-date-range-filter` — a from/to date-range field for filter toolbars.
 *
 * Composition: each side renders a text button (shows the value, opens the popup),
 * an optional clear button, and an `ir-date-select` whose popup hosts the calendar
 * plus optional quick-date preset buttons.
 *
 * State model: the component is *optionally controlled*. If `fromDate`/`toDate` are
 * provided they seed and (via watchers) overwrite the internal `dates` state; either
 * side can be controlled independently. Internal selections always update local state
 * and emit `datesChanged` — a controlling parent is expected to echo the value back.
 *
 * Range integrity is enforced two ways:
 * - the from-calendar's max is capped at the to-date and the to-calendar's min is
 *   floored at the from-date (see {@link getFromMaxDate}/{@link getToMinDate}),
 * - quick-date presets that would invert the range are disabled.
 *
 * Styling: all inner pieces are exposed as CSS parts; the parts of each inner
 * `ir-date-select` are re-exported with `from-`/`to-` prefixes (e.g. `from-body`).
 */
export declare class IrDateRangeFilter {
    /** Configurable quick-date preset buttons shown alongside each calendar. */
    quickDates: QuickDatePreset[];
    /** Controlled start date in YYYY-MM-DD format. */
    fromDate?: string;
    /** Controlled end date in YYYY-MM-DD format. */
    toDate?: string;
    /** Size variant passed through to inner form controls. Reflected for CSS hooks (`ir-date-range-filter[size='...']`). */
    size: string;
    /** Whether to show the quick-action preset buttons in each calendar popup. */
    showQuickActions: boolean;
    /**
     * How a quick-date preset behaves when picked from the *to* side:
     * - `'absolute'` (default): sets only the to-date to `preset.getDate()`, same as the from side.
     * - `'range'`: treats `preset.getDate()` as a "N units ago" anchor — sets from-date to
     *   `preset.getDate()` and to-date to today, so e.g. "7 Days Ago" becomes a "last 7 days" range.
     *   The from side is unaffected by this prop; it always sets only the from-date.
     */
    quickDatesMode: 'absolute' | 'range';
    /** Earliest selectable date in YYYY-MM-DD format. Applied to both calendars. */
    minDate?: string;
    /** Latest selectable date in YYYY-MM-DD format. Applied to both calendars. */
    maxDate?: string;
    /**
     * Flow after picking a from-date:
     * - `'auto'`: the to-picker opens automatically so the user completes the range in one pass.
     * - `'manual'` (default): nothing opens; the user clicks the to-field themselves.
     */
    selectionMode: 'auto' | 'manual';
    /** Shows an ✕ button next to each filled side that clears just that side. */
    withClear: boolean;
    /**
     * Visible label rendered above the control. It names the group for assistive
     * technology (replacing the default visually-hidden "Date range selector") and,
     * like a native form label, clicking it opens the from-date picker.
     */
    label: string;
    /** The selection rendered by the component (see the class doc for the controlled/uncontrolled rules). */
    dates: DateRange;
    /** Text for the polite live region, refreshed on every change so screen readers announce the new range. */
    liveMessage: string;
    /** Fired whenever either date changes. Payload contains ISO date strings or null. */
    datesChanged: EventEmitter<{
        from: string | null;
        to: string | null;
    }>;
    /** Fired when the user explicitly clears a date field (after the accompanying `datesChanged`). */
    dateCleared: EventEmitter<{
        field: 'from' | 'to';
    }>;
    /** Unique id linking the group wrapper to its visually-hidden label. */
    private groupId;
    private toDateSelectRef;
    private fromDateSelectRef;
    /**
     * Latched to `true` the first time the corresponding prop is supplied, so a side
     * that was ever controlled keeps following the prop on subsequent syncs.
     */
    private hasControlledFromDate;
    private hasControlledToDate;
    componentWillLoad(): void;
    onFromDateChange(newValue?: string | null): void;
    onToDateChange(newValue?: string | null): void;
    /**
     * Updates one side of the date range and emits the change. In `'auto'` selection
     * mode, picking a from-date opens the to-picker on the next frame (the popup needs
     * the click that closed the from-picker to finish propagating first). Pass
     * `skipAutoAdvance` when the caller is about to set the to-date itself right after
     * (e.g. a range-style quick action), so the to-picker doesn't pop open and then close.
     */
    private selectDate;
    /**
     * Clears one side of the range. State-only on purpose: nulling the date prop
     * cascades down to the calendar as a silent clear, whereas calling the picker's
     * `clear()` method would fire a second `dateChanged` and double-emit `datesChanged`.
     */
    private clearDate;
    /** Seeds internal state from whichever side is controlled (called once before first render). */
    private syncInitialDates;
    /**
     * Applies a controlled-prop change to internal state: the changed side takes the
     * new value; the other side re-reads its prop only if it is controlled too.
     */
    private syncControlledDates;
    /** Strict `YYYY-MM-DD` parser; anything else (including partial ISO strings) yields null. */
    private parseDate;
    /** Emits `datesChanged` and refreshes the screen-reader live region. */
    private emitChange;
    /**
     * Floors the to-picker's min date at the from-date (or the global minDate),
     * whichever is later. String comparison is safe for YYYY-MM-DD.
     */
    private getToMinDate;
    render(): any;
}
