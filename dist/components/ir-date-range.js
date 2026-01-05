import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';

const irDateRangeCss = ".sc-ir-date-range-h{display:block;width:100%}.date-range-input.sc-ir-date-range{width:100%}";
const IrDateRangeStyle0 = irDateRangeCss;

const IrDateRange$1 = /*@__PURE__*/ proxyCustomElement(class IrDateRange extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dateChanged = createEvent(this, "dateChanged", 7);
    }
    get element() { return this; }
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
        return (h(Host, { key: '248c4606566ae67f28575f2309e09a53f53f4fc7' }, h("input", { key: 'fe44e9b147aa0da83faea8c880bced8a8eac5d79', class: "date-range-input", type: "button", disabled: this.disabled })));
    }
    static get watchers() { return {
        "minDate": ["handleMinDateChange"],
        "date": ["datePropChanged"]
    }; }
    static get style() { return IrDateRangeStyle0; }
}, [2, "ir-date-range", {
        "fromDate": [16],
        "toDate": [16],
        "date": [16],
        "opens": [1],
        "autoApply": [4, "auto-apply"],
        "firstDay": [2, "first-day"],
        "monthNames": [16],
        "daysOfWeek": [16],
        "format": [1],
        "separator": [1],
        "applyLabel": [1, "apply-label"],
        "cancelLabel": [1, "cancel-label"],
        "fromLabel": [1, "from-label"],
        "toLabel": [1, "to-label"],
        "customRangeLabel": [1, "custom-range-label"],
        "weekLabel": [1, "week-label"],
        "disabled": [4],
        "singleDatePicker": [4, "single-date-picker"],
        "minDate": [1, "min-date"],
        "maxDate": [1, "max-date"],
        "maxSpan": [8, "max-span"],
        "openDatePicker": [64]
    }, undefined, {
        "minDate": ["handleMinDateChange"],
        "date": ["datePropChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-date-range"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDateRange$1);
            }
            break;
    } });
}

const IrDateRange = IrDateRange$1;
const defineCustomElement = defineCustomElement$1;

export { IrDateRange, defineCustomElement };

//# sourceMappingURL=ir-date-range.js.map