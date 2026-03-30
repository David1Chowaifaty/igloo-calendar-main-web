import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { C as ClickOutside } from './ClickOutside.js';
import { l as locales } from './locales.store.js';
import { c as calculateDaysBetweenDates } from './booking.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$2 } from './ir-custom-date-range2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const iglDateRangeCss = ":host{display:flex;min-width:280px}.igl-date-range__popup{--arrow-size:0.375rem;--show-duration:100ms;--hide-duration:100ms;pointer-events:auto;width:100%}.igl-date-range__popup::part(arrow){background-color:var(--wa-color-surface-default);border-top:none;border-left:none;border-bottom:solid var(--wa-panel-border-width) var(--wa-color-surface-border);border-right:solid var(--wa-panel-border-width) var(--wa-color-surface-border);box-shadow:none}.igl-date-range__trigger,.igl-date-range__input{width:100%}.igl-date-range__control{width:100%;display:flex}.igl-date-range__control[aria-disabled='true']{opacity:0.5;cursor:not-allowed !important;pointer-events:none}.igl-date-range__calendar{display:flex;flex-direction:column;width:max-content;padding:var(--wa-space-m);background-color:var(--wa-color-surface-default);border:var(--wa-panel-border-width) solid var(--wa-color-surface-border);border-radius:var(--wa-panel-border-radius);border-style:var(--wa-panel-border-style);box-shadow:var(--wa-shadow-l);color:var(--wa-color-text-normal);user-select:none;-webkit-user-select:none}.igl-date-range__nights{font-weight:500;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}";
const IglDateRangeStyle0 = iglDateRangeCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IglDateRange = /*@__PURE__*/ proxyCustomElement(class IglDateRange extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dateSelectEvent = createEvent(this, "dateSelectEvent", 7);
        this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    get el() { return this; }
    size = 'small';
    defaultData;
    disabled = false;
    minDate;
    dateLabel;
    maxDate;
    withDateDifference = true;
    variant = 'default';
    hint;
    renderAgain = false;
    isActive = false;
    dateSelectEvent;
    dateRangeChange;
    toast;
    totalNights = 0;
    static instanceCounter = 0;
    popupId;
    fromDate = hooks().toDate();
    toDate = hooks().add(1, 'day').toDate();
    isInvalid;
    componentWillLoad() {
        IglDateRange.instanceCounter += 1;
        this.popupId = `igl-date-range-popup-${IglDateRange.instanceCounter}`;
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
    handleCustomDateChange(evt) {
        const { start, end } = evt.detail;
        if (!start || !end)
            return;
        this.fromDate = start;
        this.toDate = end;
        this.calculateTotalNights();
        const startMoment = hooks(start);
        const endMoment = hooks(end);
        this.handleDateSelectEvent('selectedDateRange', {
            fromDate: start.getTime(),
            toDate: end.getTime(),
            fromDateStr: startMoment.format('DD MMM YYYY'),
            toDateStr: endMoment.format('DD MMM YYYY'),
            dateDifference: this.totalNights,
        });
        this.dateRangeChange.emit({ checkIn: startMoment, checkOut: endMoment });
        this.closeDatePicker();
        this.renderAgain = !this.renderAgain;
    }
    async openDatePicker() {
        this.isActive = true;
    }
    async closeDatePicker() {
        this.isActive = false;
    }
    togglePicker() {
        this.isActive ? this.closeDatePicker() : this.openDatePicker();
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.togglePicker();
                break;
            case 'Escape':
                if (this.isActive) {
                    event.preventDefault();
                    this.closeDatePicker();
                }
                break;
        }
    }
    handleAriaInvalidChange(newValue) {
        this.isInvalid = newValue;
    }
    get label() {
        const from = hooks(this.fromDate).format('MMM DD, YYYY');
        const to = hooks(this.toDate).format('MMM DD, YYYY');
        return `${from} → ${to}`;
    }
    render() {
        const showNights = this.variant === 'booking' && this.withDateDifference;
        return (h("wa-popup", { key: '4b7ff0a84b5fa5dce6db8ae896684cfc7fe79a90', arrow: true, part: "base", placement: "bottom", flip: true, shift: true, "auto-size": "vertical", "auto-size-padding": 10, active: this.isActive, class: "igl-date-range__popup" }, h("div", { key: 'ea86000b818a0780ce61e1e1e38cb3a4b41d246c', slot: "anchor", part: "anchor", class: "igl-date-range__trigger" }, h("div", { key: 'd3887b927bd66e1bca8f1f9f05895975a5a2d4a6', part: "combobox", class: "igl-date-range__control", role: "combobox", tabindex: this.disabled ? -1 : 0, "aria-haspopup": "dialog", "aria-expanded": this.isActive ? 'true' : 'false', "aria-controls": this.popupId, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": "Select date range", onClick: !this.disabled ? this.togglePicker.bind(this) : undefined, onKeyDown: !this.disabled ? this.handleKeyDown.bind(this) : undefined }, h("ir-input", { key: 'fb99158cbc2cec477c2356d6717afabd428ecc8a', disabled: this.disabled, class: "igl-date-range__input", readonly: true, value: this.label, "aria-invalid": this.isInvalid, "aria-expanded": String(this.isActive), "aria-disabled": this.disabled ? 'true' : undefined }, h("wa-icon", { key: 'd3701f6efb59a9b168fed6f66dcbf36ad33b7d25', slot: "start", variant: "regular", name: "calendar" }), showNights && this.totalNights > 0 && (h("span", { key: 'e6e1a54aac673d2b144559e1c48348e6e88f2888', slot: "end", class: "igl-date-range__nights" }, this.totalNights, " ", this.totalNights > 1 ? locales.entries.Lcz_Nights : locales.entries.Lcz_Night))))), h("div", { key: '59191d5ae697bfc88088152cb641e9114d33c04a', part: "body", id: this.popupId, class: "igl-date-range__calendar", role: "dialog", "aria-modal": "false", "aria-label": "Date range selection dialog" }, h("ir-custom-date-range", { key: '0633e43d67709da5383c50351e0b419f8683180b', style: { '--cal-button-size': '35px' }, fromDate: hooks(this.fromDate), toDate: hooks(this.toDate), minDate: this.minDate ? hooks(this.minDate) : undefined, maxDate: this.maxDate ? hooks(this.maxDate) : undefined, onDateChange: e => this.handleCustomDateChange(e) }))));
    }
    static get watchers() { return {
        "defaultData": ["handleDataChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
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
        "hint": [1],
        "renderAgain": [32],
        "isActive": [32],
        "fromDate": [32],
        "toDate": [32],
        "isInvalid": [32],
        "openDatePicker": [64],
        "closeDatePicker": [64]
    }, undefined, {
        "defaultData": ["handleDataChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }]);
__decorate([
    ClickOutside()
], IglDateRange.prototype, "closeDatePicker", null);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-date-range", "ir-custom-date-range", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglDateRange);
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglDateRange as I, defineCustomElement as d };

//# sourceMappingURL=igl-date-range2.js.map