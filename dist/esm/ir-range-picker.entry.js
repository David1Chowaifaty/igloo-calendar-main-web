import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { h as hooks } from './moment-ab846cee.js';

const irRangePickerCss = "@layer wa-utilities {\n  .sc-ir-range-picker-h[size='small'],\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .sc-ir-range-picker-h[size='medium'],\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .sc-ir-range-picker-h[size='large'],\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n.sc-ir-range-picker-h {\n  display: block;\n  --ir-range-gap: 0.5rem;\n}\n\n.range-picker__container.sc-ir-range-picker {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: var(--ir-range-gap);\n  box-sizing: border-box;\n}\n.range-picker__container.focused.sc-ir-range-picker {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n.range-picker__icon--hidden.sc-ir-range-picker, .range-picker__date-picker--hidden.sc-ir-range-picker {\n  opacity: 0;\n}\n\n.range-picker__overlay.sc-ir-range-picker {\n  position: absolute;\n  inset: 0;\n  background-color: white;\n  z-index: 1;\n  display: none;\n  pointer-events: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  gap: var(--ir-range-gap);\n}\n\n.range-picker__overlay--active.sc-ir-range-picker {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  pointer-events: auto;\n  border-radius: inherit;\n  padding-inline: 0.5rem;\n}\n.range-picker__date-picker.sc-ir-range-picker:hover .range-picker__date-picker-button.sc-ir-range-picker, .range-picker__date-picker.focused.sc-ir-range-picker .range-picker__date-picker-button.sc-ir-range-picker {\n  color: var(--wa-color-fill-loud, var(--wa-color-brand-50));\n}\n.range-picker__date-picker-button.sc-ir-range-picker {\n  background: inherit;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  font-size: 0.975rem;\n  line-height: 1.45;\n  height: 2rem;\n  color: #3b4781;\n  white-space: nowrap;\n  cursor: pointer;\n  padding-inline: 0.5rem;\n}\n\n.range-picker__calendar-icon.sc-ir-range-picker, .range-picker__arrow-icon.sc-ir-range-picker {\n  height: 14px;\n  width: 14px;\n}\n\n.range-picker__container.sc-ir-range-picker {\n  height: var(--wa-form-control-height);\n  padding: 0 1rem !important;\n  color: var(--wa-form-control-value-color);\n  font-size: var(--wa-form-control-value-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-sizing: border-box;\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  border-radius: var(--wa-form-control-border-radius);\n  transition: background-color var(--wa-transition-normal), border var(--wa-transition-normal), all var(--wa-transition-normal), outline var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n}";
const IrRangePickerStyle0 = irRangePickerCss;

const IrRangePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateRangeChanged = createEvent(this, "dateRangeChanged", 7);
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
    minSelectableDate = hooks().subtract(90, 'days').toDate();
    fromDatePicker;
    toDatePicker;
    date_container;
    focusTimeout;
    async handleDateChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const selectedDate = e.detail.start ? hooks(e.detail.start) : null;
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
        return (h("ir-date-picker", { class: {
                'range-picker__date-picker': true,
                'range-picker__date-picker--hidden': this.withOverlay && !this.fromDate,
            }, customPicker: true, ref: el => refCallback(el), minDate: minDate, maxDate: this.maxDate, date: date?.toDate(), id: id, onDatePickerFocus: () => {
                this.lastFocusedPicker = id;
            }, emitEmptyDate: this.allowNullDates, ...additionalProps }, h("p", { class: "range-picker__date-picker-button", slot: "trigger" }, date?.format('YYYY-MM-DD') ?? '2025-03-02')));
    }
    render() {
        return (h(Host, { key: '15948db1fb36cd5a815af8ee17e6ed1b0834717e', size: "small" }, h("div", { key: 'c61973c2ede43f2c7e5dbc1f5ee937026f9be385', class: "range-picker__container", ref: el => (this.date_container = el) }, this.withOverlay && (h("div", { key: 'cc4add0a9fa1a99dd66e7834885e1df68b9f1ae2', class: {
                'range-picker__overlay': true,
                'range-picker__overlay--active': !this.fromDate,
            }, onClick: () => this.fromDatePicker.openDatePicker() }, h("wa-icon", { key: '7c83fba125fefdac3a2bdd3e7df9353d83a45c07', name: "calendar" }), h("p", { key: 'd4787ec91892a47522d7aca10dcf297fc2112cf1', class: "m-0" }, h("slot", { key: '8f8dd3dd313ca3a85f20e4f10645d23712f9783c', name: "message" }, "Cleaned on")))), h("svg", { key: 'b6090bd579d9968d11d2d4a8fddf4625c3f4692b', class: {
                'range-picker__calendar-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: '1a34418712313512126c230774cc6b4a892b478c', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), this.renderDatePicker('fromDate', this.fromDate, this.minDate, el => (this.fromDatePicker = el)), h("svg", { key: 'cd955cf078784f5212b69ad1d5fa9693f1698ff7', class: {
                'range-picker__arrow-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'f70b060721b449ce829dabf1c2490c2a567de2da', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), this.renderDatePicker('toDate', this.toDate, this.fromDate?.toDate() || this.minSelectableDate, el => (this.toDatePicker = el), {
            forceDestroyOnUpdate: false,
        }))));
    }
};
IrRangePicker.style = IrRangePickerStyle0;

export { IrRangePicker as ir_range_picker };

//# sourceMappingURL=ir-range-picker.entry.js.map