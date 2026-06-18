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
        return (h(Host, { key: 'd1cb104eab79f754617b4f85758d29827a0ad42d' }, h("ir-accordion", { key: '880b55ad98fde1687acbee3720c0c395e4e09270', class: "ir-revenue-row__accordion" }, h("div", { key: 'daab2013b0f8cb7019f710bd5fc412c0c8797e5c', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'a35dd9a81ede77ed664c4f9c00197a91bc90a780', class: "ir-revenue-row__header-left" }, h("p", { key: 'cfc31a9dc5ea38c03ed541905f70fb33326ffa3f', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: 'e7106767edb7f2d3153797f8770aa45c5c16dbb9', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'a9b2713fcc1dbdadf451f7da0178304ee82ac577', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '83bb91ea4c114fd7f369af476748b4ad4b646a34', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'b1e664982df3336d188b8a27ffdb74f8b34c5eb2', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
