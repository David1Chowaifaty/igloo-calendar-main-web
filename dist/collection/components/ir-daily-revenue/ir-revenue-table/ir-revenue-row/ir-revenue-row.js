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
        return (h(Host, { key: '4371ba0ad67e8486cdb37ad03c9db93fd90c8c9c' }, h("ir-accordion", { key: '13abe35a91ca2c3a1769bdc5273b1a28c87ea44c', class: "ir-revenue-row__accordion" }, h("div", { key: '83d32064cf95e6ae1fde7ac14c7430acaeee1d27', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '94d186d2dbc0c8d05316b31061d0f07983b06d88', class: "ir-revenue-row__header-left" }, h("p", { key: 'eccd0a3b12bb382e899163b30f48e6309e2a0825', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: '4cb54c7607e0bf50340bf9c03d5aee18bcc3165f', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'bf6cc0f1db2b1b1e922503f3a3c4c30fc79d5a12', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '521166e3a00b3078a7fd6e6c0aa8377c8ecfb268', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '9984062873c27462a1603b6b32fd5cc7c4778fc9', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
