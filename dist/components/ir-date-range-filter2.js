import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$4 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irDateRangeFilterCss = "@layer wa-utilities {\n  .sc-ir-date-range-filter-h[size='small'],\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .sc-ir-date-range-filter-h[size='medium'],\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .sc-ir-date-range-filter-h[size='large'],\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n\n.sc-ir-date-range-filter-h {\n  display: block;\n}\n\n\n.drf-container.sc-ir-date-range-filter {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  height: var(--wa-form-control-height);\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  width: 100%;\n  overflow: visible;\n}\n\n.drf-container.sc-ir-date-range-filter:focus-within {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n\n.drf-field.sc-ir-date-range-filter {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  gap: 0.25rem;\n  padding-inline: var(--wa-form-control-padding-inline, 0.75rem);\n  height: 100%;\n  min-width: 0;\n}\n\n\n.drf-divider.sc-ir-date-range-filter {\n  display: inline-block;\n  width: 1px;\n  height: 55%;\n  background-color: var(--wa-color-neutral-border-quiet, #e5e7eb);\n  flex-shrink: 0;\n}\n\n\n.drf-text-btn.sc-ir-date-range-filter {\n  all: unset;\n  flex: 1;\n  font-size: var(--wa-form-control-value-font-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  color: var(--wa-form-control-value-color, #111827);\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n  line-height: var(--wa-form-control-value-line-height);\n}\n\n.drf-text-btn--placeholder.sc-ir-date-range-filter {\n  color: var(--wa-form-control-placeholder-color);\n\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.drf-text-btn.sc-ir-date-range-filter:focus-visible {\n  outline: none;\n}\n\n\n.drf-clear-btn.sc-ir-date-range-filter {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  cursor: pointer;\n  color: var(--wa-color-text-quiet, #9ca3af);\n  border-radius: 50%;\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 0.75rem;\n  transition: color 0.15s ease;\n}\n\n.drf-clear-btn.sc-ir-date-range-filter:hover {\n  color: var(--wa-color-text-normal, #374151);\n}\n\n.drf-clear-btn.sc-ir-date-range-filter:focus-visible {\n  outline: var(--wa-focus-ring);\n  border-radius: 50%;\n}\n\n\n.drf-cal-trigger.sc-ir-date-range-filter {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 0.375rem;\n  background-color: var(--wa-color-neutral-fill-quiet, #f0f0f0);\n  cursor: pointer;\n  color: var(--wa-color-text-quiet, #6b7280);\n  transition: background-color 0.15s ease;\n}\n\n.drf-cal-trigger.sc-ir-date-range-filter:hover {\n  background-color: var(--wa-color-neutral-fill-normal, #e0e0e0);\n}\n\n.drf-cal-trigger.sc-ir-date-range-filter:focus-visible {\n  outline: var(--wa-focus-ring);\n}\n\n\n.drf-date-select.sc-ir-date-range-filter::part(input-base) {\n  display: none !important;\n}\n\n\n.drf-date-select.sc-ir-date-range-filter::part(body) {\n  flex-direction: row;\n  gap: 1rem;\n}\n\n\n.drf-quick-actions.sc-ir-date-range-filter {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  box-sizing: border-box;\n  width: 200px;\n}";
const IrDateRangeFilterStyle0 = irDateRangeFilterCss;

const IrDateRangeFilter = /*@__PURE__*/ proxyCustomElement(class IrDateRangeFilter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("div", { key: '14a29389cb989d15bd3eb0785324810c1b8d37d1', class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, h("span", { key: 'b5e39b804544f339aa85b07c619148e680b2970d', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector"), h("div", { key: '4f44407ed2b54013a85751f3ba0e99b105bccc73', class: "drf-field" }, h("button", { key: '16f5e1ede5df252c5132b9344879e27d146d70d4', class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.openDatePicker(), "aria-label": fromLabel ? `Start date: ${fromLabel}` : 'Select start date' }, fromLabel ?? 'From'), fromLabel && (h("button", { key: '6779e509d5fe2b637c8b08fa54e8881d892a9039', class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": "Clear start date" }, h("wa-icon", { key: '6314260ae2bba5002dfbca20aa33684947e0b6c8', name: "xmark" }))), h("ir-date-select", { key: '105ca1fedde2115a25b57ac4e387b8d07448f0ed', ref: el => (this.fromDateSelectRef = el), date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: "From", minDate: this.minDate, maxDate: fromMaxDate, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, h("button", { key: 'fb61e4893831c1392279fb567b6293a7c1ab65f8', slot: "trigger", class: "drf-cal-trigger", "aria-label": "Open start date calendar" }, h("wa-icon", { key: 'd914451a318c45b42bb61655bf30d797323efa32', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '3555bf2332bcea465a80dc6574a89e3768a0c8ce', class: "drf-quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set start date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef.closeDatePicker();
            } }, action.label))))))), h("span", { key: '88ecbb000ea0472f34e90e251135a10355fbc65c', class: "drf-divider", "aria-hidden": "true" }), h("div", { key: '05d60fe1f8d4e4a11f372c77b077bd617acfe348', class: "drf-field" }, h("button", { key: 'bb59c2db6eb76d85b0f39defc85e21327856f82e', class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.openDatePicker(), "aria-label": toLabel ? `End date: ${toLabel}` : 'Select end date' }, toLabel ?? 'To'), toLabel && (h("button", { key: 'f641d1247b69708557eb7c86b8c7f92d90c2f0ee', class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": "Clear end date" }, h("wa-icon", { key: 'c04b92838f5c61382f0e5e7b603aa8415ba8de64', name: "xmark" }))), h("ir-date-select", { key: 'db6d01a25206aa1f6849df2ba113eedc5266ffe4', ref: el => (this.toDateSelectRef = el), date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: "To", minDate: toMinDate, maxDate: this.maxDate, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, h("button", { key: 'db95da9eee3760181d34c9748f21484cb1d2989a', slot: "trigger", class: "drf-cal-trigger", "aria-label": "Open end date calendar" }, h("wa-icon", { key: 'a5ba4ca90d7cdadf9f925168ad206bcd45792dd1', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '0299d1129892481515d477e66ac19fee8ab85414', class: "drf-quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'to');
                this.toDateSelectRef.closeDatePicker();
            } }, action.label))))))), h("span", { key: '228dd1262732e6fd1de5322fe879eb48651ce757', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage)));
    }
    static get watchers() { return {
        "fromDate": ["onFromDateChange"],
        "toDate": ["onToDateChange"]
    }; }
    static get style() { return IrDateRangeFilterStyle0; }
}, [2, "ir-date-range-filter", {
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