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
        return (h("div", { key: '6a86fb4180ba5ef19dcd3e1dcba2679fd1c753b9', part: "container", class: "drf-container", role: "group", "aria-labelledby": `${this.groupId}-label` }, h("span", { key: 'be1740058eb9e1055878615d4569842cf3e0b01a', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector"), h("div", { key: 'cc7d82a973413c9c907a02c5cb419efde753c63a', part: "field field-from", class: "drf-field" }, h("button", { key: 'f52de99f4011a4275f0457c88a1cc724fcdd34e6', part: "text-btn", class: `drf-text-btn${!fromLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.fromDateSelectRef?.openDatePicker(), "aria-label": fromLabel ? `Start date: ${fromLabel}` : 'Select start date' }, fromLabel ?? 'From'), fromLabel && (h("button", { key: '4f61318a084345f793228914d38b03639584b8ae', part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('from'), "aria-label": "Clear start date" }, h("wa-icon", { key: 'd4e17ac4119603b223c420dcade943598eb87160', name: "xmark" }))), h("ir-date-select", { key: '5c14d238b5a6bb29f8cd9cf51a9b7ff5fbaf2017', ref: el => (this.fromDateSelectRef = el), exportparts: this.exportPartsFor('from'), date: this.dates.from?.format('YYYY-MM-DD') || null, placeholder: "From", minDate: this.minDate, maxDate: fromMaxDate, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, h("button", { key: '70c5dc38576d7b3374e4836a39f41a655cea331d', slot: "trigger", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open start date calendar" }, h("wa-icon", { key: 'cd0d39c24fa6a802efe5242817daaab9eefce684', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: 'e635bc35e827121f6879e2be42f03847fd828aa8', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", disabled: this.dates?.to?.isSameOrBefore(action.getDate(), 'date'), "aria-label": `Set start date to ${action.label}`, onClickHandler: () => {
                this.selectDate(action.getDate(), 'from');
                this.fromDateSelectRef.closeDatePicker();
            } }, action.label))))))), h("span", { key: 'b2fdda5e9a979257aaaf3d70ef5c022d1e38bfb7', part: "divider", class: "drf-divider", "aria-hidden": "true" }), h("div", { key: '6309b51fb8108dd8e5930481b23257e318739ed4', part: "field field-to", class: "drf-field" }, h("button", { key: '305c76cc8973d6c275166d1e5be9f16039669957', part: "text-btn", class: `drf-text-btn${!toLabel ? ' drf-text-btn--placeholder' : ''}`, onClick: () => this.toDateSelectRef?.openDatePicker(), "aria-label": toLabel ? `End date: ${toLabel}` : 'Select end date' }, toLabel ?? 'To'), toLabel && (h("button", { key: 'c20e44de4808b56381fe89a7deb2726ab752875f', part: "clear-btn", class: "drf-clear-btn", onClick: () => this.clearDate('to'), "aria-label": "Clear end date" }, h("wa-icon", { key: '4e64c13262764cd5d7ce293cd57969b3258302e1', name: "xmark" }))), h("ir-date-select", { key: '36101b588a90e81afb7c87e9a784f3263da4f3e5', ref: el => (this.toDateSelectRef = el), exportparts: this.exportPartsFor('to'), date: this.dates.to?.format('YYYY-MM-DD') || null, placeholder: "To", minDate: toMinDate, maxDate: this.maxDate, class: "drf-date-select", onDateChanged: evt => this.selectDate(evt.detail.start, 'to') }, h("button", { key: '039e20016363d53292ac2113f494e60835077bf1', slot: "trigger", part: "cal-trigger", class: "drf-cal-trigger", "aria-label": "Open end date calendar" }, h("wa-icon", { key: 'b78a8fd488f79f2212333989e6c85f2f63ccc109', name: "calendar", variant: "regular" })), this.showQuickActions && (h("div", { key: '9fe1784147492d9f9ce1b927b0d0459904f1cc79', part: "quick-actions", class: "drf-quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, disabled: this.dates?.from?.isSameOrAfter(action.getDate(), 'date'), onClickHandler: () => {
                this.selectDate(action.getDate(), 'to');
                this.toDateSelectRef.closeDatePicker();
            } }, action.label))))))), h("span", { key: 'ba83be0f8b151a2f3d43b1a59b992190731d0e35', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage)));
    }
    static get is() { return "ir-date-range-filter"; }
    static get encapsulation() { return "shadow"; }
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
