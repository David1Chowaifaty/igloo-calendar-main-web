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
        return (h(Host, { key: '99c48e69fcde6d6c3e21ad12609eec0ca991251f' }, h("ir-accordion", { key: '7e1f3d4160be0f3981a8e04acbf1735d6bf0212d', class: "ir-revenue-row__accordion" }, h("div", { key: '61bf001065e2d112b7cc472b12db508ee8ab3371', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'd7f648de5aed63e75c7b3ef336aea72204da9b38', class: "ir-revenue-row__header-left" }, h("p", { key: '41a0518f728fb9a64e10391a66bcbdf114c5453c', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: '0eb11f845998a8768b08c87153f26107647947f2', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'cda9daf94034585aa849ca611eabbbbcffc75ee2', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '7ab2aa2c5bb03b12568bd35658dfd0a69db0e4f0', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '43706ad899a686492db6ba5051470864de716e40', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
