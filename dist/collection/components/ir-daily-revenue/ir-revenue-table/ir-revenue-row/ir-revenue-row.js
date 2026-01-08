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
        return (h(Host, { key: 'd1cbbe50e72e26768b7c803a5f0fad25c1e3a7a7' }, h("ir-accordion", { key: '025ac7870a00d7c5854d4d4e93d793a2e59c2df9', class: "ir-revenue-row__accordion" }, h("div", { key: '3a88328d977166581ab6fe7a49e79eb47cfa07ab', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '789fb680659088089fb87b1a5f10ef3e601be095', class: "ir-revenue-row__header-left" }, h("p", { key: 'e2f93e24b6a1c4d6f2a8bc02ffc7338846b9a694', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'fdaa5da75db69bb63b2183f52d5bfb5724aaffcf', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '437bae364be9cf209b82ae379ee8f5a3e5e0f229', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '0bdcfdbb0b76482e6c7ea1554929592885f99e16', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '3cf2adcdf19db81db0db975f5dc93f2f1c998929', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
