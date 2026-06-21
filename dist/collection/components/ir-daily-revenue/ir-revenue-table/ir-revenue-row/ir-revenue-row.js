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
        return (h(Host, { key: 'f10e2d19f4adc5c424c78dd4928bc388f17658c2' }, h("ir-accordion", { key: '0991c5443b793876de46e20aefeb7e2a224ff535', class: "ir-revenue-row__accordion" }, h("div", { key: '7d3b524ad37f2436a887311cc0a41a67a5123ccc', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'c7959823a53f05cb458e64fbcab503c76b45466f', class: "ir-revenue-row__header-left" }, h("p", { key: '11730241131c4f9ea24acadb6834383609837cd8', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: 'ee099a7adc322744c074ee213b98ff81d72b084a', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '2485e6c147aedc45a62ce00fc6454a49025ca69b', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '87ce28c0d5d75e37eb1e6ac941a7ae4fc26273bc', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'fe2f6f1e676e7a05500c1a2dd4fff51d9aef4850', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
