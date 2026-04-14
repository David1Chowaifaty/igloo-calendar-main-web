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
        return (h(Host, { key: 'f1a561a09fd33239214ed04b178fa896c3ce6e94' }, h("wa-callout", { key: 'b8bcfdf8223f206c96f2fcdd31ad00c5e666ef5c' }, h("wa-icon", { key: 'f2b071748fc3b65f2f35ec3775a559050e8cb5b6', slot: "icon", name: "circle-info" }), h("div", { key: 'b905c807f32c3e739952dd1d34a870e776868db3', class: "invoice-form__scope-text" }, h("span", { key: '564080c647b05c683f1ac1a7fed9ac336dd2ab27', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: '05c982e295624a5dbd26acc083847c2fb7d09842', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges and adjustments."))), h("div", { key: '87341fed2dc5db35f3c2870e86a502a60faa1861', class: "invoice-form__field" }, h("ir-date-range-filter", { key: '20731a36d2bd0e4aff148198cef61e7c37d94fd5', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '2d06ddb34889e7b5d27e736f7cfa97d70844ec88', class: "invoice-form__field" }, h("wa-checkbox", { key: '577cba5b9b4903f2788d23e0c0054b832d54a5c6', checked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
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
