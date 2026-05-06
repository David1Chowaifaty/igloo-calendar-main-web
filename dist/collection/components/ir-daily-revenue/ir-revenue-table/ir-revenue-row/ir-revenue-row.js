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
        return (h(Host, { key: 'ca07c8837d456c14fd70fabc647dd9df4084ff62' }, h("ir-accordion", { key: 'd82b76636e3931ee01bbd5ef734d4a2670d2df3c', class: "ir-revenue-row__accordion" }, h("div", { key: 'fa2e11c90031b1ec94df94dc506fa321e610a971', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '34fb68e983f9f451529e0d27e11c00e438176b83', class: "ir-revenue-row__header-left" }, h("p", { key: '21ae2d1b8e49f19fb92ebe1b74846f4c1773b99c', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'aecff20379b0a35be350b238658d70101eab8ea3', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '4af6a38b098b932da2fe5d26c397fd8039e5b45f', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '879ccacaba02187333dc50850f553fa90b120c38', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '3ff044be9e3b81d382f3363e7fbaacc644bd1433', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
