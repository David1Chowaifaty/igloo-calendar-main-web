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
        return (h(Host, { key: '87292ae2e38bb55241731fd624608d1456b0f828' }, h("ir-accordion", { key: 'c08a2dcbab7406f8543ad49f948b6c42661e223d', class: "ir-revenue-row__accordion" }, h("div", { key: '04b5b851107fde2a5a6a874c2dd1f21a65855679', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '521e55bfc52dcc3b1948b2d3075645c5a49dfffe', class: "ir-revenue-row__header-left" }, h("p", { key: 'cbea55732fcabc8751d6de054eeb79bb32302540', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: '50c37bc2251344fd66849a531974ed530020f8f6', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '57068f0ebb3eaaf82550e271ea1b55f77835c967', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '1175d7281d4d56bb5b136882385fa30c815ddc7a', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '7b0235de0f7f1cc8e74b5f721f4e50ddb6b6c9e9', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
