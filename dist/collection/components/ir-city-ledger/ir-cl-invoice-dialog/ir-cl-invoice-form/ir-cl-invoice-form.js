import { Host, h } from "@stencil/core";
import moment from "moment";
import { t } from "../../../../services/locale/t";
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
        return (h(Host, { key: 'd5ef5d5ce794c01d91088e7a7d17ba071e504fb0' }, h("wa-callout", { key: '15b265a9cdd07aaf451ba17e92b0cef48d423fec' }, h("wa-icon", { key: '42fd5c4a8841e84f867f19a6314b54fbc90fcd55', slot: "icon", name: "circle-info" }), h("div", { key: 'b8d521e085aa7b789cc694c3645d5dd35001a077', class: "invoice-form__scope-text" }, h("span", { key: '5fe0270f5127bd652a3c6be2165e859377c0d27c', class: "invoice-form__scope-label" }, t('Lcz_UnbilledFolioEntries', { fallback: 'Unbilled Folio Entries' })), h("span", { key: '08d0d3f1caa7b225914c8ab8b26f0956c992ba3c', class: "invoice-form__scope-desc" }, t('Lcz_UnbilledFolioEntriesDesc', { fallback: 'Including all services from bookings, manual charges, adjustments and discounts.' })))), h("div", { key: '4522b44dec4fe97570728bdeed07f7e04adccef9', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: 'f3e03571807c483627a16e04b36774494e9ff815', selectionMode: "auto", showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: 'a5f6a1f23fb20951f04d41942386c6979f992bd6', class: "invoice-form__field" }, h("wa-checkbox", { key: '52ede20a97068b47192553311b4b058b61d5ecfe', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
                this.scope = e.target.checked ? 'UNBILLED_CHECKED_OUT' : 'UNBILLED';
            } }, t('Lcz_IncludeCheckedOutOnly', { fallback: 'Include checked-out bookings only' })))));
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
