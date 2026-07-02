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
        return (h(Host, { key: '4b0541512495dc478c6c18cd04d51af996c3ba94' }, h("ir-accordion", { key: '29fd50925907c6ba6bf4fb4642c3f3fc91f8a7fd', class: "ir-revenue-row__accordion" }, h("div", { key: '0f544a85cd89f010a111dfb1bc8fa11c46785aa2', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'b5cd2c3f0c1f74612754a9521efb555ad1f3a80f', class: "ir-revenue-row__header-left" }, h("p", { key: 'cde3bd4c6486b64d9312164265ebfcadaad81b46', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '075ff07df0abc208f0558c13d388d9d4d2b66395', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '2da500e56dcfd2a13272a40b1bd50c5ee7db69e2', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '1f679ed54c71d633c51f800e171d3b1004ebd656', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '48a8841bd8d8cae365b7ff3f2e35a134600f75f2', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
