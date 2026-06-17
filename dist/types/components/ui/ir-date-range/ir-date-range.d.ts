import { EventEmitter } from '../../../stencil-public-runtime';
import { Moment } from 'moment';
export type DateRangeChangeEvent = {
    checkIn: Moment;
    checkOut: Moment;
};
/**
 * @component ir-date-range
 * @description An accessible, popup-based date-range picker.
 * Composed of a combobox trigger (ir-input) and a floating calendar panel (ir-custom-date-range).
 *
 * @csspart popup      - The `wa-popup` root wrapper.
 * @csspart anchor     - The trigger wrapper div that holds the combobox.
 * @csspart combobox   - The clickable/keyboard-accessible control div.
 * @csspart input      - The read-only `ir-input` element that displays the selected range.
 * @csspart calendar-icon - The calendar `wa-icon` rendered inside the input start slot.
 * @csspart nights-badge  - The span showing the number of nights (booking variant only).
 * @csspart body       - The popup panel that wraps the calendar.
 * @csspart calendar   - The `ir-custom-date-range` calendar element.
 *
 * All CSS parts of `ir-custom-date-range` are re-exported and can be targeted via `::part()` on this host.
 */
export declare class IrDateRange {
    el: HTMLIrDateRangeElement;
    /**
     * Controls the visual size of the input trigger.
     * @reflect
     */
    size: 's' | 'm' | 'l';
    /**
     * Initial date values. Expects `{ fromDate: string | Date, toDate: string | Date }`.
     * Re-initializes dates whenever this prop reference changes.
     */
    defaultData: {
        [key: string]: any;
    };
    /**
     * When `true`, the picker is disabled and cannot be opened.
     * @reflect
     */
    disabled: boolean;
    /**
     * ISO date string (YYYY-MM-DD) for the earliest selectable date.
     */
    minDate: string;
    /**
     * Optional label text shown above the input (forwarded to ir-input).
     */
    dateLabel: string;
    /**
     * ISO date string (YYYY-MM-DD) for the latest selectable date.
     */
    maxDate: string;
    /**
     * When `true` and `variant="booking"`, a nights badge is shown inside the input.
     */
    withDateDifference: boolean;
    /**
     * `"booking"` shows the nights badge; `"default"` hides it.
     */
    variant: 'booking' | 'default';
    /**
     * Optional hint text rendered below the input.
     */
    hint: string;
    /** Whether the calendar popup is open. */
    private isActive;
    /** Currently selected check-in date. */
    private fromDate;
    /** Currently selected check-out date. */
    private toDate;
    /** Mirrors the `aria-invalid` attribute so the input reflects validity state. */
    private isInvalid;
    /** Computed number of nights between the selected dates. Triggers re-render on change. */
    private totalNights;
    /**
     * Legacy event – emits `{ key, data }` for backward-compatible consumers.
     * @deprecated Prefer `dateRangeChange`.
     */
    dateSelectEvent: EventEmitter<{
        [key: string]: any;
    }>;
    /**
     * Emits the selected check-in / check-out as Moment objects.
     */
    dateRangeChange: EventEmitter<DateRangeChangeEvent>;
    /** Fired when the calendar popup opens. */
    dateRangeShow: EventEmitter<void>;
    /** Fired when the calendar popup closes. */
    dateRangeHide: EventEmitter<void>;
    private static instanceCounter;
    private popupId;
    componentWillLoad(): void;
    /** Re-initializes dates when `defaultData` reference changes. */
    handleDataChange(newValue: any, oldValue: any): void;
    /** Syncs `isInvalid` with the reflected `aria-invalid` attribute. */
    handleAriaInvalidChange(newValue: string): void;
    private initializeDates;
    private calculateTotalNights;
    private handleDateSelectEvent;
    private handleCustomDateChange;
    /** Opens the calendar popup. */
    openDatePicker(): Promise<void>;
    /** Closes the calendar popup. Also invoked automatically on outside clicks via `@ClickOutside`. */
    closeDatePicker(): Promise<void>;
    private togglePicker;
    private handleKeyDown;
    private get formattedLabel();
    render(): any;
}
