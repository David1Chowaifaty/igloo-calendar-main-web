import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrClInvoiceForm {
    fromDate = '';
    toDate = '';
    scope = 'UNBILLED_CHECKED_OUT';
    dateError = false;
    onDateChange() {
        if (this.fromDate && this.toDate) {
            this.dateError = false;
        }
    }
    async validate() {
        if (!this.fromDate || !this.toDate) {
            this.dateError = true;
            return false;
        }
        this.dateError = false;
        return true;
    }
    async getValues() {
        return { fromDate: this.fromDate, toDate: this.toDate, scope: this.scope, is_checked_out_only: this.scope === 'UNBILLED_CHECKED_OUT' };
    }
    render() {
        return (h(Host, { key: '177bf023adf660cb749fe9b835e1662bd0496def' }, h("wa-callout", { key: '2b285d45ab123692c389c8a075149b9139326c81' }, h("wa-icon", { key: 'e4727673bf2df9f3e30e61845800dc5b02a5d726', slot: "icon", name: "circle-info" }), h("div", { key: '01b1a0447848b1343473586d780ba8b832075aad', class: "invoice-form__scope-text" }, h("span", { key: 'fe803e3427acd038daccdb2d17a6d82753d38d36', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: '5b87d1247d3521778f901dd70a8e4593a1efc430', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges, adjustments and discounts."))), h("div", { key: '8ef4fa9386a62a87ec83ec21bb1cb5d549930cce', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: 'd23482c4e9e472e5b1aa6df9815db2c66ae12706', selectionMode: "auto", showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '429d805d838ee9b6cf0b02c1117ac678f8d14dba', class: "invoice-form__field" }, h("wa-checkbox", { key: 'a43736bd0dd108ab2618ccfe78fecc3f957380d7', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
                this.scope = e.target.checked ? 'UNBILLED_CHECKED_OUT' : 'UNBILLED';
            } }, "Include checked-out bookings only"))));
    }
    static get is() { return "ir-cl-invoice-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-invoice-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-invoice-form.css"]
        };
    }
    static get states() {
        return {
            "fromDate": {},
            "toDate": {},
            "scope": {},
            "dateError": {}
        };
    }
    static get methods() {
        return {
            "validate": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "getValues": {
                "complexType": {
                    "signature": "() => Promise<CreateInvoiceFormValues>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "CreateInvoiceFormValues": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-city-ledger/ir-cl-invoice-dialog/ir-cl-invoice-form/ir-cl-invoice-form.tsx",
                            "id": "src/components/ir-city-ledger/ir-cl-invoice-dialog/ir-cl-invoice-form/ir-cl-invoice-form.tsx::CreateInvoiceFormValues"
                        }
                    },
                    "return": "Promise<CreateInvoiceFormValues>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "fromDate",
                "methodName": "onDateChange"
            }, {
                "propName": "toDate",
                "methodName": "onDateChange"
            }];
    }
}
