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
        return (h(Host, { key: '823c27a1a3ea0643f27803339f033379e1b1f9e5' }, h("ir-accordion", { key: '335db0e68e247f1c1d83f63de5768d575d787ef8', class: "ir-revenue-row__accordion" }, h("div", { key: 'cee8bdfef80fec7f865e7a2705509c8b3d695615', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '7236d47c86d008fd6827d17565a2c20b66c439d3', class: "ir-revenue-row__header-left" }, h("p", { key: '0413931df02fe15262dcd29001f1a5d60d6970e0', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '4983504a6293c5d2ccd0d9eb09b73a9b72b3a4a3', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'f3f921bef0121e97fbf66811711f234403a59590', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'f9f8f65c2d3bbb460e2e2be63e8f360c0acd3b5e', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'f2778f59c8692e2d8672108cc651cdddf51925c3', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
