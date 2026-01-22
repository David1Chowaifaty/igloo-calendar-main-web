'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const moment = require('./moment-1780b03a.js');

const irDateRangeCss = ".sc-ir-date-range-h{display:block;width:100%}.date-range-input.sc-ir-date-range{width:100%}";
const IrDateRangeStyle0 = irDateRangeCss;

const IrDateRange = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateChanged = index.createEvent(this, "dateChanged", 7);
    }
    get element() { return index.getElement(this); }
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
            const newDate = this.date ? moment.hooks(this.date) : moment.hooks();
            picker.setStartDate(newDate);
            picker.setEndDate(newDate); // For single date picker, start and end date might be the same.
        }
        else {
            const newStartDate = this.fromDate ? moment.hooks(this.fromDate) : moment.hooks();
            const newEndDate = this.toDate ? moment.hooks(this.toDate) : newStartDate.clone().add(1, 'days');
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
            startDate: moment.hooks(this.fromDate),
            endDate: moment.hooks(this.toDate),
            minDate: moment.hooks(this.minDate || moment.hooks(new Date()).format('YYYY-MM-DD')),
            maxDate: this.maxDate ? moment.hooks(this.maxDate) : undefined,
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
        return (index.h(index.Host, { key: 'dedabccb8457615766d948c16e36c0606d53da4f' }, index.h("input", { key: '018fd6dd6d1ed607793f9d8041f557293997747d', class: "date-range-input", type: "button", disabled: this.disabled })));
    }
    static get watchers() { return {
        "minDate": ["handleMinDateChange"],
        "date": ["datePropChanged"]
    }; }
};
IrDateRange.style = IrDateRangeStyle0;

exports.ir_date_range = IrDateRange;

//# sourceMappingURL=ir-date-range.cjs.entry.js.map