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
        return (h(Host, { key: '1fa176dd7242a4e2c7eb92ea58b476a8ce5fadfc' }, h("wa-callout", { key: '3bda60a3171bc813f2cc71ae3e402d2f20a73579' }, h("wa-icon", { key: '2a3eb4e7d73a27afee142768a078592df5decbf3', slot: "icon", name: "circle-info" }), h("div", { key: '3925b24a58a933ba277b3d91875fab006988bc98', class: "invoice-form__scope-text" }, h("span", { key: 'c50fbfd5bd76067067edbccceb12ec7e311828f7', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: '2018fe5a997902ed61d1b4beb7cebcc6079daa18', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges, adjustments and discounts."))), h("div", { key: '192450ea120b03b9848fb368d29614948b320af9', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: 'f06f4e961cbfe32ff30aaf5b3aaa5fec5a83bffd', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: 'd71ba88ddb7712090aef17d1cf93123c5987ee52', class: "invoice-form__field" }, h("wa-checkbox", { key: '6beed7f08f96b0e9ba1b907eb3405cb6086eb53f', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
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
                            "path": "C:/Users/user/Code/work/modified-ir-webcmp/src/components/ir-city-ledger/ir-cl-invoice-dialog/ir-cl-invoice-form/ir-cl-invoice-form.tsx",
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
