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
        return (h(Host, { key: '703088301f2f3959a5157449ed1cb412e43fe9c1' }, h("ir-accordion", { key: 'e71c366ad79884fa5cc5aa2f2c70723d51e011d0', class: "ir-revenue-row__accordion" }, h("div", { key: 'c5d54e141c519d152aa1728db5783ed67971e35d', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '862a6b0be5fb3285bc13ea048a5c4d3e969aff67', class: "ir-revenue-row__header-left" }, h("p", { key: '064d76145cb9e93a6683418cea25c22b92d2b8a5', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '6128b4b0ea8bda0e32d7f811f2ce76e6651ad0c0', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'bd3ff5d06ff6a50ee452ba3ecd3aafd52d299f92', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '784601ffa89e434b35230f067550d525502f5568', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'c65cb47e14c0b9dc9e2ceef89f2a9fffc6b1fa9b', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
