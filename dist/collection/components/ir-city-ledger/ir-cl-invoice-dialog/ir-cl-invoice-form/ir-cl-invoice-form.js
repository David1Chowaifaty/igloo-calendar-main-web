import { Host, h } from "@stencil/core";
import moment from "moment";
import { t } from "../../../../services/locale/t";
export class IrClInvoiceForm {
    fromDate = '';
    toDate = '';
    scope = 'UNBILLED_CHECKED_OUT';
    dateError = false;
    isCompact = false;
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
        return {
            fromDate: this.fromDate,
            toDate: this.toDate,
            scope: this.scope,
            is_checked_out_only: this.scope === 'UNBILLED_CHECKED_OUT',
            is_compact: this.isCompact,
        };
    }
    render() {
        return (h(Host, { key: 'd964b0b0a10d0f2d2602231b4a60f876bf05c7e0' }, h("wa-callout", { key: 'f01815107fcb6cb12a8295af6d2c4647481fcb48' }, h("wa-icon", { key: 'b56c1b8f72b246eda2aecced35c9031ead30c61b', slot: "icon", name: "circle-info" }), h("div", { key: 'cbeb8c1411e957e712d491e4861a8e030e2fbee5', class: "invoice-form__scope-text" }, h("span", { key: '3051bade0ba13b9f44e774ffc9e87cbba0488456', class: "invoice-form__scope-label" }, t('Lcz_UnbilledFolioEntries', { fallback: 'Unbilled Folio Entries' })), h("span", { key: 'b5a14d514799960dde5ad0c5b52faeb7a8fe899b', class: "invoice-form__scope-desc" }, t('Lcz_UnbilledFolioEntriesDesc', { fallback: 'Including all services from bookings, manual charges, adjustments and discounts.' })))), h("div", { key: '358e5d9b170db46993e6b9b1c6208b0157e33e9d', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: 'ada39f8b39b5a43855770b9af1bfd6196a261e57', selectionMode: "auto", showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '8d6337e17b98aecf9848a6fc7004fa17fee626fc', class: "invoice-form__field" }, h("wa-checkbox", { key: '01589d7c214b94deb44e1ce54ea3bd1c5c7472ef', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
                this.scope = e.target.checked ? 'UNBILLED_CHECKED_OUT' : 'UNBILLED';
            } }, t('Lcz_IncludeCheckedOutOnly', { fallback: 'Include checked-out bookings only' }))), h("div", { key: '669ee9a7e1f1baa9d70d3203d71774a78ef322fa', class: "invoice-form__field" }, h("wa-checkbox", { key: '364a399262bbbc2ea1197b902d2067430ada4645', checked: this.isCompact, defaultChecked: this.isCompact, onchange: e => {
                this.isCompact = e.target.checked;
            } }, t('Lcz_CompactVersion', { fallback: 'Compact version' })))));
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
            "dateError": {},
            "isCompact": {}
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
