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
        return (h(Host, { key: '770282d2d042547f49857b25a1504de6500844c5' }, h("ir-accordion", { key: 'b2def9817bfaac750292954abc6b8688d41d1daa', class: "ir-revenue-row__accordion" }, h("div", { key: '120339c5c4b899c3581dec5c111fee13a3fbece6', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '623b043ad9260304930788a13fdb08106f637ddb', class: "ir-revenue-row__header-left" }, h("p", { key: '1fd06dc2276e573abe3c48801c44ecd287d1635d', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'd847bf608690cc15f8b99fc86ea4832d777d8e84', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'f4fee761172edc945f907582a6b3e0469c443930', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '81970549d409ea174f9ef4a18e328e5e3e11376a', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '30a1a154ff68dbf9d646e24d0827d5e1a795cc67', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
