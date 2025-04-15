import { EventEmitter } from '../../../stencil-public-runtime';
import moment from 'moment';
export declare class IrDatePicker {
    el: HTMLElement;
    /**
     * Determines whether the date picker is rendered inline or in a pop-up.
     * If `true`, the picker is always visible inline.
     */
    inline: boolean;
    /**
     * The initially selected date; can be a `Date` object or a string recognized by `AirDatepicker`.
     */
    date: string | Date | null;
    /**
     * Enables multiple dates.
     * If `true`, multiple selection is allowed.
     * If you pass a number (e.g. 3), that is the maximum number of selectable dates.
     */
    multipleDates: boolean | number;
    /**
     * Whether the picker should allow range selection (start and end date).
     */
    range: boolean;
    /**
     * Format for the date as it appears in the input field.
     * Follows the `AirDatepicker` format rules.
     */
    dateFormat: string;
    /**
     * Enables the timepicker functionality (select hours and minutes).
     */
    timepicker: boolean;
    /**
     * The earliest date that can be selected.
     */
    minDate?: string | Date;
    /**
     * The latest date that can be selected.
     */
    maxDate?: string | Date;
    /**
     * Disables the input and prevents interaction.
     */
    disabled: boolean;
    /**
     * Closes the picker automatically after a date is selected.
     */
    autoClose: boolean;
    /**
     * Shows days from previous/next month in the current month's calendar.
     */
    showOtherMonths: boolean;
    /**
     * Allows selecting days from previous/next month shown in the current view.
     */
    selectOtherMonths: boolean;
    /**
     * Controls how the date picker is triggered.
     * - **`true`**: The picker can be triggered by custom UI elements (provided via a `<slot name="trigger">`).
     * - **`false`**: A default button input is used to open the picker.
     *
     * Defaults to `true`.
     */
    customPicker: boolean;
    /**
     * Pass a container element if you need the date picker to be appended to a specific element
     * for styling or positioning (particularly for arrow rendering).
     * If not provided, it defaults to `this.el`.
     */
    container?: HTMLElement;
    /**
     * If `true`, the date picker instance is destroyed and rebuilt each time the `date` prop changes.
     * This can be useful if you need the picker to fully re-initialize in response to dynamic changes,
     * but note that it may affect performance if triggered frequently.
     * Defaults to `false`.
     */
    forceDestroyOnUpdate: boolean;
    /**
     * If `true`, the component will emit a `dateChanged` event when the selected date becomes empty (null).
     * Otherwise, empty-date changes will be ignored (no event emitted).
     *
     * Defaults to `false`.
     */
    emitEmptyDate: boolean;
    /**
     * Styles for the trigger container
     */
    triggerContainerStyle: string;
    currentDate: Date | null;
    dateChanged: EventEmitter<{
        start: moment.Moment;
        end: moment.Moment;
    }>;
    datePickerFocus: EventEmitter<void>;
    datePickerBlur: EventEmitter<void>;
    private pickerRef;
    private datePicker;
    private openDatePickerTimeout?;
    private triggerSlot;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /**
     * Set up focus handling for the custom trigger slot
     */
    private setupTriggerFocusHandling;
    private handleTriggerFocus;
    private handleTriggerClick;
    datePropChanged(newDate: string | Date | null, oldDate: string | Date | null): void;
    minDatePropChanged(newVal: string | Date, oldVal: string | Date): void;
    maxDatePropChanged(newVal: string | Date, oldVal: string | Date): void;
    openDatePicker(): Promise<void>;
    clearDatePicker(): Promise<void>;
    private isSameDates;
    private toValidDate;
    private updatePickerDate;
    private initializeDatepicker;
    disconnectedCallback(): void;
    render(): any;
}
