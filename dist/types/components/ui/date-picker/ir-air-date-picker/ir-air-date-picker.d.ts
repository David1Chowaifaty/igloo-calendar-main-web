import { EventEmitter } from '../../../../stencil-public-runtime';
import { Moment } from 'moment';
/**
 * `ir-air-date-picker` — a headless Stencil wrapper around the `air-datepicker` library.
 *
 * The component renders nothing itself (`render()` returns `null`); on `componentDidLoad`
 * it instantiates an inline `AirDatepicker` calendar directly into the host element and
 * keeps it in sync with the `date` / `dates` / `minDate` / `maxDate` props via watchers.
 *
 * Design notes:
 * - All prop-driven picker mutations use `{ silent: true }` so they never re-trigger
 *   `onSelect` → `dateChanged`, preventing parent ↔ child feedback loops.
 * - All date inputs (`string | Moment`) are normalized through {@link toMoment} before
 *   touching the picker, and value-compared (`isSameDates`) so re-renders of the parent
 *   with equal values are no-ops.
 * - The primary consumer is `ir-date-select`, which hosts this component inside its popup
 *   and forwards its own props one-to-one.
 */
export declare class IrAirDatePicker {
    /** Host element; AirDatepicker mounts its calendar DOM inside it (`inline: true`). */
    el: HTMLElement;
    /** Not wired to the picker. Accepted only for API parity with `ir-date-select`, which forwards all of its props. */
    withClear: boolean;
    /** Not wired to the picker (this component renders no input). Forwarded by `ir-date-select` for API parity. */
    placeholder: string;
    /** Not wired to the picker (this component renders no input). Forwarded by `ir-date-select` for API parity. */
    label: string;
    /**
     * Pre-selected dates for multi-select/range mode. Takes precedence over `date`
     * at initialization, and is re-applied through the `dates` watcher on change.
     */
    dates: (string | Moment)[];
    /**
     * Not wired to the picker: the calendar is always created with `inline: true`
     * (visibility is controlled by the parent `ir-date-select` popup).
     */
    inline: boolean;
    /**
     * The selected date (single-select mode). Mutable: the component writes the latest
     * selection back into it from `onSelect`, and the parent can set it to move the
     * calendar selection programmatically (applied silently, no `dateChanged` emitted).
     */
    date: string | Moment | null;
    /** `true` for unlimited multi-select, or a number for a fixed max. Passed to AirDatepicker at init only. */
    multipleDates: boolean | number;
    /** Enables range selection (start + end). Passed to AirDatepicker at init only. */
    range: boolean;
    /** Display format for the picker (AirDatepicker format tokens, not moment tokens). Passed at init only. */
    dateFormat: string;
    /** Enables the timepicker. Also switches `isSameDates` comparisons from day precision to minute precision. */
    timepicker: boolean;
    /** Earliest selectable date. Reactive: changes call `datePicker.update()` while preserving the current selection. */
    minDate?: string | Moment;
    /** Latest selectable date. Reactive: changes call `datePicker.update()` while preserving the current selection. */
    maxDate?: string | Moment;
    /** Not wired to the picker. Forwarded by `ir-date-select` (which handles disabling interaction itself). */
    disabled: boolean;
    /** Passed to AirDatepicker at init only. Has no visual effect on an inline calendar; the parent popup handles closing. */
    autoClose: boolean;
    /** Shows days from the previous/next month in the current view. Passed at init only. */
    showOtherMonths: boolean;
    /** Allows selecting the previous/next-month days shown in the current view. Passed at init only. */
    selectOtherMonths: boolean;
    /** Not wired to the picker. Forwarded by `ir-date-select` (trigger rendering is the parent's concern). */
    customPicker: boolean;
    /** Optional element AirDatepicker appends its calendar to (for positioning/styling). Defaults to the host. */
    container?: HTMLElement;
    /**
     * If `true`, a `date` prop change destroys and rebuilds the AirDatepicker instance
     * instead of calling `selectDate`. Use only when the picker must fully re-initialize;
     * rebuilding on every change is expensive.
     */
    forceDestroyOnUpdate: boolean;
    /**
     * If `true`, emits `dateChanged` with null values when the selection is cleared.
     * Otherwise clear-events are swallowed.
     */
    emitEmptyDate: boolean;
    /** Not wired to the picker. Forwarded by `ir-date-select` for API parity. */
    triggerContainerStyle: string;
    /**
     * Emitted when the user picks a date in the calendar (never for silent, prop-driven updates).
     * `start`/`end` are equal in single-select mode; `dates` holds every selected date as `YYYY-MM-DD`.
     */
    dateChanged: EventEmitter<{
        start: Moment | null;
        end: Moment | null;
        dates: string | string[];
    }>;
    /** Emitted when the AirDatepicker reports `onShow`. */
    datePickerFocus: EventEmitter<void>;
    /** Emitted when the AirDatepicker reports `onHide`. */
    datePickerBlur: EventEmitter<void>;
    /**
     * The current selection, normalized to a Moment. Used as the comparison baseline so
     * prop updates that match the existing selection don't touch the picker.
     * Deliberately a plain field, not `@State`: this component renders `null`, so
     * state-driven re-renders would be pure overhead.
     */
    private currentDate;
    /** The AirDatepicker instance. `undefined` until `componentDidLoad` and after disconnect. */
    private datePicker?;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /** Applies external `date` changes to the calendar, skipping same-day (or same-minute) no-ops. */
    datePropChanged(newDate: string | Moment | null, oldDate: string | Moment | null): void;
    minDatePropChanged(newVal: string | Moment, oldVal: string | Moment): void;
    maxDatePropChanged(newVal: string | Moment, oldVal: string | Moment): void;
    /** Applies external `dates` (multi/range) changes, skipping value-equal lists. */
    datesPropChanged(newDates?: (string | Moment)[], oldDates?: (string | Moment)[]): void;
    /** Clears the calendar selection. Not silent: fires `onSelect` with an empty value (see `emitEmptyDate`). */
    clearDatePicker(): Promise<void>;
    /**
     * Force-resyncs the calendar to the given (or current) value, bypassing the equality
     * checks the watchers perform. Escape hatch for parents whose prop value didn't change
     * but whose picker drifted (e.g. after a silent internal clear). Always silent.
     */
    syncSelection(options?: {
        date?: string | Moment | null;
        dates?: (string | Moment)[] | null;
    }): Promise<void>;
    /**
     * Normalizes any accepted date input to a valid Moment, or `null`.
     * Parse order: strict `YYYY-MM-DD` → strict ISO-8601 → loose fallback,
     * so canonical app dates never hit moment's slow/ambiguous loose parser.
     */
    private toMoment;
    /** Normalizes a list of date inputs, dropping unparseable entries. */
    private toMoments;
    /**
     * Value-equality for two date inputs at day precision (minute precision when
     * `timepicker` is on). Unparseable values are never equal to anything.
     */
    private isSameDates;
    /** Order-sensitive value-equality for two date lists (empty and missing lists are equal). */
    private areDateListsEqual;
    /**
     * Pushes a single-date value into the calendar without emitting `dateChanged`.
     * Clears on `null`/unparseable input; otherwise selects the day (or rebuilds the
     * whole instance when `forceDestroyOnUpdate` is set).
     */
    private updatePickerDate;
    /** Replaces the calendar's multi/range selection without emitting `dateChanged`. */
    private updatePickerDates;
    /**
     * Unconditional single-date resync used by `syncSelection`: clears, re-selects, and
     * writes back `currentDate`/`date`. Before the picker exists it just stores the value
     * so `initializeDatepicker` picks it up.
     */
    private forceSyncPickerDate;
    /** Unconditional multi/range resync used by `syncSelection`. Mirrors `forceSyncPickerDate`. */
    private forceSyncPickerDates;
    /**
     * AirDatepicker `onSelect` handler — the only path that emits `dateChanged`.
     * Writes the selection back into `currentDate`/`date` so the watchers treat the
     * parent's echoed prop update as a no-op.
     */
    private handleDateSelect;
    /**
     * Creates the inline AirDatepicker on the host element (idempotent), seeding the
     * selection from `dates` (preferred) or `currentDate`, then applies the Web Awesome
     * theme via CSS custom properties on the generated calendar element.
     */
    private initializeDatepicker;
    /** Headless: the calendar DOM is injected by AirDatepicker, not Stencil. */
    render(): any;
}
