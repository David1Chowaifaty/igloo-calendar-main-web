import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-date-picker2.js';

const irRangePickerCss = ".sc-ir-range-picker-h{display:block;--ir-range-gap:0.5rem}.range-picker__container.sc-ir-range-picker{position:relative;display:flex;align-items:center;gap:var(--ir-range-gap);box-sizing:border-box}.range-picker__container.focused.sc-ir-range-picker{border-bottom-color:rgb(198, 206, 231);border-left-color:rgb(198, 206, 231);border-right-color:rgb(198, 206, 231);border-top-color:rgb(198, 206, 231);color:#4e5154;background-color:#fff;border-color:var(--blue, #1e9ff2);outline:0;-webkit-box-shadow:none;box-shadow:none}.range-picker__icon--hidden.sc-ir-range-picker,.range-picker__date-picker--hidden.sc-ir-range-picker{opacity:0}.range-picker__overlay.sc-ir-range-picker{position:absolute;inset:0;background-color:white;z-index:1;display:none;pointer-events:none;padding:0;margin:0;cursor:pointer;gap:var(--ir-range-gap)}.range-picker__overlay--active.sc-ir-range-picker{display:flex;align-items:center;justify-content:flex-start;pointer-events:auto;border-radius:inherit;padding-inline:0.5rem}.range-picker__date-picker.sc-ir-range-picker:hover .range-picker__date-picker-button.sc-ir-range-picker,.range-picker__date-picker.focused.sc-ir-range-picker .range-picker__date-picker-button.sc-ir-range-picker{color:var(--blue, #1e9ff2)}.range-picker__date-picker-button.sc-ir-range-picker{background:inherit;margin:0;padding:0;display:flex;align-items:center;font-size:0.975rem;line-height:1.45;height:2rem;color:#3b4781;white-space:nowrap;cursor:pointer;padding-inline:0.5rem}.range-picker__calendar-icon.sc-ir-range-picker,.range-picker__arrow-icon.sc-ir-range-picker{height:14px;width:14px}";
const IrRangePickerStyle0 = irRangePickerCss;

const IrRangePicker = /*@__PURE__*/ proxyCustomElement(class IrRangePicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dateRangeChanged = createEvent(this, "dateRangeChanged", 7);
        /**
         * Whether to show the overlay before the date is selected.
         */
        this.withOverlay = true;
        /**
         * Whether to all the emitted dates to be null.
         */
        this.allowNullDates = true;
        this.minSelectableDate = hooks().subtract(90, 'days').toDate();
    }
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
        var _a;
        return (h("ir-date-picker", Object.assign({ class: {
                'range-picker__date-picker': true,
                'range-picker__date-picker--hidden': this.withOverlay && !this.fromDate,
            }, customPicker: true, ref: el => refCallback(el), minDate: minDate, maxDate: this.maxDate, date: date === null || date === void 0 ? void 0 : date.toDate(), id: id, onDatePickerFocus: () => {
                this.lastFocusedPicker = id;
            }, emitEmptyDate: this.allowNullDates }, additionalProps), h("p", { class: "range-picker__date-picker-button", slot: "trigger" }, (_a = date === null || date === void 0 ? void 0 : date.format('YYYY-MM-DD')) !== null && _a !== void 0 ? _a : '2025-03-02')));
    }
    render() {
        var _a;
        return (h(Host, { key: '3c101ddc0bbd53a3a3349486fb3f284095414090' }, h("div", { key: 'aa4bca334f219c05fc10526d188fd75cc7e95f60', class: "form-control range-picker__container", ref: el => (this.date_container = el) }, this.withOverlay && (h("div", { key: 'a9a7b32ad515ed973a569fe82bd19c19a49ca52d', class: {
                'range-picker__overlay': true,
                'range-picker__overlay--active': !this.fromDate,
            }, onClick: () => this.fromDatePicker.openDatePicker() }, h("svg", { key: '1547ea47ad083b14d27cb98640bdb44515b961b0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: 'bc60d5aea7b69b039f1bbfa8b57d436022574e0f', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), h("p", { key: '546b51f39d51c2df2ede686104234ac4bea164bd', class: "m-0" }, h("slot", { key: '57009689c1b1814d876a3d1e7cc6b06cd3198028', name: "message" }, "Cleaned on")))), h("svg", { key: 'ccad7639e482c1024ec8503c97d23529570ac5a0', class: {
                'range-picker__calendar-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: '8165207710c1e3d6871d4361e530497234d19267', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), this.renderDatePicker('fromDate', this.fromDate, this.minDate, el => (this.fromDatePicker = el)), h("svg", { key: '88935b398c8b0aa909a038f8748ab277dd77cc14', class: {
                'range-picker__arrow-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'edd67d1edcfaa7d25f8da939078bbeb3e40358d2', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), this.renderDatePicker('toDate', this.toDate, ((_a = this.fromDate) === null || _a === void 0 ? void 0 : _a.toDate()) || this.minSelectableDate, el => (this.toDatePicker = el), {
            forceDestroyOnUpdate: true,
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