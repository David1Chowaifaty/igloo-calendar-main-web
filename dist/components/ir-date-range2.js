import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { C as ClickOutside } from './ClickOutside.js';
import { l as locales } from './locales.store.js';
import { c as calculateDaysBetweenDates } from './booking.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$2 } from './ir-custom-date-range2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irDateRangeCss = ":host{display:flex;min-width:280px}.igl-date-range__popup{--arrow-size:0.375rem;--show-duration:100ms;--hide-duration:100ms;pointer-events:auto;width:100%}.igl-date-range__popup::part(arrow){background-color:var(--wa-color-surface-default);border-top:none;border-left:none;border-bottom:solid var(--wa-panel-border-width) var(--wa-color-surface-border);border-right:solid var(--wa-panel-border-width) var(--wa-color-surface-border);box-shadow:none}.igl-date-range__trigger,.igl-date-range__input{width:100%}.igl-date-range__control{width:100%;display:flex}.igl-date-range__control[aria-disabled='true']{opacity:0.5;cursor:not-allowed !important;pointer-events:none}.igl-date-range__calendar{display:flex;flex-direction:column;width:max-content;padding:var(--wa-space-m);background-color:var(--wa-color-surface-default);border:var(--wa-panel-border-width) solid var(--wa-color-surface-border);border-radius:var(--wa-panel-border-radius);border-style:var(--wa-panel-border-style);box-shadow:var(--wa-shadow-l);color:var(--wa-color-text-normal);user-select:none;-webkit-user-select:none}.igl-date-range__nights{font-weight:500;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}";
const IrDateRangeStyle0 = irDateRangeCss;

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
const IrDateRange = /*@__PURE__*/ proxyCustomElement(class IrDateRange extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dateSelectEvent = createEvent(this, "dateSelectEvent", 7);
        this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
        this.dateRangeShow = createEvent(this, "dateRangeShow", 7);
        this.dateRangeHide = createEvent(this, "dateRangeHide", 7);
    }
    get el() { return this; }
    /**
     * Controls the visual size of the input trigger.
     * @reflect
     */
    size = 'small';
    /**
     * Initial date values. Expects `{ fromDate: string | Date, toDate: string | Date }`.
     * Re-initializes dates whenever this prop reference changes.
     */
    defaultData;
    /**
     * When `true`, the picker is disabled and cannot be opened.
     * @reflect
     */
    disabled = false;
    /**
     * ISO date string (YYYY-MM-DD) for the earliest selectable date.
     */
    minDate;
    /**
     * Optional label text shown above the input (forwarded to ir-input).
     */
    dateLabel;
    /**
     * ISO date string (YYYY-MM-DD) for the latest selectable date.
     */
    maxDate;
    /**
     * When `true` and `variant="booking"`, a nights badge is shown inside the input.
     */
    withDateDifference = true;
    /**
     * `"booking"` shows the nights badge; `"default"` hides it.
     */
    variant = 'default';
    /**
     * Optional hint text rendered below the input.
     */
    hint;
    /** Whether the calendar popup is open. */
    isActive = false;
    /** Currently selected check-in date. */
    fromDate = hooks().toDate();
    /** Currently selected check-out date. */
    toDate = hooks().add(1, 'day').toDate();
    /** Mirrors the `aria-invalid` attribute so the input reflects validity state. */
    isInvalid;
    /** Computed number of nights between the selected dates. Triggers re-render on change. */
    totalNights = 0;
    /**
     * Legacy event – emits `{ key, data }` for backward-compatible consumers.
     * @deprecated Prefer `dateRangeChange`.
     */
    dateSelectEvent;
    /**
     * Emits the selected check-in / check-out as Moment objects.
     */
    dateRangeChange;
    /** Fired when the calendar popup opens. */
    dateRangeShow;
    /** Fired when the calendar popup closes. */
    dateRangeHide;
    static instanceCounter = 0;
    popupId;
    componentWillLoad() {
        IrDateRange.instanceCounter += 1;
        this.popupId = `ir-date-range-popup-${IrDateRange.instanceCounter}`;
        this.initializeDates();
    }
    /** Re-initializes dates when `defaultData` reference changes. */
    handleDataChange(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initializeDates();
        }
    }
    /** Syncs `isInvalid` with the reflected `aria-invalid` attribute. */
    handleAriaInvalidChange(newValue) {
        this.isInvalid = newValue;
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
    }
    /** Opens the calendar popup. */
    async openDatePicker() {
        this.isActive = true;
        this.dateRangeShow.emit();
    }
    /** Closes the calendar popup. Also invoked automatically on outside clicks via `@ClickOutside`. */
    async closeDatePicker() {
        if (!this.isActive)
            return;
        this.isActive = false;
        this.dateRangeHide.emit();
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
    get formattedLabel() {
        const from = hooks(this.fromDate).format('MMM DD, YYYY');
        const to = hooks(this.toDate).format('MMM DD, YYYY');
        return `${from} → ${to}`;
    }
    render() {
        const showNights = this.variant === 'booking' && this.withDateDifference;
        return (h("wa-popup", { key: 'c7cd1482316de14eac48e2fb59ff4ef6cbfa6f6d', part: "popup", arrow: true, placement: "bottom", flip: true, shift: true, "auto-size": "vertical", "auto-size-padding": 10, active: this.isActive, class: "igl-date-range__popup" }, h("div", { key: '0955f4c043930dc228fce18fa50f5a09dc65e6a8', slot: "anchor", part: "anchor", class: "igl-date-range__trigger" }, h("div", { key: '96ef92c93143bff038f2a8768d45a5cd8e1ea092', part: "combobox", class: "igl-date-range__control", role: "combobox", tabindex: this.disabled ? -1 : 0, "aria-haspopup": "dialog", "aria-expanded": this.isActive ? 'true' : 'false', "aria-controls": this.popupId, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": "Select date range", onClick: !this.disabled ? this.togglePicker.bind(this) : undefined, onKeyDown: !this.disabled ? this.handleKeyDown.bind(this) : undefined }, h("ir-input", { key: '35862b446fb0fa93cc91698d6bc0f2eba5c61ee3', part: "input", disabled: this.disabled, class: "igl-date-range__input", readonly: true, value: this.formattedLabel, "aria-invalid": this.isInvalid, "aria-expanded": String(this.isActive), "aria-disabled": this.disabled ? 'true' : undefined }, h("wa-icon", { key: 'a0fdb0669fc9be883362cdc7ed636fb1f9f285c1', part: "calendar-icon", slot: "start", variant: "regular", name: "calendar" }), showNights && this.totalNights > 0 && (h("span", { key: '6a6c4f10c8231cc051cee5e9f8b2f4a7ff449ef2', part: "nights-badge", slot: "end", class: "igl-date-range__nights" }, this.totalNights, " ", this.totalNights > 1 ? locales.entries.Lcz_Nights : locales.entries.Lcz_Night))))), h("div", { key: '035c1c990560e87fb55216f075327bddef1d4c71', part: "body", id: this.popupId, class: "igl-date-range__calendar", role: "dialog", "aria-modal": "false", "aria-label": "Date range selection dialog" }, h("ir-custom-date-range", { key: '5d2bddfb6fbfceeb51906af4a285e90a0b58441c', part: "calendar", exportparts: "base: calendar-base, calendar, calendar-header, month-navigation, nav-prev, nav-next, month-label, weekday-row, weekday, days-grid, week-row, day-cell, day-button", style: { '--cal-button-size': '35px' }, fromDate: hooks(this.fromDate), toDate: hooks(this.toDate), minDate: this.minDate ? hooks(this.minDate) : undefined, maxDate: this.maxDate ? hooks(this.maxDate) : undefined, onDateChange: e => this.handleCustomDateChange(e) }))));
    }
    static get watchers() { return {
        "defaultData": ["handleDataChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
    static get style() { return IrDateRangeStyle0; }
}, [1, "ir-date-range", {
        "size": [513],
        "defaultData": [16],
        "disabled": [516],
        "minDate": [1, "min-date"],
        "dateLabel": [1, "date-label"],
        "maxDate": [1, "max-date"],
        "withDateDifference": [4, "with-date-difference"],
        "variant": [1],
        "hint": [1],
        "isActive": [32],
        "fromDate": [32],
        "toDate": [32],
        "isInvalid": [32],
        "totalNights": [32],
        "openDatePicker": [64],
        "closeDatePicker": [64]
    }, undefined, {
        "defaultData": ["handleDataChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }]);
__decorate([
    ClickOutside()
], IrDateRange.prototype, "closeDatePicker", null);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-date-range", "ir-custom-date-range", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDateRange);
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

export { IrDateRange as I, defineCustomElement as d };

//# sourceMappingURL=ir-date-range2.js.map