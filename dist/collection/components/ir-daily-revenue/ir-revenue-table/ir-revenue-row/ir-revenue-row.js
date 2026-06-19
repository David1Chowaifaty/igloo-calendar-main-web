import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import calendar_data from "../../../../stores/calendar-data";
let accId = 0;
export class IrRevenueRow {
    host;
    /** Array of payments for this method group */
    payments = [];
    /** Group display name (e.g., "Credit Card") */
    groupName;
    contentId = `ir-rr-content-${++accId}`;
    render() {
        const total = this.payments.reduce((prev, curr) => prev + curr.amount, 0);
        return (h(Host, { key: '559f7bbb212f788916e3f439928abfcef4fb61db' }, h("ir-accordion", { key: 'ade55e62ed1468b65613bba65d71bb0690f90610', class: "ir-revenue-row__accordion" }, h("div", { key: '05972b78f36a8b60d5baa0224fc7622eb4fd3808', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '9c5fac15fae1abb3b7d2b9831a9df3cb77289050', class: "ir-revenue-row__header-left" }, h("p", { key: '2af2f11aa235685aa316b9e248a940213ef52dcf', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '4c2c6d82a4f7aba97df4be26be47ce3f488cc873', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'd5bac1623e2ac1635011eed8d954792d13471349', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '271b91e5cfcfeb2288b00e0d6042db32e96b587e', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'cc707b0d683e66f46dafa165052ebb5c114a0367', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
    static get is() { return "ir-revenue-row"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-revenue-row.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-revenue-row.css"]
        };
    }
    static get properties() {
        return {
            "payments": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FolioPayment[]",
                    "resolved": "FolioPayment[]",
                    "references": {
                        "FolioPayment": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-daily-revenue/types.ts::FolioPayment",
                            "referenceLocation": "FolioPayment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of payments for this method group"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "groupName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Group display name (e.g., \"Credit Card\")"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "group-name"
            }
        };
    }
    static get elementRef() { return "host"; }
}
