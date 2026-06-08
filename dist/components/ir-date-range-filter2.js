import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$4 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irDateRangeFilterCss = "@layer wa-utilities {\n  :host([size='small']),\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  :host([size='medium']),\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  :host([size='large']),\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n\n:host {\n  display: block;\n}\n\n/* ── Outer container ──────────────────────────────────── */\n.drf-container {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  height: var(--wa-form-control-height);\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  width: 100%;\n  overflow: visible;\n}\n\n:host([aria-invalid='true']) .drf-container {\n  border-color: var(--ir-color-border-error, var(--wa-color-danger-border-loud));\n  outline-color: var(--ir-color-border-error, var(--wa-color-danger-border-loud));\n\n  border-top-width: var(--error-border-width) !important;\n  border-left-width: var(--error-border-width) !important;\n  border-right-width: var(--error-border-width) !important;\n  border-bottom-width: var(--error-border-width) !important;\n}\n\n.drf-container:focus-within {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n/* ── Each date field (from / to) ──────────────────────── */\n.drf-field {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  gap: 0.25rem;\n  padding-inline: var(--wa-form-control-padding-inline, 0.75rem);\n  height: 100%;\n  min-width: 0;\n}\n\n/* ── Vertical divider between from and to ─────────────── */\n.drf-divider {\n  display: inline-block;\n  width: 1px;\n  height: 55%;\n  background-color: var(--wa-color-neutral-border-quiet, #e5e7eb);\n  flex-shrink: 0;\n}\n\n/* ── Date text / placeholder button ──────────────────── */\n.drf-text-btn {\n  all: unset;\n  flex: 1;\n  font-size: var(--wa-form-control-value-font-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  color: var(--wa-form-control-value-color, #111827);\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n  line-height: var(--wa-form-control-value-line-height);\n}\n\n.drf-text-btn--placeholder {\n  color: var(--wa-form-control-placeholder-color);\n\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.drf-text-btn:focus-visible {\n  outline: none;\n}\n\n/* ── Clear (×) button ─────────────────────────────────── */\n.drf-clear-btn {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  cursor: pointer;\n  color: var(--wa-color-text-quiet, #9ca3af);\n  border-radius: 50%;\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 0.75rem;\n  transition: color 0.15s ease;\n}\n\n.drf-clear-btn:hover {\n  color: var(--wa-color-text-normal, #374151);\n}\n\n.drf-clear-btn:focus-visible {\n  outline: var(--wa-focus-ring);\n  border-radius: 50%;\n}\n\n/* ── Calendar icon trigger button ────────────────────── */\n.drf-cal-trigger {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 0.375rem;\n  background-color: var(--wa-color-neutral-fill-quiet, #f0f0f0);\n  cursor: pointer;\n  color: var(--wa-color-text-quiet, #6b7280);\n  transition: background-color 0.15s ease;\n}\n\n.drf-cal-trigger:hover {\n  background-color: var(--wa-color-neutral-fill-normal, #e0e0e0);\n}\n\n.drf-cal-trigger:focus-visible {\n  outline: var(--wa-focus-ring);\n}\n\n/* ── ir-date-select: hide its own input shell ─────────── */\n.drf-date-select::part(input-base) {\n  display: none !important;\n}\n\n/* ── Popup body: calendar + quick actions side-by-side ── */\n.drf-date-select::part(body) {\n  flex-direction: row;\n  gap: 1rem;\n}\n\n/* ── Quick-action preset buttons (inside popup) ───────── */\n.drf-quick-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  box-sizing: border-box;\n  width: 200px;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n  border-width: 0;\n}\n";
const IrDateRangeFilterStyle0 = irDateRangeFilterCss;

