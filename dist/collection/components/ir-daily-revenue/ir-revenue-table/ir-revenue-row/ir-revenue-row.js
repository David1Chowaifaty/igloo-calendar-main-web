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
        return (h(Host, { key: '89e7ec9e5d880d65e105ef67a4c436232e04aaac' }, h("ir-accordion", { key: '703215cd19dd334e6eaca64dc0d17b55d1593d77', class: "ir-revenue-row__accordion" }, h("div", { key: 'af5a0245bca2b69d41f4a078293e9569c5ade1af', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'f730c02ef3edd59615a0444fa9d123030f07ee2b', class: "ir-revenue-row__header-left" }, h("p", { key: '31de3a8f7ad8f424127b7bb909b89837efe71a88', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: 'f401e757886d84bd9d9e99aa1c5f422b663fa5b3', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '0fdcfc2aa910d836fd465ec706ea5d04a173211d', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'fe0d6e8427ae2451304e9a17c5014a251120a5f5', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '8525220c0376b5f24e3d5e47012eebc9cbc6d1d0', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
