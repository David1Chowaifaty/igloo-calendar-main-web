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
        return (h(Host, { key: 'd771851ae1a4dc3f7aa1a70079f47bc1e157d339' }, h("ir-accordion", { key: 'f5580bde741bd61237de4f5b18d43b73f09e8a13', class: "ir-revenue-row__accordion" }, h("div", { key: '84ce626764aa6adcc53028c91257d52af5aed711', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'a9f519b5b54aa9809d17810cfd7c9c998bcc3629', class: "ir-revenue-row__header-left" }, h("p", { key: '5ff1802fc5e9daac0e16dbfa6874f2ce8408ddbd', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'b5addb7c3e20cedd63da7e22212fb4c59bc3ff59', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '0a5c78fb2499e0fc9bef36e355952df9cc5a1ba0', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'fa5d1d481e06931a59b03f9b94adb138319b8e2e', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'e383af7d04633b6f5e37ccec08619c20b6adf193', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
