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
        return (h(Host, { key: '9b92d1bfefb913dcdfd51e76aa4e51f56c8dcaf9' }, h("ir-accordion", { key: '45a9c95886da6b31daec71527b245858a6ea347a', class: "ir-revenue-row__accordion" }, h("div", { key: 'ee2e3becff43f9b3e086f6e584d24bf479f77189', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'dee6b4265d94af3a04d55bfc002af3adfd550153', class: "ir-revenue-row__header-left" }, h("p", { key: '5a6b3fb412c51a83ab4e0634daf6f60ee684f00d', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '2f71dd012965a55ded3176e74ff687706d5f2658', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '4625cf204ed0b76f71fbe4005508e32a69f986c0', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'a6705eceeee9a1514721d611bbe611317ad873c2', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '3cf5b09bcf3629b41564222ee093fb465e4d9e8e', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
