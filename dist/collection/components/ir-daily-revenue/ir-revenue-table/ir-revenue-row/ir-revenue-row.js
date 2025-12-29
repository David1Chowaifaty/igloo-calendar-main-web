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
        return (h(Host, { key: 'fd6e70f2e1adef41edf3d76d66892c54bfddf4dc' }, h("ir-accordion", { key: 'b08963abbb5aeadf1b84c2fae8c158e04a2f9c6d', class: "ir-revenue-row__accordion" }, h("div", { key: '5d9182bf44fb74a5cb1407d437490c14a490df1b', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '2fe4eda9258354da1c89bbe107b49083f8b6e276', class: "ir-revenue-row__header-left" }, h("p", { key: 'd4c46acc1d86700ba4db2e7181791e53d9c857a9', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: '4ff706b68f125d20af09a8442a265d6f37a7603a', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '6b1e2d0019288dc35fe5b38d80113c9fd9177c4e', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '2fb5ab13040d99dd2c2a6b27d393f9c0993a2c9b', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '0472f4b875bfcba661c9f5224c1292b55dbc05f5', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
