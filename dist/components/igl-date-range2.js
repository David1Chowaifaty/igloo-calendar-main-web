import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { b as calculateDaysBetweenDates } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-date-range2.js';

const iglDateRangeCss = "@layer wa-utilities {\n  :host([size='small']),\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  :host([size='medium']),\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  :host([size='large']),\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n\n:host {\n  display: flex;\n  width: 100%;\n}\n\n.date-range-shell {\n  position: relative;\n  width: 100%;\n  height: var(--wa-form-control-height);\n  padding: 0 var(--wa-form-control-padding-inline);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.75rem;\n  box-sizing: border-box;\n  cursor: pointer;\n  color: var(--wa-form-control-value-color);\n  font-size: var(--wa-form-control-value-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n\n  transition: background-color var(--wa-transition-normal), border var(--wa-transition-normal), outline var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n}\n.date-range-shell.picker {\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  border-radius: var(--wa-form-control-border-radius);\n}\n\n.date-range-shell.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.date-range-display.date-range-display--disabled {\n  cursor: not-allowed;\n}\n.date-range-shell:focus-within {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n.date-range-input {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n\n.date-range-input[data-state='disabled'] {\n  cursor: not-allowed;\n}\n\n.date-range-shell.picker .date-range-display {\n  background-color: var(--wa-form-control-background-color);\n  padding: 0 var(--wa-form-control-padding-inline);\n}\n.date-range-display {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  pointer-events: none;\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  box-sizing: border-box;\n}\n\n.date-range-icon {\n  margin: 0;\n  padding: 0;\n}\n\n.date-range-date {\n  font-weight: 500;\n}\n\n.date-range-nights {\n  font-weight: 500;\n}\n/*md*/\n@media (min-width: 768px) {\n  :host {\n    width: fit-content;\n  }\n  .date-range-shell {\n    min-width: 290px;\n    width: fit-content;\n  }\n}\n";
const IglDateRangeStyle0 = iglDateRangeCss;

const IglDateRange = /*@__PURE__*/ proxyCustomElement(class IglDateRange extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dateSelectEvent = createEvent(this, "dateSelectEvent", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    size = 'small';
    defaultData;
    disabled = false;
    minDate;
    dateLabel;
    maxDate;
    withDateDifference = true;
    variant = 'default';
    renderAgain = false;
    dateSelectEvent;
    toast;
    totalNights = 0;
    fromDate;
    toDate;
    componentWillLoad() {
        this.initializeDates();
    }
    handleDataChange(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initializeDates();
        }
    }
    initializeDates() {
        if (this.defaultData) {
            if (this.defaultData.fromDate) {
                this.fromDate = new Date(this.defaultData.fromDate);
                this.fromDate.setHours(0, 0, 0, 0);
            }
            if (this.defaultData.toDate) {
                this.toDate = new Date(this.defaultData.toDate);
                this.toDate.setHours(0, 0, 0, 0);
            }
        }
        if (this.fromDate && this.toDate) {
            this.calculateTotalNights();
        }
    }
    calculateTotalNights() {
        this.totalNights = calculateDaysBetweenDates(hooks(this.fromDate).format('YYYY-MM-DD'), hooks(this.toDate).format('YYYY-MM-DD'));
    }
    handleDateSelectEvent(key, data = '') {
        this.dateSelectEvent.emit({ key, data });
    }
    handleDateChange(evt) {
        const { start, end } = evt.detail;
        this.fromDate = start.toDate();
        this.toDate = end.toDate();
        this.calculateTotalNights();
        this.handleDateSelectEvent('selectedDateRange', {
            fromDate: this.fromDate.getTime(),
            toDate: this.toDate.getTime(),
            fromDateStr: start.format('DD MMM YYYY'),
            toDateStr: end.format('DD MMM YYYY'),
            dateDifference: this.totalNights,
        });
        this.renderAgain = !this.renderAgain;
    }
    renderDateSummary(showNights) {
        const fromDateDisplay = hooks(this.fromDate).format('MMM DD, YYYY');
        const toDateDisplay = hooks(this.toDate).format('MMM DD, YYYY');
        const shouldRenderNights = showNights && this.totalNights > 0;
        return (h("div", { class: {
                'date-range-display': true,
                'date-range-display--disabled': this.disabled,
            } }, h("wa-icon", { variant: "regular", name: "calendar" }), h("span", { class: "date-range-date" }, fromDateDisplay), h("wa-icon", { name: "arrow-right" }), h("span", { class: "date-range-date" }, toDateDisplay), shouldRenderNights && (h("span", { class: "date-range-nights" }, this.totalNights + (this.totalNights > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
    }
    render() {
        const showNights = this.variant === 'booking' && this.withDateDifference;
        return (h(Host, { key: '0bebafba8d7aa998122d7af59c3324809f221114', size: this.size }, h("div", { key: 'b060dc3cf93adfe1166e85a9a62444b0ddd8cffe', class: `date-range-shell ${this.disabled ? 'disabled' : ''} ${this.variant === 'booking' ? 'picker' : ''}` }, h("ir-date-range", { key: '3a3f18d202b80537d71442d1ebc408e7e085e87b', maxDate: this.maxDate, class: 'date-range-input', disabled: this.disabled, fromDate: this.fromDate, toDate: this.toDate, minDate: this.minDate, autoApply: true, "data-state": this.disabled ? 'disabled' : 'active', onDateChanged: evt => {
                this.handleDateChange(evt);
            } }), this.renderDateSummary(showNights))));
    }
    static get watchers() { return {
        "defaultData": ["handleDataChange"]
    }; }
    static get style() { return IglDateRangeStyle0; }
}, [1, "igl-date-range", {
        "size": [513],
        "defaultData": [16],
        "disabled": [516],
        "minDate": [1, "min-date"],
        "dateLabel": [1, "date-label"],
        "maxDate": [1, "max-date"],
        "withDateDifference": [4, "with-date-difference"],
        "variant": [1],
        "renderAgain": [32]
    }, undefined, {
        "defaultData": ["handleDataChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-date-range", "ir-date-range"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglDateRange);
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglDateRange as I, defineCustomElement as d };

//# sourceMappingURL=igl-date-range2.js.map