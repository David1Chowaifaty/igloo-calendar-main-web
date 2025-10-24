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
        return (h(Host, { key: '99a6cf1e4454723c1b85cc8b1f451d106e560810' }, h("ir-accordion", { key: '9fca7816260793c7e05ac00e652db4e445519e36', class: "ir-revenue-row__accordion" }, h("div", { key: '71522e8b917fa20cab8c232083dd5caa6dfa5e5b', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'c1f527cd9b6c4d90a16edb563e758a8341697463', class: "ir-revenue-row__header-left" }, h("p", { key: '8f04d2f5206e018539ea0a4768a7b9dd7813bf91', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'dc9a96b54114c6d94bf29f4360e93a56fbbe2b90', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'af6b6ea10d3cd8a0b5ff830009d2c86216c4bc05', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'c913a8027ec4aed418539e6e38598355d1ebe5e8', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'a85efefd1656698c490d7a48e5d9a10158de198c', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
