import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-b3dce66a.js';
import { h as hooks } from './moment-ab846cee.js';

const irDateRangeCss = ".sc-ir-date-range-h{display:block;width:100%}.date-range-input.sc-ir-date-range{width:100%}";
const IrDateRangeStyle0 = irDateRangeCss;

const IrDateRange = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateChanged = createEvent(this, "dateChanged", 7);
    }
    get element() { return getElement(this); }
    /**
     * Start date for the date range.
     */
    fromDate;
    /**
     * End date for the date range.
     */
    toDate;
    /**
     * Single date selection value (used in single date picker mode).
     */
    date;
    /**
     * Defines which side the calendar opens to.
     * Options: `'left'`, `'right'`, `'center'`.
     */
    opens;
    /**
     * Whether to apply the selected range automatically without clicking 'Apply'.
     */
    autoApply;
    /**
     * First day of the week (0 = Sunday, 1 = Monday, ...).
     */
    firstDay = 1;
    /**
     * Month names shown in the calendar header.
     */
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    /**
     * Abbreviated names of the days of the week.
     */
    daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    /**
     * Date format used in the input and picker.
     */
    format = 'MMM DD, YYYY';
    /**
     * Separator string used between start and end dates.
     */
    separator = ' - ';
    /**
     * Text shown on the Apply button.
     */
    applyLabel = 'Apply';
    /**
     * Text shown on the Cancel button.
     */
    cancelLabel = 'Cancel';
    /**
     * Label for the "From" date input.
     */
    fromLabel = 'Form';
    /**
     * Label for the "To" date input.
     */
    toLabel = 'To';
    /**
     * Label used for the custom date range option.
     */
    customRangeLabel = 'Custom';
    /**
     * Label for the week column in the calendar.
     */
    weekLabel = 'W';
    /**
     * Disables the date range input when true.
     */
    disabled = false;
    /**
     * Enables single date selection mode.
     */
    singleDatePicker = false;
    /**
     * Minimum selectable date.
     */
    minDate;
    /**
     * Maximum selectable date.
     */
    maxDate;
    /**
     * Maximum range span (e.g., `{ days: 240 }`).
     */
    maxSpan = { days: 240 };
    /**
     * Emits when a new date range is selected.
     *
     * Example:
     * ```tsx
     * <ir-date-range onDateChanged={(e) => console.log(e.detail)} />
     * ```
     */
    dateChanged;
    openDatePickerTimeout;
    dateRangeInput;
    componentWillLoad() {
        if (!document.getElementById('ir-daterangepicker-style')) {
            const style = document.createElement('style');
            style.id = 'ir-daterangepicker-style';
            style.textContent = `
        .daterangepicker {
          margin-top: 14px;
        }
      `;
            document.head.appendChild(style);
        }
    }
    componentDidLoad() {
        this.dateRangeInput = this.element.querySelector('.date-range-input');
        this.initializeDateRangePicker();
        this.updateDateRangePickerDates();
    }
    disconnectedCallback() {
        if (this.openDatePickerTimeout) {
            clearTimeout(this.openDatePickerTimeout);
        }
        $(this.dateRangeInput).data('daterangepicker').remove();
    }
    handleMinDateChange() {
        $(this.dateRangeInput).data('daterangepicker').remove();
        this.initializeDateRangePicker();
    }
    datePropChanged() {
        this.updateDateRangePickerDates();
    }
    /**
     * Opens the date picker programmatically.
     *
     * Example:
     * ```ts
     * const el = document.querySelector('ir-date-range');
     * await el.openDatePicker();
     * ```
     */
    async openDatePicker() {
        this.openDatePickerTimeout = setTimeout(() => {
            this.dateRangeInput.click();
        }, 20);
    }
    /**
     * Updates the current dates displayed in the picker
     * (used when props change externally).
     */
    updateDateRangePickerDates() {
        const picker = $(this.dateRangeInput).data('daterangepicker');
        if (!picker) {
            console.error('Date range picker not initialized.');
            return;
        }
        // Adjust how dates are set based on whether it's a single date picker or range picker.
        if (this.singleDatePicker) {
            const newDate = this.date ? hooks(this.date) : hooks();
            picker.setStartDate(newDate);
            picker.setEndDate(newDate); // For single date picker, start and end date might be the same.
        }
        else {
            const newStartDate = this.fromDate ? hooks(this.fromDate) : hooks();
            const newEndDate = this.toDate ? hooks(this.toDate) : newStartDate.clone().add(1, 'days');
            picker.setStartDate(newStartDate);
            picker.setEndDate(newEndDate);
        }
    }
    /**
     * Initializes the date range picker using jQuery plugin with given props.
     */
    initializeDateRangePicker() {
        $(this.dateRangeInput).daterangepicker({
            singleDatePicker: this.singleDatePicker,
            opens: this.opens,
            startDate: hooks(this.fromDate),
            endDate: hooks(this.toDate),
            minDate: hooks(this.minDate || hooks(new Date()).format('YYYY-MM-DD')),
            maxDate: this.maxDate ? hooks(this.maxDate) : undefined,
            maxSpan: this.maxSpan,
            autoApply: this.autoApply,
            locale: {
                format: this.format,
                separator: this.separator,
                applyLabel: this.applyLabel,
                cancelLabel: this.cancelLabel,
                fromLabel: this.fromLabel,
                toLabel: this.toLabel,
                customRangeLabel: this.customRangeLabel,
                weekLabel: this.weekLabel,
                daysOfWeek: this.daysOfWeek,
                monthNames: this.monthNames,
                firstDay: this.firstDay,
            },
        }, (start, end) => {
            this.dateChanged.emit({ start, end });
        });
    }
    render() {
        return (h(Host, { key: '659f5774fbeed7c3a97428f77144539beeede774' }, h("input", { key: 'd781a1b4b75fae0c5547afafd31bc3821d816f75', class: "date-range-input", type: "button", disabled: this.disabled })));
    }
    static get watchers() { return {
        "minDate": ["handleMinDateChange"],
        "date": ["datePropChanged"]
    }; }
};
IrDateRange.style = IrDateRangeStyle0;

export { IrDateRange as ir_date_range };

//# sourceMappingURL=ir-date-range.entry.js.map