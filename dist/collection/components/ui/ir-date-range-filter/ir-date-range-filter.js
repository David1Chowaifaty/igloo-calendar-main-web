import { h } from "@stencil/core";
import moment from "moment";
export class IrDateRangeFilter {
    /** Quick date preset buttons */
    quickDates = [
        { label: 'Today', getDate: () => moment() },
        { label: '30 Days Ago', getDate: () => moment().subtract(30, 'days') },
        { label: '60 Days Ago', getDate: () => moment().subtract(60, 'days') },
        { label: '90 Days Ago', getDate: () => moment().subtract(90, 'days') },
        { label: '1 Year Ago', getDate: () => moment().subtract(1, 'year') },
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
            from: this.fromDate ? moment(this.fromDate) : null,
            to: this.toDate ? moment(this.toDate) : null,
        };
    }
    onFromDateChange(newValue) {
        this.dates = { ...this.dates, from: newValue ? moment(newValue) : null };
    }
    onToDateChange(newValue) {
        this.dates = { ...this.dates, to: newValue ? moment(newValue) : null };
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
        return (h("div", { key: '2a1c27a2ef8e1681d0849a75f6c1652abe3d9db9', class: "date-ranger-filters__dates", role: "group", "aria-labelledby": `${this.groupId}-label` }, h("span", { key: '3a63ea60ab4078c4540a01d8a5c5e88e3922fcfb', id: `${this.groupId}-label`, class: "sr-only" }, "Date range selector"), h("wa-icon", { key: '13553ee6d49b4b3af8f320a65d8f3a0af69cf4d0', name: "calendar", variant: "regular", class: "date-ranger-filters__cal-icon" }), h("ir-date-select", { key: '653e362999ca185994414a80f284b4e40ee9d705', "data-type": "from", ref: el => (this.fromDateSelectRef = el), date: this.dates?.from?.format('YYYY-MM-DD'), placeholder: "From", "aria-label": "Start date", class: "date-ranger-filters__date-select --from", onDateChanged: evt => this.selectDate(evt.detail.start, 'from') }, h("button", { key: '2c686e63051304b1a7013e034fc999cefab8839d', slot: "trigger", class: "date-range-filters__date-select-trigger", "aria-label": fromLabel ?? 'Select start date' }, fromLabel ?? h("span", { key: '20d46d24c0b74fb94d0dc3b0997edbf16f46f0d2', class: "date-range-filters__placeholder" }, "From")), this.showQuickActions && (h("div", { key: '8d12166284e9b86bc2212192d3684e6a2ded3068', class: "date-ranger-filters__quick-actions", role: "group", "aria-label": "Quick start date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set start date to ${action.label}`, onClickHandler: () => this.selectDate(action.getDate(), 'from') }, action.label)))))), h("span", { key: '1e2e41d6ef4310e1ecaed504afc0618fc5b0c8b2', class: "date-ranger-filters__arrow", "aria-hidden": "true" }, "\u2192"), h("ir-date-select", { key: 'edb880350db83a9401b2928672ba13508dae0113', "data-type": "to", date: this.dates?.to?.format('YYYY-MM-DD'), minDate: this.dates?.from?.format('YYYY-MM-DD'), placeholder: "To", "aria-label": "End date", ref: el => (this.toDateSelectRef = el), class: "date-ranger-filters__date-select --to", onDateChanged: evt => this.selectDate(evt.detail.start, 'to'), onDatePickerFocus: e => {
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
            } }, h("button", { key: 'bae4b2ee84f10fef6341d081a64177358959898c', slot: "trigger", class: "date-range-filters__date-select-trigger", "aria-label": toLabel ?? 'Select end date' }, toLabel ?? h("span", { key: '70679d5ca6358d6cb92107a4a2836085e1a5df32', class: "date-range-filters__placeholder" }, "To")), this.showQuickActions && (h("div", { key: '91476ba60c186d67fc6d4011ae8016a5b40a43f9', class: "date-ranger-filters__quick-actions", role: "group", "aria-label": "Quick end date options" }, this.quickDates.map(action => (h("ir-custom-button", { type: "button", variant: "neutral", appearance: "outlined", "aria-label": `Set end date to ${action.label}`, onClickHandler: () => this.selectDate(action.getDate(), 'to') }, action.label)))))), h("span", { key: '181c287e89902d8b5cb4d8b69cd77912e3f17ba0', "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, this.liveMessage)));
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
                    "text": "Quick date preset buttons"
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
                    "text": "Controlled start date (YYYY-MM-DD)"
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
                    "text": "Controlled end date (YYYY-MM-DD)"
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
                    "text": ""
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
                    "text": "Show quick action buttons"
                },
                "getter": false,
                "setter": false,
                "attribute": "show-quick-actions",
                "reflect": false,
                "defaultValue": "true"
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
                    "text": ""
                },
                "complexType": {
                    "original": "{ from: string | null; to: string | null }",
                    "resolved": "{ from: string; to: string; }",
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
