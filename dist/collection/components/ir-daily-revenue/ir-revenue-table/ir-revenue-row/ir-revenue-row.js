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
        return (h(Host, { key: '9851bdd1d583777cfefd170bcc9e2fc2a18d980d' }, h("ir-accordion", { key: 'ad41718ef26a320a461c4c130450df2542209904', class: "ir-revenue-row__accordion" }, h("div", { key: 'af1c34e38a24dc75a667e8b3056896fa2da58f8a', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '99c2f221c6d713d320b9b3f7559199b68326fef8', class: "ir-revenue-row__header-left" }, h("p", { key: '699d05fdc7ed7f27fc2da2bdebfb59c10650d159', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '924cacc2b227c1c0f2e72adedcb100634625d5ba', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '57e66e4f5a9f16bd3ce46e45efb3bfa30bb794ab', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'b5d6173c4a689d9e81850f650bac57a39e135408', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '29fea0d678e96607db45330972746f5d8d482779', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
