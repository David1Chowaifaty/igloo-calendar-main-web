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
        return (h(Host, { key: '69aebbd6e67bcbbfd72378097ba42ade516f910f' }, h("ir-accordion", { key: '752b4433bd7cfbc30912c85221b42d546a3448aa', class: "ir-revenue-row__accordion" }, h("div", { key: '6bedf516e2b4bd3fd6889e91e63aee7437451a61', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '8d1cd608ecc43058ab085d66194890f79a1b939c', class: "ir-revenue-row__header-left" }, h("p", { key: 'bddf54073de42184db206bc83ef1728b3d8353da', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '6a6b0b794580c93f823dab68ad8ad40d22482ba9', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'f03e6698f040d87f6d4ee3f26cd867e7db0714ae', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '85c8ab2225e81f8a2d118404e9b74a7f9dc84bab', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'f91842dce8dc519b97feb8dfaa00daa9e62800fc', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
