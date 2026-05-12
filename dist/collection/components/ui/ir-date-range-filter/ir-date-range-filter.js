import { h } from "@stencil/core";
import moment from "moment";
export class IrDateRangeFilter {
    /** Configurable quick-date preset buttons shown alongside each calendar. */
    quickDates = [
        { label: 'Today', getDate: () => moment() },
        { label: '30 Days Ago', getDate: () => moment().subtract(30, 'days') },
        { label: '60 Days Ago', getDate: () => moment().subtract(60, 'days') },
        { label: '90 Days Ago', getDate: () => moment().subtract(90, 'days') },
        { label: '1 Year Ago', getDate: () => moment().subtract(1, 'year') },
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
        const parsed = moment(value, 'YYYY-MM-DD', true);
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
        return (h("div", { key: '61d73a03887a9e5cb732cec4f62d2980578d21bd', class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, h("span", { key: 'e98672e9613cfcfa5f6fb4060746e0c7437078b4', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector"), h("div", { key: 'e8f50d2400756882f9cdffa6a087764dd3077900', class: "drf-field" }, h("button", { key: '44358e1c33a8d6f471de533764151701b0210753', class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.openDatePicker(), "aria-label": fromLabel ? `Start date: ${fromLabel}` : 'Select start date' }, fromLabel ?? 'From'), fromLabel && (h("button", { key: '50428f22314adba2bd78faa164f5de7ac3dd6847', class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": "Clear start date" }, h("wa-icon", { key: '087b68a37bd6bb5133cc230a390b5fdb9b23c1fb', name: "xmark" }))), h("ir-date-select", { key: '94afc29dc94ad4061e2deadee9bd79448b713e58', ref: el => (this.fromDateSelectRef = el), date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: "From", minDate: this.minDate, maxDate: fromMaxDate, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, h("button", { key: 'fc7479bff14e5733002b8da07e38375cfd04d3a3', slot: "trigger", class: "drf-cal-trigger", "aria-label": "Open start date calendar" }, h("wa-icon", { key: '583fda50d11905aebb7acd763b35dbe4bfe2c7a7', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '562773e7db3fa09a9ea89103953c45f523a9f543', class: "drf-quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": `Set start date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef.closeDatePicker();
            } }, action.label))))))), h("span", { key: 'e78a8c42e5e7aa79fd19ff1b8b5be9d5eeb1a8da', class: "drf-divider", "aria-hidden": "true" }), h("div", { key: '6663d8e7fd6544dcb16500cd29a34c55d534cff2', class: "drf-field" }, h("button", { key: '4b79e80708b62bb36808625747cc822a1f2a5e73', class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.openDatePicker(), "aria-label": toLabel ? `End date: ${toLabel}` : 'Select end date' }, toLabel ?? 'To'), toLabel && (h("button", { key: 'e821948e148a2ef66c72b023ff15d8f7fc037c2a', class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": "Clear end date" }, h("wa-icon", { key: '68dfc9b0cb3ee46970535291bc7985e3abf1e943', name: "xmark" }))), h("ir-date-select", { key: '92e938425e4e4eaa26ef6c1692af498fb1688490', ref: el => (this.toDateSelectRef = el), date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: "To", minDate: toMinDate, maxDate: this.maxDate, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, h("button", { key: '1acb623b1f26721da5203343bba6f7c78f000786', slot: "trigger", class: "drf-cal-trigger", "aria-label": "Open end date calendar" }, h("wa-icon", { key: '4b25ec9893a63b6db95a2fdcfe7e32e06d31f7ad', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '344df14828984bfa423ec5584c95d662f878d0b5', class: "drf-quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, disabled: this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                this.selectDate(action.getDate(), 'to');
                this.toDateSelectRef.closeDatePicker();
            } }, action.label))))))), h("span", { key: '6e1b5173115f083699af72ca97df6a68d1b11923', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage)));
    }
    static get is() { return "ir-date-range-filter"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-date-range-filter.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-date-range-filter.css"]
        };
    }
    static get properties() {
        return {
            "quickDates": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "QuickDatePreset[]",
                    "resolved": "QuickDatePreset[]",
                    "references": {
                        "QuickDatePreset": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-date-range-filter/ir-date-range-filter.tsx",
                            "id": "src/components/ui/ir-date-range-filter/ir-date-range-filter.tsx::QuickDatePreset"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Configurable quick-date preset buttons shown alongside each calendar."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[\n    { label: 'Today', getDate: () => moment() },\n    { label: '30 Days Ago', getDate: () => moment().subtract(30, 'days') },\n    { label: '60 Days Ago', getDate: () => moment().subtract(60, 'days') },\n    { label: '90 Days Ago', getDate: () => moment().subtract(90, 'days') },\n    { label: '1 Year Ago', getDate: () => moment().subtract(1, 'year') },\n  ]"
            },
            "fromDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controlled start date in YYYY-MM-DD format."
                },
                "getter": false,
                "setter": false,
                "attribute": "from-date",
                "reflect": false
            },
            "toDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Controlled end date in YYYY-MM-DD format."
                },
                "getter": false,
                "setter": false,
                "attribute": "to-date",
                "reflect": false
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size variant passed through to inner form controls."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'small'"
            },
            "showQuickActions": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show the quick-action preset buttons in each calendar popup."
                },
                "getter": false,
                "setter": false,
                "attribute": "show-quick-actions",
                "reflect": false,
                "defaultValue": "true"
            },
            "minDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Earliest selectable date in YYYY-MM-DD format."
                },
                "getter": false,
                "setter": false,
                "attribute": "min-date",
                "reflect": false
            },
            "maxDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Latest selectable date in YYYY-MM-DD format."
                },
                "getter": false,
                "setter": false,
                "attribute": "max-date",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "dates": {},
            "liveMessage": {}
        };
    }
    static get events() {
        return [{
                "method": "datesChanged",
                "name": "datesChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired whenever either date changes. Payload contains ISO date strings or null."
                },
                "complexType": {
                    "original": "{ from: string | null; to: string | null }",
                    "resolved": "{ from: string; to: string; }",
                    "references": {}
                }
            }, {
                "method": "dateCleared",
                "name": "dateCleared",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when the user explicitly clears a date field."
                },
                "complexType": {
                    "original": "{ field: 'from' | 'to' }",
                    "resolved": "{ field: \"from\" | \"to\"; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "fromDate",
                "methodName": "onFromDateChange"
            }, {
                "propName": "toDate",
                "methodName": "onToDateChange"
            }];
    }
}
//# sourceMappingURL=ir-date-range-filter.js.map
