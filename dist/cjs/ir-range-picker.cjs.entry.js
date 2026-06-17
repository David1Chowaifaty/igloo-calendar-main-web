'use strict';

var index = require('./index-DtXemfU-.js');
var moment = require('./moment-CdViwxPQ.js');

const irRangePickerCss = () => `@layer wa-utilities{.sc-ir-range-picker-h[size='small'],.wa-size-s{font-size:var(--wa-font-size-s)}.sc-ir-range-picker-h[size='medium'],.wa-size-m{font-size:var(--wa-font-size-m)}.sc-ir-range-picker-h[size='large'],.wa-size-l{font-size:var(--wa-font-size-l)}}.sc-ir-range-picker-h{display:block;--ir-range-gap:0.5rem}.range-picker__container.sc-ir-range-picker{position:relative;display:flex;align-items:center;gap:var(--ir-range-gap);box-sizing:border-box}.range-picker__container.focused.sc-ir-range-picker{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.range-picker__icon--hidden.sc-ir-range-picker,.range-picker__date-picker--hidden.sc-ir-range-picker{opacity:0}.range-picker__overlay.sc-ir-range-picker{position:absolute;inset:0;background-color:white;z-index:1;display:none;pointer-events:none;padding:0;margin:0;cursor:pointer;gap:var(--ir-range-gap)}.range-picker__overlay--active.sc-ir-range-picker{display:flex;align-items:center;justify-content:flex-start;pointer-events:auto;border-radius:inherit;padding-inline:0.5rem}.range-picker__date-picker.sc-ir-range-picker:hover .range-picker__date-picker-button.sc-ir-range-picker,.range-picker__date-picker.focused.sc-ir-range-picker .range-picker__date-picker-button.sc-ir-range-picker{color:var(--wa-color-fill-loud, var(--wa-color-brand-50))}.range-picker__date-picker-button.sc-ir-range-picker{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;cursor:pointer;padding-inline:0.5rem}.range-picker__calendar-icon.sc-ir-range-picker,.range-picker__arrow-icon.sc-ir-range-picker{height:14px;width:14px}.range-picker__container.sc-ir-range-picker{height:var(--wa-form-control-height);padding:0 1rem !important;color:var(--wa-form-control-value-color);font-size:var(--wa-form-control-value-size);font-family:inherit;font-weight:var(--wa-form-control-value-font-weight);line-height:var(--wa-form-control-value-line-height);vertical-align:middle;display:flex;align-items:center;gap:1rem;box-sizing:border-box;background-color:var(--wa-form-control-background-color);border-color:var(--wa-form-control-border-color);border-style:var(--wa-form-control-border-style);border-width:var(--wa-form-control-border-width);border-radius:var(--wa-form-control-border-radius);transition:background-color var(--wa-transition-normal), border var(--wa-transition-normal), all var(--wa-transition-normal), outline var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}`;

const IrRangePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateRangeChanged = index.createEvent(this, "dateRangeChanged");
    }
    /**
     * The earliest date that can be selected.
     */
    minDate;
    /**
     * The latest date that can be selected.
     */
    maxDate;
    /**
     * The start date of the range.
     */
    fromDate;
    /**
     * The end date of the range.
     */
    toDate;
    /**
     * Whether to show the overlay before the date is selected.
     */
    withOverlay = true;
    /**
     * Whether to all the emitted dates to be null.
     */
    allowNullDates = true;
    lastFocusedPicker;
    dateRangeChanged;
    minSelectableDate = moment.hooks().subtract(90, 'days').toDate();
    fromDatePicker;
    toDatePicker;
    date_container;
    focusTimeout;
    async handleDateChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const selectedDate = e.detail.start ? moment.hooks(e.detail.start) : null;
        if (!this.lastFocusedPicker) {
            return;
        }
        if (e.target.id === 'fromDate') {
            let updatedToDate = this.toDate;
            if (!selectedDate) {
                this.dateRangeChanged.emit({ fromDate: null, toDate: null, wasFocused: !!this.lastFocusedPicker });
                return;
            }
            if (!updatedToDate || updatedToDate.isBefore(selectedDate, 'day')) {
                updatedToDate = selectedDate;
            }
            this.dateRangeChanged.emit({ fromDate: selectedDate, toDate: updatedToDate, wasFocused: !!this.lastFocusedPicker });
            await this.toDatePicker.openDatePicker();
        }
        else {
            if (!selectedDate) {
                this.dateRangeChanged.emit({ fromDate: this.fromDate, toDate: this.fromDate, wasFocused: !!this.lastFocusedPicker });
                return;
            }
            this.dateRangeChanged.emit({ fromDate: this.fromDate, toDate: selectedDate, wasFocused: !!this.lastFocusedPicker });
        }
        this.lastFocusedPicker = null;
    }
    handleDatePickerFocus(e) {
        e.stopPropagation();
        clearTimeout(this.focusTimeout);
        this.date_container.classList.add('focused');
        e.target.classList.add('focused');
    }
    handleDatePickerBlur(e) {
        e.stopPropagation();
        e.target.classList.remove('focused');
        this.focusTimeout = setTimeout(() => {
            this.date_container.classList.remove('focused');
        }, 10);
    }
    disconnectedCallback() {
        clearTimeout(this.focusTimeout);
    }
    renderDatePicker(id, date, minDate, refCallback, additionalProps = {}) {
        return (index.h("ir-date-picker", { class: {
                'range-picker__date-picker': true,
                'range-picker__date-picker--hidden': this.withOverlay && !this.fromDate,
            }, customPicker: true, ref: el => refCallback(el), minDate: minDate, maxDate: this.maxDate, date: date?.toDate(), id: id, onDatePickerFocus: () => {
                this.lastFocusedPicker = id;
            }, emitEmptyDate: this.allowNullDates, ...additionalProps }, index.h("p", { class: "range-picker__date-picker-button", slot: "trigger" }, date?.format('YYYY-MM-DD') ?? '2025-03-02')));
    }
    render() {
        return (index.h(index.Host, { key: 'ca22f836750a1efe27f640d455dc8509dd228a12', size: "s" }, index.h("div", { key: '511d0592916c1392a9177643ff2c0b76c3914dea', class: "range-picker__container", ref: el => (this.date_container = el) }, this.withOverlay && (index.h("div", { key: '92f5cbf43a0d57f74119257486ed1d3a5f3bf70f', class: {
                'range-picker__overlay': true,
                'range-picker__overlay--active': !this.fromDate,
            }, onClick: () => this.fromDatePicker.openDatePicker() }, index.h("wa-icon", { key: 'c3ceab35b6e86a444a54fe8d801eef778e38da18', name: "calendar" }), index.h("p", { key: '31a816d3b7e69c616829467c0a689d80a3eac41e', class: "m-0" }, index.h("slot", { key: '4d051c4a45057b24fe4ba02aedff2b9889a0f302', name: "message" }, "Cleaned on")))), index.h("svg", { key: '18eb4650fe0689f59bca634774e8bc9d1a3c7e2e', class: {
                'range-picker__calendar-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, index.h("path", { key: 'f7d24ed46ddcc1a3d49e6b882957f08df9f28d12', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), this.renderDatePicker('fromDate', this.fromDate, this.minDate, el => (this.fromDatePicker = el)), index.h("svg", { key: '3d40ad0185502621e592a3048f4e770feaa224f7', class: {
                'range-picker__arrow-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { key: '11c2175bc9737563ac47f94096651cc1646f64d1', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), this.renderDatePicker('toDate', this.toDate, this.fromDate?.toDate() || this.minSelectableDate, el => (this.toDatePicker = el), {
            forceDestroyOnUpdate: false,
        }))));
    }
};
IrRangePicker.style = irRangePickerCss();

exports.ir_range_picker = IrRangePicker;
