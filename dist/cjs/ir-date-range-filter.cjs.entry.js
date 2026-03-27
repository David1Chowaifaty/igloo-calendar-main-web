'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const moment = require('./moment-1780b03a.js');

const irDateRangeFilterCss = "@layer wa-utilities {\n  .sc-ir-date-range-filter-h[size='small'],\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  .sc-ir-date-range-filter-h[size='medium'],\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  .sc-ir-date-range-filter-h[size='large'],\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n.sc-ir-date-range-filter-h {\n  display: block;\n}\n\n\n.date-ranger-filters__dates.sc-ir-date-range-filter {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  position: relative;\n  height: var(--wa-form-control-height);\n  cursor: text;\n  color: var(--wa-form-control-value-color);\n  font-size: var(--wa-form-control-value-font-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  vertical-align: middle;\n  width: 100%;\n  transition-timing-function: var(--wa-transition-easing);\n  background-color: var(--wa-form-control-background-color);\n  box-shadow: var(--box-shadow);\n  border-color: var(--wa-form-control-border-color);\n  border-radius: var(--wa-form-control-border-radius);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  padding: 0 var(--wa-form-control-padding-inline);\n}\n\n.date-ranger-filters__dates.sc-ir-date-range-filter:focus-within {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n}\n\n\n.date-ranger-filters__cal-icon.sc-ir-date-range-filter {\n  color: var(--wa-color-text-quiet, #9ca3af);\n  flex-shrink: 0;\n  margin-inline-end: 0.25rem;\n}\n\n\n.date-ranger-filters__date-select.sc-ir-date-range-filter::part(input-base) {\n  border: none !important;\n  border-radius: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n  padding-inline: 0;\n  height: 2rem;\n}\n\n\n.date-ranger-filters__date-select.sc-ir-date-range-filter::part(body) {\n  flex-direction: row;\n  gap: 1rem;\n}\n\n\n.date-ranger-filters__date-select.--from.sc-ir-date-range-filter {\n  z-index: 1;\n}\n\n.date-ranger-filters__date-select.--to[open].sc-ir-date-range-filter {\n  z-index: 3;\n}\n\n\n.date-ranger-filters__quick-actions.sc-ir-date-range-filter {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  \n  box-sizing: border-box;\n  \n  width: 200px;\n}\n\n\n.date-ranger-filters__arrow.sc-ir-date-range-filter {\n  color: var(--wa-color-text-quiet, #9ca3af);\n  user-select: none;\n  flex-shrink: 0;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n\n.date-range-filters__date-select-trigger.sc-ir-date-range-filter {\n  all: unset;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-size: 0.8125rem;\n  font-family: inherit;\n  color: var(--wa-color-text-normal, #111827);\n  height: 2rem;\n  padding-inline: 0.25rem;\n  white-space: nowrap;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 40px;\n}\n\n.date-range-filters__placeholder.sc-ir-date-range-filter {\n  color: var(--wa-color-text-quiet, #9ca3af);\n}\n\n.date-range-filters__date-select-trigger.sc-ir-date-range-filter:focus-visible {\n  outline: none;\n}";
const IrDateRangeFilterStyle0 = irDateRangeFilterCss;

const IrDateRangeFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.datesChanged = index.createEvent(this, "datesChanged", 7);
    }
    /** Quick date preset buttons */
    quickDates = [
        { label: 'Today', getDate: () => moment.hooks() },
        { label: '30 Days Ago', getDate: () => moment.hooks().subtract(30, 'days') },
        { label: '60 Days Ago', getDate: () => moment.hooks().subtract(60, 'days') },
        { label: '90 Days Ago', getDate: () => moment.hooks().subtract(90, 'days') },
        { label: '1 Year Ago', getDate: () => moment.hooks().subtract(1, 'year') },
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
            from: this.fromDate ? moment.hooks(this.fromDate) : null,
            to: this.toDate ? moment.hooks(this.toDate) : null,
        };
    }
    onFromDateChange(newValue) {
        this.dates = { ...this.dates, from: newValue ? moment.hooks(newValue) : null };
    }
    onToDateChange(newValue) {
        this.dates = { ...this.dates, to: newValue ? moment.hooks(newValue) : null };
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
        return (index.h("div", { key: '2a1c27a2ef8e1681d0849a75f6c1652abe3d9db9', class: "date-ranger-filters__dates", role: "group", "aria-labelledby": `${this.groupId}-label` }, index.h("span", { key: '3a63ea60ab4078c4540a01d8a5c5e88e3922fcfb', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector"), index.h("wa-icon", { key: '13553ee6d49b4b3af8f320a65d8f3a0af69cf4d0', name: "calendar", variant: "regular", class: "date-ranger-filters__cal-icon" }), index.h("ir-date-select", { key: '653e362999ca185994414a80f284b4e40ee9d705', "data-type": "from", ref: el => (this.fromDateSelectRef = el), date: this.dates?.from?.format('YYYY-MM-DD'), placeholder: "From", "aria-label": "Start date", class: "date-ranger-filters__date-select --from", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, index.h("button", { key: '2c686e63051304b1a7013e034fc999cefab8839d', slot: "trigger", class: "date-range-filters__date-select-trigger", "aria-label": fromLabel ?? 'Select start date' }, fromLabel ?? index.h("span", { key: '20d46d24c0b74fb94d0dc3b0997edbf16f46f0d2', class: "date-range-filters__placeholder" }, "From")), this.showQuickActions && (index.h("div", { key: '8d12166284e9b86bc2212192d3684e6a2ded3068', class: "date-ranger-filters__quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set start date to ${action.label}`, onClickHandler: () => this.selectDate(action.getDate(), 'from') }, action.label)))))), index.h("span", { key: '1e2e41d6ef4310e1ecaed504afc0618fc5b0c8b2', class: "date-ranger-filters__arrow", "aria-hidden": "true" }, "\u2192"), index.h("ir-date-select", { key: 'edb880350db83a9401b2928672ba13508dae0113', "data-type": "to", date: this.dates?.to?.format('YYYY-MM-DD'), minDate: this.dates?.from?.format('YYYY-MM-DD'), placeholder: "To", "aria-label": "End date", ref: el => (this.toDateSelectRef = el), class: "date-ranger-filters__date-select --to", onDateChanged: evt => this.selectDate(evt.detail.start, 'to'), onDatePickerFocus: e => {
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
            } }, index.h("button", { key: 'bae4b2ee84f10fef6341d081a64177358959898c', slot: "trigger", class: "date-range-filters__date-select-trigger", "aria-label": toLabel ?? 'Select end date' }, toLabel ?? index.h("span", { key: '70679d5ca6358d6cb92107a4a2836085e1a5df32', class: "date-range-filters__placeholder" }, "To")), this.showQuickActions && (index.h("div", { key: '91476ba60c186d67fc6d4011ae8016a5b40a43f9', class: "date-ranger-filters__quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (index.h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, onClickHandler: () => this.selectDate(action.getDate(), 'to') }, action.label)))))), index.h("span", { key: '181c287e89902d8b5cb4d8b69cd77912e3f17ba0', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage)));
    }
    static get watchers() { return {
        "fromDate": ["onFromDateChange"],
        "toDate": ["onToDateChange"]
    }; }
};
IrDateRangeFilter.style = IrDateRangeFilterStyle0;

exports.ir_date_range_filter = IrDateRangeFilter;

//# sourceMappingURL=ir-date-range-filter.cjs.entry.js.map