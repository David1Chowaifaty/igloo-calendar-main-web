import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-date-picker2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irRangePickerCss = ".sc-ir-range-picker-h{display:block}.range-picker__container.sc-ir-range-picker{position:relative;display:flex;align-items:center;gap:0.5rem;box-sizing:border-box}.range-picker__icon--hidden.sc-ir-range-picker,.range-picker__date-picker--hidden.sc-ir-range-picker{opacity:0}.range-picker__overlay.sc-ir-range-picker{position:absolute;inset:0;background-color:white;z-index:1;display:none;pointer-events:none;padding:0;margin:0;cursor:pointer}.range-picker__overlay--active.sc-ir-range-picker{display:flex;align-items:center;justify-content:flex-start;pointer-events:auto;padding-inline:1rem;border-radius:inherit}.range-picker__date-picker-button.sc-ir-range-picker:hover{text-decoration:underline;color:green}.range-picker__calendar-icon.sc-ir-range-picker,.range-picker__arrow-icon.sc-ir-range-picker{height:14px;width:14px}";

const IrRangePicker = /*@__PURE__*/ proxyCustomElement(class IrRangePicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dateRangeChanged = createEvent(this, "dateRangeChanged", 7);
        this.minSelectableDate = hooks().subtract(90, 'days').toDate();
        this.maxSelectableDate = hooks().toDate();
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
    renderDatePicker(id, date, minDate, buttonText, refCallback, additionalProps = {}) {
        var _a;
        return (h("ir-date-picker", Object.assign({ class: {
                'range-picker__date-picker': true,
                'range-picker__date-picker--hidden': !this.fromDate,
            }, customPicker: true, ref: el => refCallback(el), minDate: minDate, maxDate: this.maxSelectableDate, date: date === null || date === void 0 ? void 0 : date.toDate(), id: id, emitEmptyDate: true }, additionalProps), h("ir-button", { class: "range-picker__date-picker-button", btn_styles: "p-0 m-0", slot: "trigger", btn_color: "link", text: (_a = date === null || date === void 0 ? void 0 : date.format('YYYY-MM-DD')) !== null && _a !== void 0 ? _a : buttonText })));
    }
    render() {
        var _a;
        return (h(Host, { key: 'e4cd6932627ac2c6691c7193dd197b2b0da0fa21' }, h("div", { key: 'd5f4bd08ef9d9ccded35ef48d50e4440da6f4ed1', class: "form-control range-picker__container" }, h("p", { key: '77590f6dca2abad04401c2f730de60a0f6f760f4', onClick: () => this.fromDatePicker.openDatePicker(), class: {
                'range-picker__overlay': true,
                'range-picker__overlay--active': !this.fromDate,
            } }, "Cleaned on"), h("svg", { key: 'aa22f62f4f4cbc4d8a98b8583a6ab3deb283ebe1', class: {
                'range-picker__calendar-icon': true,
                'range-picker__icon--hidden': !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", style: { height: '14px', width: '14px' } }, h("path", { key: '2fa41debff6938107bbd9575c0606f2cd6b92306', fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), this.renderDatePicker('fromDate', this.fromDate, this.minSelectableDate, 'from date', el => (this.fromDatePicker = el)), h("svg", { key: 'fe75e6c74c16be02a2430ff8a922dd7febfd854a', class: {
                'range-picker__arrow-icon': true,
                'range-picker__icon--hidden': !this.fromDate,
            }, xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { key: '0381efd9a7ae309e2fb2ee5f59f07c9b74f1f9a8', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), this.renderDatePicker('toDate', this.toDate, ((_a = this.fromDate) === null || _a === void 0 ? void 0 : _a.toDate()) || this.minSelectableDate, 'to date', el => (this.toDatePicker = el), {
            forceDestroyOnUpdate: true,
        }))));
    }
    static get style() { return irRangePickerCss; }
}, [2, "ir-range-picker", {
        "fromDate": [16],
        "toDate": [16]
    }, [[0, "dateChanged", "handleDateChanged"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-range-picker", "ir-button", "ir-date-picker", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRangePicker);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRangePicker as I, defineCustomElement as d };
//# sourceMappingURL=ir-range-picker2.js.map

//# sourceMappingURL=ir-range-picker2.js.map