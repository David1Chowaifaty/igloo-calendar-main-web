import { EventEmitter } from '../../../stencil-public-runtime';
import moment from 'moment';
export declare class IrDateRange {
    private element;
    /**
     * Start date for the date range.
     */
    fromDate: Date;
    /**
     * End date for the date range.
     */
    toDate: Date;
    /**
     * Single date selection value (used in single date picker mode).
     */
    date: Date;
    /**
     * Defines which side the calendar opens to.
     * Options: `'left'`, `'right'`, `'center'`.
     */
    opens: 'left' | 'right' | 'center';
    /**
     * Whether to apply the selected range automatically without clicking 'Apply'.
     */
    autoApply: boolean;
    /**
     * First day of the week (0 = Sunday, 1 = Monday, ...).
     */
    firstDay: number;
    /**
     * Month names shown in the calendar header.
     */
    monthNames: string[];
    /**
     * Abbreviated names of the days of the week.
     */
    daysOfWeek: string[];
    /**
     * Date format used in the input and picker.
     */
    format: string;
    /**
     * Separator string used between start and end dates.
     */
    separator: string;
    /**
     * Text shown on the Apply button.
     */
    applyLabel: string;
    /**
     * Text shown on the Cancel button.
     */
    cancelLabel: string;
    /**
     * Label for the "From" date input.
     */
    fromLabel: string;
    /**
     * Label for the "To" date input.
     */
    toLabel: string;
    /**
     * Label used for the custom date range option.
     */
    customRangeLabel: string;
    /**
     * Label for the week column in the calendar.
     */
    weekLabel: string;
    /**
     * Disables the date range input when true.
     */
    disabled: boolean;
    /**
     * Enables single date selection mode.
     */
    singleDatePicker: boolean;
    /**
     * Minimum selectable date.
     */
    minDate: string | Date;
    /**
     * Maximum selectable date.
     */
    maxDate: string | Date;
    /**
     * Maximum range span (e.g., `{ days: 240 }`).
     */
    maxSpan: moment.DurationInputArg1;
    /**
     * Emits when a new date range is selected.
     *
     * Example:
     * ```tsx
     * <ir-date-range onDateChanged={(e) => console.log(e.detail)} />
     * ```
     */
    dateChanged: EventEmitter<{
        start: moment.Moment;
        end: moment.Moment;
    }>;
    private openDatePickerTimeout;
    private dateRangeInput;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleMinDateChange(): void;
    datePropChanged(): void;
    /**
     * Opens the date picker programmatically.
     *
     * Example:
     * ```ts
     * const el = document.querySelector('ir-date-range');
     * await el.openDatePicker();
     * ```
     */
    openDatePicker(): Promise<void>;
    /**
     * Updates the current dates displayed in the picker
     * (used when props change externally).
     */
    private updateDateRangePickerDates;
    /**
     * Initializes the date range picker using jQuery plugin with given props.
     */
    private initializeDateRangePicker;
    render(): any;
}
