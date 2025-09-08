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
        return (h(Host, { key: '4174640f3bec4f20c0a97209941ce2653faf0b69' }, h("ir-accordion", { key: '9ef0e9d3de73850d9d6e28a98153857e6509477b', class: "ir-revenue-row__accordion" }, h("div", { key: 'fe46fd7d1dc1d160ea19aee95cc28125d8b1c587', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '7e60e1a939a378831572e247203576cb4a49b848', class: "ir-revenue-row__header-left" }, h("p", { key: '8721ba81490d0b73b25c5d19b3cfc3477d5e042d', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'be8849a8d6b7ea4f7226ce9c886b27fb9133adb7', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '7a7e37b0e9dc833cb628200d6a02de7d6dc1e6c5', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '82ea1e2f14bb535981829974436c987fd2cf4e87', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '9636213366e7e6a92b1e12d2a76be48ce70d81f2', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
