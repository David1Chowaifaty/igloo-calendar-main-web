import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$4 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irDateRangeFilterCss = "@layer wa-utilities {\n  .sc-ir-date-range-filter-h[size='small'],\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .sc-ir-date-range-filter-h[size='medium'],\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .sc-ir-date-range-filter-h[size='large'],\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n.sc-ir-date-range-filter-h {\n  display: block;\n}\n\n\n.date-ranger-filters__dates.sc-ir-date-range-filter {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  position: relative;\n  height: var(--wa-form-control-height);\n  cursor: text;\n  color: var(--wa-form-control-value-color);\n  font-size: var(--wa-form-control-value-font-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  vertical-align: middle;\n  width: 100%;\n  transition-timing-function: var(--wa-transition-easing);\n  background-color: var(--wa-form-control-background-color);\n  box-shadow: var(--box-shadow);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  padding: 0 var(--wa-form-control-padding-inline);\n}\n\n.date-ranger-filters__dates.sc-ir-date-range-filter:focus-within {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n\n.date-ranger-filters__cal-icon.sc-ir-date-range-filter {\n  color: var(--wa-color-text-quiet, #9ca3af);\n  flex-shrink: 0;\n  margin-inline-end: 0.25rem;\n}\n\n\n.date-ranger-filters__date-select.sc-ir-date-range-filter::part(input-base) {\n  border: none !important;\n  border-radius: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n  padding-inline: 0;\n  height: 2rem;\n}\n\n\n.date-ranger-filters__date-select.sc-ir-date-range-filter::part(body) {\n  flex-direction: row;\n  gap: 1rem;\n}\n\n\n.date-ranger-filters__date-select.--from.sc-ir-date-range-filter {\n  z-index: 1;\n}\n\n.date-ranger-filters__date-select.--to[open].sc-ir-date-range-filter {\n  z-index: 3;\n}\n\n\n.date-ranger-filters__quick-actions.sc-ir-date-range-filter {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  \n  box-sizing: border-box;\n  \n  width: 200px;\n}\n\n\n.date-ranger-filters__arrow.sc-ir-date-range-filter {\n  color: var(--wa-color-text-quiet, #9ca3af);\n  user-select: none;\n  flex-shrink: 0;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n\n.date-range-filters__date-select-trigger.sc-ir-date-range-filter {\n  all: unset;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-family: inherit;\n  color: var(--wa-color-text-normal, #111827);\n  height: 2rem;\n  padding-inline: 0.25rem;\n  white-space: nowrap;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 40px;\n}\n\n.date-range-filters__placeholder.sc-ir-date-range-filter {\n  color: var(--wa-color-text-quiet, #9ca3af);\n}\n\n.date-range-filters__date-select-trigger.sc-ir-date-range-filter:focus-visible {\n  outline: none;\n}";
const IrDateRangeFilterStyle0 = irDateRangeFilterCss;

