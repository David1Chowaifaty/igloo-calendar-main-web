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
        return (h(Host, { key: '4d17008b4749e4dc208c54a57fb0afa78742f17c' }, h("ir-accordion", { key: '3d0ae783a7b1b0353e962c14130832c3c5d8d259', class: "ir-revenue-row__accordion" }, h("div", { key: '7b0f090a8e71ada6c274808741b230b2362542d4', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'c8ef0cd5cc7e4e2b450d64c3818b2d571eebd20f', class: "ir-revenue-row__header-left" }, h("p", { key: '7fd3907da23ff62933993dd72f70fb07d24b2cd2', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'd336a4f0ff811be83f3691a015b7ca5888b44b51', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '0c01c1dc973efbe835d01c086813862073bc740e', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '2dcda588c4d4848cc1453235936b23f09806a387', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '6043554a4ff849cc0f69a24e1d48cc039fa93d2a', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