const IrDateRangeFilter = /*@__PURE__*/ proxyCustomElement(class IrDateRangeFilter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.datesChanged = createEvent(this, "datesChanged", 7);
        this.dateCleared = createEvent(this, "dateCleared", 7);
    }
    /** Configurable quick-date preset buttons shown alongside each calendar. */
    quickDates = [
        { label: 'Today', getDate: () => hooks() },
        { label: '30 Days Ago', getDate: () => hooks().subtract(30, 'days') },
        { label: '60 Days Ago', getDate: () => hooks().subtract(60, 'days') },
        { label: '90 Days Ago', getDate: () => hooks().subtract(90, 'days') },
        { label: '1 Year Ago', getDate: () => hooks().subtract(1, 'year') },
    ];
    /** Controlled start date in YYYY-MM-DD format. */
    fromDate;
    /** Controlled end date in YYYY-MM-DD format. */
    toDate;
    /** Size variant passed through to inner form controls. */
    size = 'small';
    /** Whether to show the quick-action preset buttons in each calendar popup. */
    showQuickActions = true;
    /** Earliest selectable date in YYYY-MM-DD format. */
    minDate;
    /** Latest selectable date in YYYY-MM-DD format. */
    maxDate;
    dates = { from: null, to: null };
    liveMessage = '';
    /** Fired whenever either date changes. Payload contains ISO date strings or null. */
    datesChanged;
    /** Fired when the user explicitly clears a date field. */
    dateCleared;
    /** Inner parts of ir-date-select that are re-exported by this component. */
    static dateSelectParts = ['base', 'anchor', 'combobox', 'body'];
    /** Builds an `exportparts` string that re-exposes ir-date-select parts under a from-/to- prefix. */
    exportPartsFor(side) {
        return IrDateRangeFilter.dateSelectParts.map(part => `${part}:${side}-${part}`).join(', ');
    }
    groupId = `date-range-${Math.random().toString(36).substring(2, 9)}`;
    toDateSelectRef;
    fromDateSelectRef;
    hasControlledFromDate = false;
    hasControlledToDate = false;
    componentWillLoad() {
        this.hasControlledFromDate = this.fromDate !== undefined;
        this.hasControlledToDate = this.toDate !== undefined;
        this.syncInitialDates();
    }
    onFromDateChange(newValue) {
        this.hasControlledFromDate = this.hasControlledFromDate || newValue !== undefined;
        this.syncControlledDates('from', newValue);
    }
    onToDateChange(newValue) {
        this.hasControlledToDate = this.hasControlledToDate || newValue !== undefined;
        this.syncControlledDates('to', newValue);
    }
    /** Updates one side of the date range and emits the change. */
    selectDate(date, type) {
        this.dates = { ...this.dates, [type]: date };
        this.emitChange();
    }
    /** Clears one side of the date range. */
    clearDate(type) {
        const pickerRef = type === 'from' ? this.fromDateSelectRef : this.toDateSelectRef;
        pickerRef?.clearDatePicker();
        this.selectDate(null, type);
        this.dateCleared.emit({ field: type });
    }
    syncInitialDates() {
        this.dates = {
            from: this.hasControlledFromDate ? this.parseDate(this.fromDate) : this.dates.from,
            to: this.hasControlledToDate ? this.parseDate(this.toDate) : this.dates.to,
        };
    }
    syncControlledDates(changedField, changedValue) {
        this.dates = {
            from: changedField === 'from' ? this.parseDate(changedValue) : this.hasControlledFromDate ? this.parseDate(this.fromDate) : this.dates.from,
            to: changedField === 'to' ? this.parseDate(changedValue) : this.hasControlledToDate ? this.parseDate(this.toDate) : this.dates.to,
        };
    }
    parseDate(value) {
        if (!value) {
            return null;
        }
        const parsed = hooks(value, 'YYYY-MM-DD', true);
        return parsed.isValid() ? parsed : null;
    }
    emitChange() {
        const from = this.dates.from?.format('YYYY-MM-DD') ?? null;
        const to = this.dates.to?.format('YYYY-MM-DD') ?? null;
        this.datesChanged.emit({ from, to });
        this.liveMessage = `Date range updated. From ${from ?? 'not set'} to ${to ?? 'not set'}.`;
    }
    /**
     * Caps the from-picker's max date at the to-date (or the global maxDate),
     * whichever is earlier.
     */
    getFromMaxDate(toStr) {
        if (!toStr)
            return this.maxDate;
        if (!this.maxDate)
            return toStr;
        return toStr < this.maxDate ? toStr : this.maxDate;
    }
    /**
     * Floors the to-picker's min date at the from-date (or the global minDate),
     * whichever is later.
     */
    getToMinDate(fromStr) {
        if (!fromStr)
            return this.minDate;
        if (!this.minDate)
            return fromStr;
        return fromStr > this.minDate ? fromStr : this.minDate;
    }
    render() {
        const fromLabel = this.dates.from?.format('YYYY-MM-DD') ?? null;
        const toLabel = this.dates.to?.format('YYYY-MM-DD') ?? null;
        const fromMaxDate = this.getFromMaxDate(toLabel);
        const toMinDate = this.getToMinDate(fromLabel);
        return (h("div", { key: '6a86fb4180ba5ef19dcd3e1dcba2679fd1c753b9', part: "container", class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, h("span", { key: 'be1740058eb9e1055878615d4569842cf3e0b01a', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector"), h("div", { key: 'cc7d82a973413c9c907a02c5cb419efde753c63a', part: "field field-from", class: "drf-field" }, h("button", { key: 'f52de99f4011a4275f0457c88a1cc724fcdd34e6', part: "text-btn", class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.openDatePicker(), "aria-label": fromLabel ? `Start date: ${fromLabel}` : 'Select start date' }, fromLabel ?? 'From'), fromLabel && (h("button", { key: '4f61318a084345f793228914d38b03639584b8ae', part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": "Clear start date" }, h("wa-icon", { key: 'd4e17ac4119603b223c420dcade943598eb87160', name: "xmark" }))), h("ir-date-select", { key: '5c14d238b5a6bb29f8cd9cf51a9b7ff5fbaf2017', ref: el => (this.fromDateSelectRef = el), exportparts: this.exportPartsFor('from'), date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: "From", minDate: this.minDate, maxDate: fromMaxDate, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, h("button", { key: '70c5dc38576d7b3374e4836a39f41a655cea331d', slot: "trigger", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open start date calendar" }, h("wa-icon", { key: 'cd0d39c24fa6a802efe5242817daaab9eefce684', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: 'e635bc35e827121f6879e2be42f03847fd828aa8', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": `Set start date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef.closeDatePicker();
            } }, action.label))))))), h("span", { key: 'b2fdda5e9a979257aaaf3d70ef5c022d1e38bfb7', part: "divider", class: "drf-divider", "aria-hidden": "true" }), h("div", { key: '6309b51fb8108dd8e5930481b23257e318739ed4', part: "field field-to", class: "drf-field" }, h("button", { key: '305c76cc8973d6c275166d1e5be9f16039669957', part: "text-btn", class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.openDatePicker(), "aria-label": toLabel ? `End date: ${toLabel}` : 'Select end date' }, toLabel ?? 'To'), toLabel && (h("button", { key: 'c20e44de4808b56381fe89a7deb2726ab752875f', part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": "Clear end date" }, h("wa-icon", { key: '4e64c13262764cd5d7ce293cd57969b3258302e1', name: "xmark" }))), h("ir-date-select", { key: '36101b588a90e81afb7c87e9a784f3263da4f3e5', ref: el => (this.toDateSelectRef = el), exportparts: this.exportPartsFor('to'), date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: "To", minDate: toMinDate, maxDate: this.maxDate, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, h("button", { key: '039e20016363d53292ac2113f494e60835077bf1', slot: "trigger", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open end date calendar" }, h("wa-icon", { key: 'b78a8fd488f79f2212333989e6c85f2f63ccc109', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '9fe1784147492d9f9ce1b927b0d0459904f1cc79', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, disabled: this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                this.selectDate(action.getDate(), 'to');
                this.toDateSelectRef.closeDatePicker();
            } }, action.label))))))), h("span", { key: 'ba83be0f8b151a2f3d43b1a59b992190731d0e35', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage)));
    }
    static get watchers() { return {
        "fromDate": ["onFromDateChange"],
        "toDate": ["onToDateChange"]
    }; }
    static get style() { return IrDateRangeFilterStyle0; }
}, [1, "ir-date-range-filter", {
        "quickDates": [16],
        "fromDate": [1, "from-date"],
        "toDate": [1, "to-date"],
        "size": [513],
        "showQuickActions": [4, "show-quick-actions"],
        "minDate": [1, "min-date"],
        "maxDate": [1, "max-date"],
        "dates": [32],
        "liveMessage": [32]
    }, undefined, {
        "fromDate": ["onFromDateChange"],
        "toDate": ["onToDateChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-date-range-filter", "ir-air-date-picker", "ir-custom-button", "ir-date-select", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDateRangeFilter);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-date-select":
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

export { IrDateRangeFilter as I, defineCustomElement as d };

//# sourceMappingURL=ir-date-range-filter2.js.map