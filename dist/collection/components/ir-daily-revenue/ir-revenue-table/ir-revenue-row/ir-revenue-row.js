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
        return (h(Host, { key: 'eb4a209e64660b08b8e34bf42ccbd6ca23575046' }, h("ir-accordion", { key: 'bb594442d05c57e15d1b46f0a7f8969f92070974', class: "ir-revenue-row__accordion" }, h("div", { key: '271340e53d4e13eb9d21d798ccf5d2cc27a5f09b', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '41f078fde4299bfcc218984026f3a74922d20faf', class: "ir-revenue-row__header-left" }, h("p", { key: '5668a6d0984ff1243213f39d8dd6967d45141b96', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '4bd1adae65f896d70c25c602a1c9650649bd83a1', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '15db8ddf461a99e4e9e2eabf45f9151ca549e883', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '7edaf92084e8152ff6a00bfd217a40f34f6616f8', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '4b105f1845c0cb7d8ed4d660d4ebd517928c8aec', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
