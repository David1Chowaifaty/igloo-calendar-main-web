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
        return (h(Host, { key: 'e4a816eaa7c3d813442d0cea850b12bbfdbb52a1' }, h("ir-accordion", { key: 'd18b05d19e68e6da83c56508d81d41e3242c0f71', class: "ir-revenue-row__accordion" }, h("div", { key: '7549503db89ba18b5f84bb7ee3e864fef51958b7', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'e6f4d2e6dac96c842b0f82bb0c64513ae36dc72d', class: "ir-revenue-row__header-left" }, h("p", { key: 'feaa46a65f5623966b177f97ba36d756ed6c299d', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'e90451b818d086ceb00ad3942348157706baeb4f', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'd1d533e8c8d7ba20b2f33e95f235ab789ea55267', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '9d9ec2b85831713f984a1a62bb59ab7ca8a349da', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '9a2be6d65812f65bb709832a8e19907753a0e024', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
