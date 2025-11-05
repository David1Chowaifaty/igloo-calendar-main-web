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
        return (h(Host, { key: 'b5dd7ef882f2d0bb3f8fdb096cd9f065e2cbc0dc' }, h("ir-accordion", { key: '2e3bf8fff7d1ae2f0cd72b548926d50988470372', class: "ir-revenue-row__accordion" }, h("div", { key: '5a849f2115cb48e2a35865e68c753fd1e295d810', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'bedb93ffe12596e880264f753e536a7936c941dc', class: "ir-revenue-row__header-left" }, h("p", { key: '18bcbf815712e234226ed84dc3dcdb81f3e528ff', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'e5eecf5c5267f36b1283204935d688e319fb38fc', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '3bc675da307d6cc88e253c6db9e2fba10f7aa7f8', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '0e6089deae856c115961ce304c9328879b66d318', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'd11c4c64ca620b67ab0b5af315f1d3320de7bd56', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
