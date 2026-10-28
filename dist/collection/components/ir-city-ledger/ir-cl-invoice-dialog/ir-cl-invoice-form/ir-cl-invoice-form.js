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
        return (h(Host, { key: '91d822e60f90db055f907b7047e9d53f806d7695' }, h("wa-callout", { key: '56811dcd626f92ed4b48d4311fec6ee9060198e1' }, h("wa-icon", { key: 'ca9d8fff5b447b64f0a01837d80bc9cd2507a399', slot: "icon", name: "circle-info" }), h("div", { key: '1847fc9d7c43b3ff9910bc92b23b81597f4ac030', class: "invoice-form__scope-text" }, h("span", { key: '5202d7f22c6f9b67cc6f1f55aac60d23fa85a4df', class: "invoice-form__scope-label" }, t('Lcz_UnbilledFolioEntries', { fallback: 'Unbilled Folio Entries' })), h("span", { key: '746169b5786888f3119e4f1025c2cad72dcbb482', class: "invoice-form__scope-desc" }, t('Lcz_UnbilledFolioEntriesDesc', { fallback: 'Including all services from bookings, manual charges, adjustments and discounts.' })))), h("div", { key: 'bd72fd510b892c34044fef0bc5cc6c948047acc9', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: '8f84b998c050db8281adeb1987ba7c1f80c7b0fb', selectionMode: "auto", showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: 'f16bc0002429f79b8d66c72554bf6400bcbb01c5', class: "invoice-form__field" }, h("wa-checkbox", { key: 'da77b5f413e08f2e5a81a2770b1a03e555bdd151', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
                this.scope = e.target.checked ? 'UNBILLED_CHECKED_OUT' : 'UNBILLED';
            } }, t('Lcz_IncludeCheckedOutOnly', { fallback: 'Include checked-out bookings only' }))), h("div", { key: 'd665b35a73ed70fce9ac7d73331f1e2118b6a638', class: "invoice-form__field" }, h("wa-checkbox", { key: '37c96fdc3955e92c67162023a11e24da2d4cda87', checked: this.isCompact, defaultChecked: this.isCompact, onchange: e => {
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
