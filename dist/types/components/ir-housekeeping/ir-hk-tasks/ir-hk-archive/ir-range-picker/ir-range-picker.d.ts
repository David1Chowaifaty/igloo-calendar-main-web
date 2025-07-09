import { EventEmitter } from '../../../../../stencil-public-runtime';
import { Moment } from 'moment';
export declare class IrRangePicker {
    /**
     * The earliest date that can be selected.
     */
    minDate?: string | Date;
    /**
     * The latest date that can be selected.
     */
    maxDate?: string | Date;
    /**
     * The start date of the range.
     */
    fromDate: Moment;
    /**
     * The end date of the range.
     */
    toDate: Moment;
    /**
     * Whether to show the overlay before the date is selected.
     */
    withOverlay: boolean;
    /**
     * Whether to all the emitted dates to be null.
     */
    allowNullDates: boolean;
    lastFocusedPicker: string;
    dateRangeChanged: EventEmitter<{
        fromDate: Moment;
        toDate: Moment;
        wasFocused?: boolean;
    }>;
    private minSelectableDate;
    private fromDatePicker;
    private toDatePicker;
    private date_container;
    private focusTimeout;
    handleDateChanged(e: CustomEvent): Promise<void>;
    handleDatePickerFocus(e: CustomEvent): void;
    handleDatePickerBlur(e: CustomEvent): void;
    disconnectedCallback(): void;
    private renderDatePicker;
    render(): any;
}
