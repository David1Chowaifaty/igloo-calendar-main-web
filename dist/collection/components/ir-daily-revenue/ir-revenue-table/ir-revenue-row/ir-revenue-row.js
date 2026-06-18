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
        return (h(Host, { key: 'b783a54a6ad08cc9d2d15b0137556be279da3f58' }, h("ir-accordion", { key: '9034424a0f39740357d1b33af79c897f52bbaa17', class: "ir-revenue-row__accordion" }, h("div", { key: 'b075cc4a662823a21cf36ba7b5a042849e74cc61', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '768d03cbd53ccf1071ecfc3ef6ebb679417b8b85', class: "ir-revenue-row__header-left" }, h("p", { key: '3a719eac5b91bc457b64bb4b6d032703983f7f3a', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: 'a527c3ea427624b71d29c9b7b5cea9d04369fb6b', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'a455e9e05374a3fae645e40647cff9184c18a2f4', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '3c8695a51747a95941cbfdda758f7aa809fcacd5', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'c69e8c2e97bfe5bf623a6faaaa40d8f7b4aea237', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
