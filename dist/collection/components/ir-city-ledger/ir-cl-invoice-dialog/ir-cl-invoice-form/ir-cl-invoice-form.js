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
        return (h(Host, { key: '8bae71dfe5886ac3d44a0fee89697b21574d31ae' }, h("wa-callout", { key: '45d480fb921d632a4828707759b6f12d763ee3b5' }, h("wa-icon", { key: 'd05e0102a268bdcc03e119fa0f8eab157224d173', slot: "icon", name: "circle-info" }), h("div", { key: '739d8c1764d672e3b9d4b7915c3776d71dbbf2c2', class: "invoice-form__scope-text" }, h("span", { key: '07bc07bdf0cd8dc184a50658a6936f3040c1c367', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: 'f8eaf972f71a102c319e4cfc81416fa36145ca87', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges, adjustments and discounts."))), h("div", { key: 'f20121462ecdc1239abb5b1472bd0f7167e1ec60', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: '389a7eb78ac810dbacf0e0e88d2650c3c08b51e5', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '8c65a7ebb66b6ef7a0550b313c63c32fedee26d8', class: "invoice-form__field" }, h("wa-checkbox", { key: '6a56a7d26b567f08ff062bded61e0dffedf779f0', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
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
//# sourceMappingURL=ir-cl-invoice-form.js.map
