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
        return (h(Host, { key: '9351ff8e79a9483a93219f24c4e4dcc75bb323b2' }, h("ir-accordion", { key: '5d4c5572e01f0daefacc5db803cb3f28df44e8de', class: "ir-revenue-row__accordion" }, h("div", { key: 'd1e1c6110543951b1ed1f01cbd3da2e0dc288acb', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '2fc2a09bbbe1a24a48aab33720cc10f48501a29c', class: "ir-revenue-row__header-left" }, h("p", { key: 'f6b4e5b32eddd9d3c7489bec5e5e7b24cac911b0', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'dabfa08fb982f3527a1f1d0b731ddc081da3adcf', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '2b561aa78a8251172a38bcccd07f052859ee502a', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'c4a3bf0e60e47bd38637bd0f119ef7304024a909', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '696de4f0b9301ce24af49efd7074178b65b87c4c', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
