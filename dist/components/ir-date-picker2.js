import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';

const irDatePickerCss = "input.sc-ir-date-picker{all:unset;box-sizing:border-box !important;padding:0;margin:0;width:100%;text-align:center}input.sc-ir-date-picker:disabled{text-align:start;font-size:14px;width:100%}.sc-ir-date-picker-h{position:relative;box-sizing:border-box}.icon.sc-ir-date-picker{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}";
const IrDatePickerStyle0 = irDatePickerCss;

const IrDatePicker = /*@__PURE__*/ proxyCustomElement(class IrDatePicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dateChanged = createEvent(this, "dateChanged", 7);
        this.fromDate = undefined;
        this.toDate = undefined;
        this.opens = undefined;
        this.autoApply = undefined;
        this.firstDay = 1;
        this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        this.format = 'MMM DD, YYYY';
        this.separator = '       ';
        this.applyLabel = 'Apply';
        this.cancelLabel = 'Cancel';
        this.fromLabel = 'Form';
        this.toLabel = 'To';
        this.customRangeLabel = 'Custom';
        this.weekLabel = 'W';
        this.disabled = false;
        this.singleDatePicker = false;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.maxSpan = {
            days: 240,
        };
    }
    componentDidLoad() {
        this.dateRangeInput = this.element.querySelector('.date-range-input');
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
        return (h(Host, { key: '3d3d89e5b087602e42d5c46296731d99016d84c2' }, !this.singleDatePicker && (h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "icon", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" }))), h("input", { key: 'bd726704958ac1ad246924da16f0ae7c822fd110', class: "date-range-input", type: "text", disabled: this.disabled })));
    }
    get element() { return this; }
    static get style() { return IrDatePickerStyle0; }
}, [2, "ir-date-picker", {
        "fromDate": [16],
        "toDate": [16],
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
        "maxSpan": [8, "max-span"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-date-picker"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDatePicker);
            }
            break;
    } });
}

export { IrDatePicker as I, defineCustomElement as d };

//# sourceMappingURL=ir-date-picker2.js.map