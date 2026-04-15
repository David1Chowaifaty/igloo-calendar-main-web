import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrClInvoiceForm {
    fromDate = '';
    toDate = '';
    scope = 'UNBILLED';
    async getValues() {
        return { fromDate: this.fromDate, toDate: this.toDate, scope: this.scope, is_checked_out_only: this.scope === 'UNBILLED_CHECKED_OUT' };
    }
    render() {
        return (h(Host, { key: '8ee4381e580e29b50b5d0e1998757e1e0db9b268' }, h("wa-callout", { key: 'b5e9a53da52acb72fc753bed14447492ac17865d' }, h("wa-icon", { key: '630f190044a2cb95117233e0f775cf35d78816e4', slot: "icon", name: "circle-info" }), h("div", { key: '7a7887b0d1e389a7a0c018cfcbe0d150fab74ebc', class: "invoice-form__scope-text" }, h("span", { key: 'd3cc434465ea74e1cd11b8b0364ceb2719678dcf', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: '95874a71d4d455bdc058323a2273caff8dc88479', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges and adjustments."))), h("div", { key: '40c545860f215a68ab1bc6b947de1aeef8b5dcc9', class: "invoice-form__field" }, h("ir-date-range-filter", { key: '5d544377d447020572b263719665a4e1b1eff5df', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '707d8ee906be29aa7b20764ce90bf12f33ecc698', class: "invoice-form__field" }, h("wa-checkbox", { key: '58e4137cf6042a2a7cea6bad9c4fea0bb285c177', checked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
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
