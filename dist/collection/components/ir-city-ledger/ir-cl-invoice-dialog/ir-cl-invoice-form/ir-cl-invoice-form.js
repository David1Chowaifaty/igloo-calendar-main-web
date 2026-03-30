import { Host, h } from "@stencil/core";
export class IrClInvoiceForm {
    fromDate = '';
    toDate = '';
    scope = 'UNBILLED';
    async getValues() {
        return { fromDate: this.fromDate, toDate: this.toDate, scope: this.scope };
    }
    render() {
        return (h(Host, { key: 'a33b98775a2df783298e2183010f94ad44f286cf' }, h("wa-callout", { key: 'a2798bab1cbc4452aa80f21d638851c50cc3b2da' }, h("wa-icon", { key: 'e2c7d6e675766780e04788194b47de4c85fa2735', slot: "icon", name: "circle-info" }), h("div", { key: '9f34ffaf5c4e2b779e0ee9a3ee3ecbed25d3d043', class: "invoice-form__scope-text" }, h("span", { key: 'ba8a64f4468cc1b782926fdf588abf573ca93c74', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: 'a0ad815574ae2a4214aa5f553f05ec9591cc431b', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges and adjustments."))), h("div", { key: 'b759cff922ad83d880cf335049edfd09e1744acf', class: "invoice-form__field" }, h("ir-date-range-filter", { key: '807914dbc87dbf5f283b23e4389ad2aa3393a333', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate || undefined, toDate: this.toDate || undefined, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '6584eb0a0e8949580bf29e973663930df5cf30bd', class: "invoice-form__field" }, h("wa-checkbox", { key: 'c278f5f5083b23931153d98423427d2111e6a41c', checked: this.scope === 'UNBILLED_CHECKED_OUT', "onwa-change": e => {
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
            "scope": {}
        };
    }
    static get methods() {
        return {
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
}
//# sourceMappingURL=ir-cl-invoice-form.js.map
