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
        return (h(Host, { key: 'ef7865add8d9e9bd098bac7eb8e296436d01c164' }, h("wa-callout", { key: 'bbd7f31cf20695b600f5e168ba9ceed3b88a5788' }, h("wa-icon", { key: '988e625a56e23a78f4984dfe50f1346d7bad76be', slot: "icon", name: "circle-info" }), h("div", { key: '55683f3e363405150b5e80b8d1a8049fdd5f9a5c', class: "invoice-form__scope-text" }, h("span", { key: '82d86a2aab20a4854e1984c4f3bb7919221f8fd5', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: '9fa86c0a5532f0f321e559f4636c14de0b9af206', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges, adjustments and discounts."))), h("div", { key: '42da78708a153b1e9581686a60cb52befe576042', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: '2fadc90c3219135ff043b990248516ed7191b462', selectionMode: "auto", showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: 'da8a8e21f8c373568b3f9fe9a24c088900034384', class: "invoice-form__field" }, h("wa-checkbox", { key: '3042861e1cc18a8c6589b5955c4af68900e393a7', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
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
