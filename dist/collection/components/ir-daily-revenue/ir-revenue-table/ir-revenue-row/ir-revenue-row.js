import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import calendar_data from "../../../../stores/calendar-data";
let accId = 0;
export class IrRevenueRow {
    constructor() {
        /** Array of payments for this method group */
        this.payments = [];
        this.contentId = `ir-rr-content-${++accId}`;
    }
    render() {
        const total = this.payments.reduce((prev, curr) => prev + curr.amount, 0);
        return (h(Host, { key: 'feebc24fe8d03034e6462f06d652dceda89caa24' }, h("ir-accordion", { key: '5b1521a136a953646ddef3c6a27999f87b191618', class: "ir-revenue-row__accordion" }, h("div", { key: '9278c40e4e1c039a20ff0ba92d059022aa46adf0', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'b7b3786745b091bd369e0719a867c103b1b39957', class: "ir-revenue-row__header-left" }, h("p", { key: '871947788c23f1507845bf3e51e0dca1192483d3', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: '6fd852b5b35a1093f4449ae06c1ece9d88ed243b', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'a0575a0b1f73c4c748eec8d6120b7b37410c3203', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'd0d59929247b380858d1694ec7f322ae4357842d', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'd038f4bfc36f6e5fb82bae7604cd1fd2b719c2f7', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
                            "id": "src/components/ir-daily-revenue/types.ts::FolioPayment"
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
                "attribute": "group-name",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=ir-revenue-row.js.map
