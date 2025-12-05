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
        return (h(Host, { key: 'a55b16a6dd5350145a61cfee70fbb370205b5069' }, h("ir-accordion", { key: 'ef6b22252d2f83eb88d52fa00940a63e6fed4f8b', class: "ir-revenue-row__accordion" }, h("div", { key: '64ad33c22dc9e01153c0c3f7fd3da44adb7e399f', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '100d697aa3ae25b9701a853bbb2107e8e4e6bebb', class: "ir-revenue-row__header-left" }, h("p", { key: '5be6cb5e36ba1b3a57eb9c8d5eef3965cd4f6839', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: '8a2c1f956c316c2ed0302d24d01a8b43426ff99e', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '75c0d52b7234f880d2887c7b40764587ec66786e', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '5e3c7aaea5a55bd6476a789168beffffcce72290', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'd30a676bbe612d253cfe24e189ca33a05f0d76ca', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
