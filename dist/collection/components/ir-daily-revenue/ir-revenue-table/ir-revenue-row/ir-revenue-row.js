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
        return (h(Host, { key: 'ce113b4d2381d70288c8f26a2187d260e9d344fb' }, h("ir-accordion", { key: 'b4aec7adb2ccfa013c8a49682d5bd10eacf99304', class: "ir-revenue-row__accordion" }, h("div", { key: '2405b49206ef2f26c8bd786e5039e3347ddf85ac', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '279b86b2c4cbcfe98aa375936b862c8af376c0d8', class: "ir-revenue-row__header-left" }, h("p", { key: '1a15eb9cd4a82b799ecbb4fc60aa12d44324c67c', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: '40308c3229c5213d33dc3b1e6224bdb46896b7c3', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '56e7cdd3c2166e9c6bdc2602459991ebfcafacb2', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'bbc80f0bb00ee847fc18b4c9f40fd3a7649043a0', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '36a0d00202fe9603f09511b6e557ebc203090331', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
