import { Host, h } from "@stencil/core";
export class IrClInvoiceForm {
    fromDate = '';
    toDate = '';
    scope = 'UNBILLED';
    async getValues() {
        return { fromDate: this.fromDate, toDate: this.toDate, scope: this.scope };
    }
    render() {
        return (h(Host, { key: '5a67f34667cae63b33db2c7e9b9fff5dc5802f44' }, h("wa-callout", { key: 'c34b21d493f40fee087d893d1022e0c94b9ca2c5' }, h("wa-icon", { key: '9f99d9c9b259a22700ef48c52fac055e1f107227', slot: "icon", name: "circle-info" }), h("div", { key: 'a6c8607fc70d99f14961f08b8f13b92c275cef39', class: "invoice-form__scope-text" }, h("span", { key: '6cde4e0bb0c4f36caa4a6ec5a894fc3d316e32ac', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: '58f8984c20cffc6246b43351a7bae46538d839c4', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges and adjustments."))), h("div", { key: 'f27d6fa0346c4f21403cc9b220842d479b9b76d6', class: "invoice-form__field" }, h("ir-date-range-filter", { key: '84f40359c1f67484d15d6889f22f15431b5cd294', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate || undefined, toDate: this.toDate || undefined, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '8a081f89acd6febdbcf3a360b3892c0ed9a9529f', class: "invoice-form__field" }, h("wa-checkbox", { key: '091e5c750c89ea4ca3f2847045b65920b754e3fa', checked: this.scope === 'UNBILLED_CHECKED_OUT', "onwa-change": e => {
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
