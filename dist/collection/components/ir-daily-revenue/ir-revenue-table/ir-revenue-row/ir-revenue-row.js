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
        return (h(Host, { key: '4b492a4407bae6b52636a6722a4fb5000199ebac' }, h("ir-accordion", { key: '837eed2e468a204d47b9cb53a184413e4521a34f', class: "ir-revenue-row__accordion" }, h("div", { key: '58f5cefe7977b5423b002ba9b4851e0fe522f3c6', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'b1b9f14890f13a2ac426c184ce2173c92ddb573b', class: "ir-revenue-row__header-left" }, h("p", { key: 'bde5a698acf96a099038f1d5467943db19afa6d8', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: '4b2582f5e5dab6c632c27b1232cb16b9d00fa19d', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '62c44efc1c88b76b1fee698e867b2eb4e47f6e71', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'c2c405b92d54b3c56fdc3dc1ec59f3a799410491', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'feb36cc0505106bb03d0e50e9f115265a46c10aa', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
