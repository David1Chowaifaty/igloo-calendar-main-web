import { Host, h } from "@stencil/core";
import { formatAmount, formatCount } from "../../../../utils/number";
import { t } from "../../../../services/locale/t";
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
        return (h(Host, { key: 'ca015bbbc4fdb1d3c6963311ea2d981f7c0c9dbd' }, h("ir-accordion", { key: '7cd34304b8970642a49878c137648e165ea25f40', class: "ir-revenue-row__accordion" }, h("div", { key: 'd016c02a6ded55798d7096d9fe2997d3cbdeeec7', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '4e5e815f63fb5b1291d185557b0a90332d001c2a', class: "ir-revenue-row__header-left" }, h("p", { key: 'cc2c6711933ce0ed24c2c1915944cdcf4dc9ce44', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: '9a86ce4ec7dd76c9d529cdd8bd30c166cc4ec28f', variant: "brand", "aria-label": t('Lcz_TransactionsCountAriaLabel', { fallback: '%1 transactions', params: [formatCount(this.payments.length)] }) }, formatCount(this.payments.length)))), h("p", { key: '4d5d37371f55ba4b740512340e6b140107c96e9f', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '9ecee49e539a40762e30e7c6720faece05836cca', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'f42c4fadb1ca0a028fdc38bffa54c98071e7473e', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
