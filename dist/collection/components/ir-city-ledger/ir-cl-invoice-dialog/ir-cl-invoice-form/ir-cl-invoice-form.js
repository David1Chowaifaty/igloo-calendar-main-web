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
        return (h(Host, { key: 'a3087ebc279ae4a9e8fa6ddabd61fae28e75f420' }, h("wa-callout", { key: '9a2caef888efcbe5b9b45008ed89a3028878c0fa' }, h("wa-icon", { key: '9be605df408b47908c8eaafac0428e3730167cd4', slot: "icon", name: "circle-info" }), h("div", { key: 'f250ade46bf8d86dac721f03925324d9dd9cdb08', class: "invoice-form__scope-text" }, h("span", { key: '9b9cd6827045fd3be198e5af865a32044e3cddd3', class: "invoice-form__scope-label" }, t('Lcz_UnbilledFolioEntries', { fallback: 'Unbilled Folio Entries' })), h("span", { key: '028c62fd0f1f2b79de557ab15866bb90843bca6c', class: "invoice-form__scope-desc" }, t('Lcz_UnbilledFolioEntriesDesc', { fallback: 'Including all services from bookings, manual charges, adjustments and discounts.' })))), h("div", { key: 'd43ac30bac3bad7159eb2f80b3b74d2f72b846c1', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: '97ec1721500b9889cdcab74cd5b61c944f95413f', selectionMode: "auto", showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: 'fc749c414ce1dafdf6a6eea470bb7f8458100f04', class: "invoice-form__field" }, h("wa-checkbox", { key: 'f811857aa6e6e566fb241f52b71a80129dffeaee', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
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