const IrDateRangeFilter = /*@__PURE__*/ proxyCustomElement(class IrDateRangeFilter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.datesChanged = createEvent(this, "datesChanged", 7);
    }
    /** Quick date preset buttons */
    quickDates = [
        { label: 'Today', getDate: () => hooks() },
        { label: '30 Days Ago', getDate: () => hooks().subtract(30, 'days') },
        { label: '60 Days Ago', getDate: () => hooks().subtract(60, 'days') },
        { label: '90 Days Ago', getDate: () => hooks().subtract(90, 'days') },
        { label: '1 Year Ago', getDate: () => hooks().subtract(1, 'year') },
    ];
    /** Controlled start date (YYYY-MM-DD) */
    fromDate;
    /** Controlled end date (YYYY-MM-DD) */
    toDate;
    size = 'small';
    /** Show quick action buttons */
    showQuickActions = true;
    dates = { from: null, to: null };
    liveMessage = '';
    datesChanged;
    groupId = `date-range-${Math.random().toString(36).substring(2, 9)}`;
    toDateSelectRef;
    fromDateSelectRef;
    componentWillLoad() {
        this.dates = {
            from: this.fromDate ? hooks(this.fromDate) : null,
            to: this.toDate ? hooks(this.toDate) : null,
        };
    }
    onFromDateChange(newValue) {
        this.dates = { ...this.dates, from: newValue ? hooks(newValue) : null };
    }
    onToDateChange(newValue) {
        this.dates = { ...this.dates, to: newValue ? hooks(newValue) : null };
    }
    selectDate(date, type) {
        const { from, to } = this.dates;
        let updated = { ...this.dates };
        if (type === 'from') {
            if (to && date.isAfter(to, 'day')) {
                updated = {
                    from: date,
                    to: date.clone().add(1, 'day'),
                };
            }
            else {
                updated.from = date;
            }
        }
        if (type === 'to') {
            if (from && date.isBefore(from, 'day')) {
                updated.to = from.clone();
            }
            else {
                updated.to = date;
            }
        }
        this.dates = updated;
        this.emitChange();
        if (type === 'from') {
            requestAnimationFrame(() => this.toDateSelectRef?.openDatePicker());
        }
    }
    emitChange() {
        const from = this.dates.from ? this.dates.from.format('YYYY-MM-DD') : null;
        const to = this.dates.to ? this.dates.to.format('YYYY-MM-DD') : null;
        this.datesChanged.emit({ from, to });
        this.liveMessage = `Date range updated. From ${from ?? 'not set'} to ${to ?? 'not set'}.`;
    }
    render() {
        const fromLabel = this.dates?.from ? this.dates.from.format('MMM D, YYYY') : null;
        const toLabel = this.dates?.to ? this.dates.to.format('MMM D, YYYY') : null;
        return (h("div", { key: 'b9ab312389bd42d8fdc1794d8318f1494d0c120e', class: "date-ranger-filters__dates", role: "group", "aria-labelledby": `${this.groupId}-label` }, h("span", { key: '526a67c8367dcdcd0618fa4e99458dc42cd342a1', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector"), h("wa-icon", { key: 'e844769fac0dcd4e0de23a74ebf07170e48e1dda', name: "calendar", variant: "regular", class: "date-ranger-filters__cal-icon" }), h("ir-date-select", { key: '80bc4aea8523c344d75445a4e1eb4ab002ef68de', "data-type": "from", ref: el => (this.fromDateSelectRef = el), date: this.dates?.from?.format('YYYY-MM-DD'), placeholder: "From", "aria-label": "Start date", class: "date-ranger-filters__date-select --from", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, h("button", { key: '81e96718e17d2da8229e637b9968a7b00e668d78', slot: "trigger", class: "date-range-filters__date-select-trigger", "aria-label": fromLabel ?? 'Select start date' }, fromLabel ?? h("span", { key: '295dc479df7aa74ebe89cb5281caa72f23a0820f', class: "date-range-filters__placeholder" }, "From")), this.showQuickActions && (h("div", { key: 'b71956feda210b49395069aca1794676b69d0e9c', class: "date-ranger-filters__quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set start date to ${action.label}`, onClickHandler: () => this.selectDate(action.getDate(), 'from') }, action.label)))))), h("span", { key: '57df1b1e768448e4b6e42dac92e4f3ea7347063b', class: "date-ranger-filters__arrow", "aria-hidden": "true" }, "\u2192"), h("ir-date-select", { key: '9967744fffd37135fb508e61b6850466b87605f6', "data-type": "to", date: this.dates?.to?.format('YYYY-MM-DD'), minDate: this.dates?.from?.format('YYYY-MM-DD'), placeholder: "To", "aria-label": "End date", ref: el => (this.toDateSelectRef = el), class: "date-ranger-filters__date-select --to", onDateChanged: evt => this.selectDate(evt.detail.start, 'to'), onDatePickerFocus: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!this.dates?.from) {
                    requestAnimationFrame(() => {
                        this.toDateSelectRef.closeDatePicker();
                    });
                    requestAnimationFrame(() => {
                        this.fromDateSelectRef.openDatePicker();
                    });
                }
            } }, h("button", { key: '182fc50dacae34c8f05166f4d0cf314c6bfe9da8', slot: "trigger", class: "date-range-filters__date-select-trigger", "aria-label": toLabel ?? 'Select end date' }, toLabel ?? h("span", { key: '7d04c759a78c397644a1a38fd71f6e666de5e165', class: "date-range-filters__placeholder" }, "To")), this.showQuickActions && (h("div", { key: '6f69884f35b681d0ca40281c10173b15a29bd7ab', class: "date-ranger-filters__quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, onClickHandler: () => this.selectDate(action.getDate(), 'to') }, action.label)))))), h("span", { key: '02d56f19bdaeb47d5fe84cfe0f7bf7e823bcef67', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage)));
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