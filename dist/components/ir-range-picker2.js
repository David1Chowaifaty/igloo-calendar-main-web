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
        console.log(e.detail);
        const selectedDate = e.detail.start ? hooks(e.detail.start) : null;
        if (e.target.id === 'fromDate') {
            let updatedToDate = this.toDate;
            if (!selectedDate) {
                this.dateRangeChanged.emit({ fromDate: null, toDate: null });
                return;
            }
            if (!updatedToDate || updatedToDate.isBefore(selectedDate, 'day')) {
                updatedToDate = selectedDate;
            }
            this.dateRangeChanged.emit({ fromDate: selectedDate, toDate: updatedToDate });
            await this.toDatePicker.openDatePicker();
        }
        else {
            if (!selectedDate) {
                this.dateRangeChanged.emit({ fromDate: this.fromDate, toDate: this.fromDate });
                return;
            }
            this.dateRangeChanged.emit({ fromDate: this.fromDate, toDate: selectedDate });
        }
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
            }, customPicker: true, ref: el => refCallback(el), minDate: minDate, maxDate: this.maxDate, date: date === null || date === void 0 ? void 0 : date.toDate(), id: id, emitEmptyDate: this.allowNullDates }, additionalProps), h("p", { class: "range-picker__date-picker-button", slot: "trigger" }, (_a = date === null || date === void 0 ? void 0 : date.format('YYYY-MM-DD')) !== null && _a !== void 0 ? _a : '2025-03-02')));
    }
    render() {
        var _a;
        return (h(Host, { key: '311ef8c3fe14ad1a7ecca96777e839699aba454b' }, h("div", { key: 'b94ed13f52877413668085a86571c8ca6e1b2ebd', class: "form-control range-picker__container", ref: el => (this.date_container = el) }, this.withOverlay && (h("div", { key: '0cf60c2e49b376bf74ecafc8c1d1e56b2c50e095', class: {
                'range-picker__overlay': true,
                'range-picker__overlay--active': !this.fromDate,
            }, onClick: () => this.fromDatePicker.openDatePicker() }, h("svg", { key: 'cfc475fa17b2e465a1000c95a4dbb48cfdf41633', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: '1a132fef3a6433d42f6a573a47c713cb7c49926d', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), h("p", { key: '1f7cd6e1c9312eb11590ce7cfd61397db59a5774', class: "m-0" }, h("slot", { key: 'ac748fc68155dfeacbf36bec6cc8a2a6c087aa51', name: "message" }, "Cleaned on")))), h("svg", { key: 'cbee2a96648d24e4048437fc2c57fb9ed851a15e', class: {
                'range-picker__calendar-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: '8bf75637ca834b473b6bf571723febe7e2e7737d', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), this.renderDatePicker('fromDate', this.fromDate, this.minDate, el => (this.fromDatePicker = el)), h("svg", { key: '34dfbf7c057db7dbc4a6495fc79c8e957cf30a7d', class: {
                'range-picker__arrow-icon': true,
                'range-picker__icon--hidden': this.withOverlay && !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: 'e476261c0dfd05607b8e9b782b1ac320f16e54e7', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), this.renderDatePicker('toDate', this.toDate, ((_a = this.fromDate) === null || _a === void 0 ? void 0 : _a.toDate()) || this.minSelectableDate, el => (this.toDatePicker = el), {
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
        "allowNullDates": [4, "allow-null-dates"]
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