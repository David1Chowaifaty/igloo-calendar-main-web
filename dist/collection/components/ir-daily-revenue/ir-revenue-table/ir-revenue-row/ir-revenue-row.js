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
        return (h(Host, { key: 'c49fd08907a81fc429426bdb20af1b30f6b7a16a' }, h("ir-accordion", { key: '4ad5f072dc8dd10c2e49e17e9448eae9308201dc', class: "ir-revenue-row__accordion" }, h("div", { key: 'f3d757d271b635b6ee284615049a5d5b198d2dc8', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '49254aa0d09926ee3556132cfee6704bc3989a79', class: "ir-revenue-row__header-left" }, h("p", { key: '9c34bb843fcd6fafd76c756f91f261e135449a1e', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'ed16ab8b6c3cd74ea1088887ac07d8973ec50e75', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '0e481797d4b36db1c2bd8741ef16f24392c14cb9', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'b85b39c7a6ebde56503c9c90cf58b38595a45c92', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'fc0846eb25555ca17b7813e919e6339f3da760be', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
