import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-date-picker2.js';

const irRangePickerCss = "@layer wa-utilities {\n  .sc-ir-range-picker-h[size='small'],\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .sc-ir-range-picker-h[size='medium'],\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .sc-ir-range-picker-h[size='large'],\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n.sc-ir-range-picker-h {\n  display: block;\n  --ir-range-gap: 0.5rem;\n}\n\n.range-picker__container.sc-ir-range-picker {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: var(--ir-range-gap);\n  box-sizing: border-box;\n}\n.range-picker__container.focused.sc-ir-range-picker {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n.range-picker__icon--hidden.sc-ir-range-picker, .range-picker__date-picker--hidden.sc-ir-range-picker {\n  opacity: 0;\n}\n\n.range-picker__overlay.sc-ir-range-picker {\n  position: absolute;\n  inset: 0;\n  background-color: white;\n  z-index: 1;\n  display: none;\n  pointer-events: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  gap: var(--ir-range-gap);\n}\n\n.range-picker__overlay--active.sc-ir-range-picker {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  pointer-events: auto;\n  border-radius: inherit;\n  padding-inline: 0.5rem;\n}\n.range-picker__date-picker.sc-ir-range-picker:hover .range-picker__date-picker-button.sc-ir-range-picker, .range-picker__date-picker.focused.sc-ir-range-picker .range-picker__date-picker-button.sc-ir-range-picker {\n  color: var(--wa-color-fill-loud, var(--wa-color-brand-50));\n}\n.range-picker__date-picker-button.sc-ir-range-picker {\n  background: inherit;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  font-size: 0.975rem;\n  line-height: 1.45;\n  height: 2rem;\n  color: #3b4781;\n  white-space: nowrap;\n  cursor: pointer;\n  padding-inline: 0.5rem;\n}\n\n.range-picker__calendar-icon.sc-ir-range-picker, .range-picker__arrow-icon.sc-ir-range-picker {\n  height: 14px;\n  width: 14px;\n}\n\n.range-picker__container.sc-ir-range-picker {\n  height: var(--wa-form-control-height);\n  padding: 0 1rem !important;\n  color: var(--wa-form-control-value-color);\n  font-size: var(--wa-form-control-value-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-sizing: border-box;\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  border-radius: var(--wa-form-control-border-radius);\n  transition: background-color var(--wa-transition-normal), border var(--wa-transition-normal), all var(--wa-transition-normal), outline var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n}";
const IrRangePickerStyle0 = irRangePickerCss;

const IrRangePicker = /*@__PURE__*/ proxyCustomElement(class IrRangePicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '69cf975f19d0fc67a89403213b62e4d81f91189f', size: "small" }, h("div", { key: '973ea242797d80498fe49ab72ca28be8c28105cd', class: "range-picker__container", ref: el => (this.date_container = el) }, this.withOverlay && (h("div", { key: '814a7363ad7f733241a104cc60c098dbd75f0e67', class: {
                'range-picker__overlay': true,
                'range-picker__overlay--active': !this.fromDate,
            }, onClick: () => this.fromDatePicker.openDatePicker() }, h("wa-icon", { key: '902bfab60057226d73c8bf04023b6e8e125c71b8', name: "calendar" }), h("p", { key: 'c1dc60386288413aa2d5573194708ead0c956755', class: "m-0" }, h("slot", { key: 'c693864da24b4bb267fedb4f270bc8084e33376a', name: "message" }, "Cleaned on")))), h("svg", { key: 'e57971034a6ed255c3c14428a4379326a6b82be6', class: {
                'range-picker__calendar-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: '75031cb41ae4d790dd3080313a29d81402a68182', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), this.renderDatePicker('fromDate', this.fromDate, this.minDate, el => (this.fromDatePicker = el)), h("svg", { key: 'a89b7dfbdd43990aea2e932c7225428b2824c900', class: {
                'range-picker__arrow-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '7a56d505f0a801d6e034c4d65609136cbae20d8f', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), this.renderDatePicker('toDate', this.toDate, this.fromDate?.toDate() || this.minSelectableDate, el => (this.toDatePicker = el), {
            forceDestroyOnUpdate: false,
        }))));
    }
    static get style() { return IrRangePickerStyle0; }
}, [6, "ir-range-picker", {
        "minDate": [1, "min-date"],
        "maxDate": [1, "max-date"],
        "fromDate": [16],
        "toDate": [16],
        "withOverlay": [4, "with-overlay"],
        "allowNullDates": [4, "allow-null-dates"],
        "lastFocusedPicker": [32]
    }, [[0, "dateChanged", "handleDateChanged"], [0, "datePickerFocus", "handleDatePickerFocus"], [0, "datePickerBlur", "handleDatePickerBlur"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-range-picker", "ir-date-picker"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRangePicker);
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRangePicker as I, defineCustomElement as d };

//# sourceMappingURL=ir-range-picker2.js.map